-- ==================================
-- MOVILIAX - Database Initialization
-- ==================================
-- Script de inicialización para PostgreSQL
-- Se ejecuta automáticamente al crear el contenedor

-- Establecer timezone a México
SET timezone = 'America/Mexico_City';

-- Crear extensiones necesarias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";
CREATE EXTENSION IF NOT EXISTS "unaccent";

-- ==================================
-- TABLAS PRINCIPALES
-- ==================================

-- Tabla de Usuarios
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
    role VARCHAR(50) DEFAULT 'reader',
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP WITH TIME ZONE
);

-- Tabla de Artículos
CREATE TABLE IF NOT EXISTS articles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(255) UNIQUE NOT NULL,
    title VARCHAR(500) NOT NULL,
    subtitle TEXT,
    excerpt TEXT,
    content TEXT NOT NULL,
    author_id UUID REFERENCES users(id) ON DELETE SET NULL,
    category VARCHAR(100) NOT NULL,
    tags TEXT[],
    featured_image_url TEXT,
    status VARCHAR(50) DEFAULT 'draft',
    published_at TIMESTAMP WITH TIME ZONE,
    views INTEGER DEFAULT 0,
    reading_time INTEGER,
    seo_title VARCHAR(255),
    seo_description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Categorías
CREATE TABLE IF NOT EXISTS categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) UNIQUE NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    color VARCHAR(7),
    icon VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Newsletter
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
    subscribed BOOLEAN DEFAULT true,
    subscription_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    unsubscribed_date TIMESTAMP WITH TIME ZONE,
    source VARCHAR(100),
    tags TEXT[],
    metadata JSONB
);

-- Tabla de Comentarios
CREATE TABLE IF NOT EXISTS comments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    article_id UUID REFERENCES articles(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    parent_id UUID REFERENCES comments(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Analytics
CREATE TABLE IF NOT EXISTS analytics_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_type VARCHAR(100) NOT NULL,
    article_id UUID REFERENCES articles(id) ON DELETE SET NULL,
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    session_id VARCHAR(255),
    metadata JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ==================================
-- ÍNDICES
-- ==================================

-- Índices para búsquedas rápidas
CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug);
CREATE INDEX IF NOT EXISTS idx_articles_status ON articles(status);
CREATE INDEX IF NOT EXISTS idx_articles_published_at ON articles(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_articles_category ON articles(category);
CREATE INDEX IF NOT EXISTS idx_articles_author ON articles(author_id);
CREATE INDEX IF NOT EXISTS idx_articles_tags ON articles USING GIN(tags);

-- Índices de texto completo
CREATE INDEX IF NOT EXISTS idx_articles_title_search ON articles USING GIN(to_tsvector('spanish', title));
CREATE INDEX IF NOT EXISTS idx_articles_content_search ON articles USING GIN(to_tsvector('spanish', content));

-- Índices para comments
CREATE INDEX IF NOT EXISTS idx_comments_article ON comments(article_id);
CREATE INDEX IF NOT EXISTS idx_comments_user ON comments(user_id);
CREATE INDEX IF NOT EXISTS idx_comments_parent ON comments(parent_id);

-- Índices para analytics
CREATE INDEX IF NOT EXISTS idx_analytics_event_type ON analytics_events(event_type);
CREATE INDEX IF NOT EXISTS idx_analytics_article ON analytics_events(article_id);
CREATE INDEX IF NOT EXISTS idx_analytics_created_at ON analytics_events(created_at);

-- ==================================
-- FUNCIONES Y TRIGGERS
-- ==================================

-- Función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers para updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_articles_updated_at BEFORE UPDATE ON articles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_comments_updated_at BEFORE UPDATE ON comments
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Función para incrementar views
CREATE OR REPLACE FUNCTION increment_article_views(article_slug VARCHAR)
RETURNS VOID AS $$
BEGIN
    UPDATE articles 
    SET views = views + 1 
    WHERE slug = article_slug;
END;
$$ LANGUAGE plpgsql;

-- ==================================
-- DATOS INICIALES
-- ==================================

-- Insertar categorías predeterminadas
INSERT INTO categories (name, slug, description, color, icon) VALUES
    ('Movilidad Urbana', 'movilidad-urbana', 'Transporte público, micromovilidad y ciudades inteligentes', '#00E0FF', 'map'),
    ('Logística Digital', 'logistica-digital', 'E-commerce, última milla y automatización', '#6B46FF', 'truck'),
    ('Electromovilidad', 'electromovilidad', 'Vehículos eléctricos e infraestructura de carga', '#00FF88', 'bolt'),
    ('Nearshoring', 'nearshoring', 'Cadenas de suministro e inversión', '#FF6B6B', 'globe'),
    ('Innovación Tech', 'innovacion-tech', 'IA, IoT y blockchain en logística', '#FFD93D', 'cpu')
ON CONFLICT (slug) DO NOTHING;

-- Insertar usuario admin por defecto
INSERT INTO users (email, name, role) VALUES
    ('contactomoviliax@gmail.com', 'MoviliaX Team', 'admin')
ON CONFLICT (email) DO NOTHING;

-- ==================================
-- VISTAS ÚTILES
-- ==================================

-- Vista de artículos publicados
CREATE OR REPLACE VIEW published_articles AS
SELECT 
    a.*,
    u.name as author_name,
    u.avatar_url as author_avatar,
    c.name as category_name,
    c.color as category_color
FROM articles a
LEFT JOIN users u ON a.author_id = u.id
LEFT JOIN categories c ON a.category = c.slug
WHERE a.status = 'published'
    AND a.published_at <= CURRENT_TIMESTAMP
ORDER BY a.published_at DESC;

-- Vista de artículos más vistos
CREATE OR REPLACE VIEW top_articles AS
SELECT 
    id, slug, title, views, category, published_at
FROM articles
WHERE status = 'published'
ORDER BY views DESC
LIMIT 10;

-- ==================================
-- PERMISOS
-- ==================================

-- Otorgar permisos al usuario de la aplicación
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO moviliax;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO moviliax;
GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public TO moviliax;

-- ==================================
-- INFORMACIÓN
-- ==================================

SELECT 'Database initialized successfully!' as message;
SELECT 'MoviliaX - Movilidad y Logística Digital' as project;
SELECT COUNT(*) || ' categories created' as categories FROM categories;
