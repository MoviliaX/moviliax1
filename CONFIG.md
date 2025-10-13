# 🔧 Archivos de Configuración - MoviliaX

Este directorio contiene todos los archivos de configuración necesarios para el proyecto MoviliaX.

## 📋 Archivos Incluidos

### 🔹 Dependencias y Paquetes

- **`package.json`** - Dependencias de Node.js, scripts y configuración del proyecto
  - Incluye Next.js 14, React 18, Supabase, y todas las dependencias necesarias
  - Scripts configurados: `dev`, `build`, `start`, `lint`, `test`

### 🔹 Variables de Entorno

- **`.env.example`** - Template de variables de entorno
  - Copia este archivo como `.env.local` y completa con tus valores reales
  - **NUNCA** subas `.env.local` al repositorio
  - Incluye configuraciones para:
    - Next.js
    - Supabase (Base de datos)
    - PostgreSQL
    - Strapi CMS
    - Cloudflare R2
    - Email (ConvertKit/Mailchimp)
    - Analytics (GA4, Plausible)
    - APIs externas

### 🔹 Docker

- **`Dockerfile`** - Imagen Docker optimizada con multi-stage build
  - Build optimizado para producción
  - Usuario no-root para seguridad
  - Health check incluido
  - Tamaño de imagen minimizado

- **`docker-compose.yml`** - Stack completo de servicios
  - Next.js App
  - PostgreSQL 16
  - Redis 7
  - Strapi CMS (opcional con profile)
  - pgAdmin (opcional con profile)
  - Nginx (opcional para producción)

- **`.dockerignore`** - Archivos excluidos del contexto Docker
  - Optimiza el tiempo de build
  - Reduce el tamaño de la imagen

### 🔹 Editor y Código

- **`.editorconfig`** - Configuración de editor para consistencia de código
  - Funciona con VS Code, WebStorm, Sublime, etc.
  - Define indentación, charset, line endings, etc.

- **`next.config.js`** - Configuración de Next.js
  - Optimizaciones de imágenes
  - Headers de seguridad
  - Internacionalización (i18n)
  - Redirects y rewrites
  - Webpack customizations

### 🔹 Automatización

- **`Makefile`** - Comandos útiles del proyecto
  - Simplifica tareas comunes
  - Ver sección de "Uso Rápido" abajo

---

## 🚀 Inicio Rápido

### Opción 1: Desarrollo Local (sin Docker)

```bash
# 1. Copiar variables de entorno
cp .env.example .env.local

# 2. Editar .env.local con tus valores
nano .env.local

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev

# 5. Abrir http://localhost:3000
```

### Opción 2: Desarrollo con Docker

```bash
# 1. Copiar variables de entorno
cp .env.example .env.local

# 2. Editar .env.local (o usar valores por defecto)

# 3. Levantar servicios
make docker-dev
# O con Makefile tradicional:
docker-compose up -d

# 4. Ver logs
make docker-logs

# 5. Abrir http://localhost:3000
```

### Opción 3: Con CMS Strapi incluido

```bash
make docker-dev-cms
# O:
docker-compose --profile cms up -d

# Accesos:
# - App: http://localhost:3000
# - Strapi: http://localhost:1337
```

---

## 📝 Comandos Make Disponibles

```bash
make help              # Ver todos los comandos disponibles
make install           # Instalar dependencias
make dev               # Servidor de desarrollo local
make docker-dev        # Levantar stack Docker completo
make docker-stop       # Detener servicios Docker
make docker-logs       # Ver logs de servicios
make lint              # Ejecutar linter
make format            # Formatear código
make test              # Ejecutar tests
make db-shell          # Conectar a PostgreSQL
make info              # Ver información del proyecto
```

---

## 🐳 Servicios Docker

Cuando levantes el stack con Docker, tendrás acceso a:

| Servicio | Puerto | URL | Credenciales por defecto |
|----------|--------|-----|--------------------------|
| **Next.js App** | 3000 | http://localhost:3000 | - |
| **PostgreSQL** | 5432 | localhost:5432 | user: `moviliax` / pass: `moviliax2025` |
| **Redis** | 6379 | localhost:6379 | pass: `moviliax2025` |
| **Strapi CMS** | 1337 | http://localhost:1337 | (configurar en primer uso) |
| **pgAdmin** | 5050 | http://localhost:5050 | email: `admin@moviliax.lat` / pass: `admin123` |

---

## 🔐 Seguridad

### ⚠️ IMPORTANTE - Variables Sensibles

Nunca subas al repositorio:
- `.env.local`
- `.env.development.local`
- `.env.production.local`
- Cualquier archivo con credenciales reales

### ✅ Buenas Prácticas

1. Usa `.env.example` como template
2. Documenta nuevas variables en `.env.example`
3. Usa secretos largos y seguros (mínimo 32 caracteres)
4. Rota las credenciales periódicamente
5. Usa diferentes credenciales para desarrollo/producción

---

## 📦 Estructura Recomendada del Proyecto

```
moviliax1/
├── .env.example            # ← Este archivo
├── .env.local              # ← Crear (no commitear)
├── .editorconfig
├── .dockerignore
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── Makefile
├── next.config.js
├── package.json
├── package-lock.json
├── tsconfig.json
├── README.md
├── src/
│   ├── app/                # Next.js 14 App Router
│   ├── components/
│   ├── lib/
│   ├── styles/
│   └── types/
├── public/
│   ├── images/
│   └── fonts/
├── content/                # Artículos en Markdown
├── scripts/
│   └── init-db.sql
└── docs/
```

---

## 🛠️ Personalización

### Agregar nuevas dependencias

```bash
# Dependencia de producción
npm install nombre-paquete

# Dependencia de desarrollo
npm install -D nombre-paquete
```

### Agregar nueva variable de entorno

1. Agregar en `.env.example` con comentario
2. Agregar en `.env.local` con valor real
3. Documentar en este README
4. Si es pública (cliente), usar prefijo `NEXT_PUBLIC_`

### Agregar nuevo servicio Docker

1. Editar `docker-compose.yml`
2. Agregar servicio bajo `services:`
3. Configurar red: `moviliax-network`
4. Agregar volumen si necesita persistencia

---

## 🚨 Troubleshooting

### Error: Port already in use

```bash
# Ver qué está usando el puerto
lsof -i :3000

# Detener servicios Docker
make docker-stop
```

### Error: Cannot connect to database

```bash
# Verificar que PostgreSQL está corriendo
docker ps | grep postgres

# Ver logs de PostgreSQL
docker logs moviliax-postgres

# Reiniciar servicios
make docker-restart
```

### Error: Module not found

```bash
# Limpiar cache y reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Limpiar todo y empezar de cero

```bash
make docker-clean       # Elimina contenedores y volúmenes
make clean-cache        # Limpia cache de Next.js
rm -rf node_modules     # Elimina dependencias
npm install             # Reinstala todo
```

---

## 📚 Recursos Adicionales

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Docker](https://docs.docker.com/)
- [Supabase Docs](https://supabase.com/docs)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [Strapi Docs](https://docs.strapi.io/)

---

## 💬 Soporte

¿Problemas con la configuración?

- Email: contactomoviliax@gmail.com
- GitHub Issues: [github.com/MoviliaX/moviliax1/issues](https://github.com/MoviliaX/moviliax1/issues)
- LinkedIn: [linkedin.com/company/moviliax](http://linkedin.com/company/moviliax)

---

**Hecho con ❤️ para MoviliaX**  
*Impulsando la movilidad y logística en Latinoamérica*
