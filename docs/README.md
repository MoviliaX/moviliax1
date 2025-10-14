# 🧩 Componentes MoviliaX

Documentación completa de los componentes React/Next.js del proyecto MoviliaX.

## 📁 Estructura de Carpetas

```
src/components/
├── common/          # Componentes reutilizables básicos
├── layout/          # Componentes de estructura de página
├── features/        # Componentes específicos de funcionalidades
├── ui/             # Componentes de UI primitivos
└── index.ts        # Exportaciones centralizadas
```

---

## 📦 Componentes Disponibles

### 🎨 Layout Components (`/layout`)

#### **Header**
```tsx
import { Header } from '@/components/layout/Header';

<Header className="custom-class" />
```
Encabezado principal con logo, navegación y búsqueda.

#### **Footer**
```tsx
import { Footer } from '@/components/layout/Footer';

<Footer />
```
Pie de página con enlaces, redes sociales y copyright.

#### **Navbar**
```tsx
import { Navbar } from '@/components/layout/Navbar';

<Navbar />
```
Barra de navegación responsive con menú móvil.

#### **Sidebar**
```tsx
import { Sidebar } from '@/components/layout/Sidebar';

<Sidebar className="hidden lg:block" />
```
Barra lateral con categorías, posts populares y tags.

---

### 🔧 Common Components (`/common`)

#### **Button**
```tsx
import { Button } from '@/components/common/Button';

<Button 
  variant="primary"    // 'primary' | 'secondary' | 'outline' | 'ghost'
  size="md"           // 'sm' | 'md' | 'lg'
  fullWidth={false}
  onClick={() => {}}
>
  Click me
</Button>
```

**Variantes disponibles:**
- `primary` - Botón principal (azul)
- `secondary` - Botón secundario (gris)
- `outline` - Botón con borde
- `ghost` - Botón sin fondo

#### **Card**
```tsx
import { Card } from '@/components/common/Card';

<Card 
  hover={true}        // Efecto hover
  padding="md"        // 'none' | 'sm' | 'md' | 'lg'
  className="custom"
>
  Contenido
</Card>
```

#### **Logo**
```tsx
import { Logo } from '@/components/common/Logo';

<Logo 
  variant="dark"      // 'light' | 'dark'
  size="md"          // 'sm' | 'md' | 'lg'
/>
```

#### **SearchBar**
```tsx
import { SearchBar } from '@/components/common/SearchBar';

<SearchBar 
  placeholder="Buscar artículos..." 
  className="w-full"
/>
```
Barra de búsqueda con navegación automática a `/buscar?q=query`.

---

### ✨ Feature Components (`/features`)

#### **ArticleCard**
```tsx
import { ArticleCard } from '@/components/features/ArticleCard';

<ArticleCard
  slug="mi-articulo"
  title="Título del artículo"
  excerpt="Descripción breve..."
  image="/images/article.jpg"
  author={{
    name: "Juan Pérez",
    avatar: "/avatars/juan.jpg"
  }}
  date="2024-10-13"
  category="Movilidad Urbana"
  readTime={5}
/>
```

#### **AuthorCard**
```tsx
import { AuthorCard } from '@/components/features/AuthorCard';

<AuthorCard
  slug="juan-perez"
  name="Juan Pérez"
  bio="Experto en movilidad urbana..."
  avatar="/avatars/juan.jpg"
  role="Editor Senior"
  articlesCount={24}
  social={{
    twitter: "https://twitter.com/juanperez",
    linkedin: "https://linkedin.com/in/juanperez"
  }}
/>
```

#### **Newsletter**
```tsx
import { Newsletter } from '@/components/features/Newsletter';

<Newsletter />
```
Formulario de suscripción a newsletter con validación.

#### **CategoryFilter**
```tsx
import { CategoryFilter } from '@/components/features/CategoryFilter';

<CategoryFilter
  categories={[
    { slug: 'movilidad', name: 'Movilidad Urbana', count: 24 },
    { slug: 'logistica', name: 'Logística', count: 18 }
  ]}
  selectedCategory="movilidad"
  onCategoryChange={(slug) => console.log(slug)}
  showAll={true}
/>
```

---

### 🎯 UI Components (`/ui`)

#### **Badge**
```tsx
import { Badge } from '@/components/ui/Badge';

<Badge 
  variant="primary"   // 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'
  size="md"          // 'sm' | 'md' | 'lg'
>
  Etiqueta
</Badge>
```

#### **Input**
```tsx
import { Input } from '@/components/ui/Input';

<Input
  label="Email"
  placeholder="tu@email.com"
  type="email"
  error="Campo requerido"
  helperText="Ingresa un email válido"
  fullWidth={true}
/>
```

#### **Container**
```tsx
import { Container } from '@/components/ui/Container';

<Container 
  size="lg"          // 'sm' | 'md' | 'lg' | 'xl' | 'full'
  className="py-12"
>
  Contenido centrado y responsive
</Container>
```

**Tamaños disponibles:**
- `sm` - 640px
- `md` - 768px
- `lg` - 1024px
- `xl` - 1280px
- `full` - 100%

---

## 🚀 Guía de Uso

### Importación Centralizada

Puedes importar todos los componentes desde el archivo index:

```tsx
import { 
  Header, 
  Footer, 
  ArticleCard, 
  Button 
} from '@/components';
```

### Ejemplo de Página Completa

```tsx
import { 
  Header, 
  Footer, 
  Container, 
  ArticleCard,
  Newsletter,
  Sidebar 
} from '@/components';

export default function HomePage() {
  return (
    <>
      <Header />
      
      <Container size="xl" className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenido Principal */}
          <div className="lg:col-span-2">
            <ArticleCard {...articleData} />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="mt-12">
          <Newsletter />
        </div>
      </Container>
      
      <Footer />
    </>
  );
}
```

---

## 🎨 Personalización

### Tailwind CSS

Todos los componentes utilizan Tailwind CSS. Puedes personalizar los colores en `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          // ... más tonos
          600: '#2563eb',
        }
      }
    }
  }
}
```

### Sobrescribir Estilos

Usa la prop `className` para agregar estilos personalizados:

```tsx
<Button className="bg-gradient-to-r from-purple-600 to-pink-600">
  Botón Personalizado
</Button>
```

---

## 📝 Buenas Prácticas

1. **Componentes Pequeños**: Mantén los componentes enfocados en una sola responsabilidad
2. **Props Tipadas**: Usa TypeScript para todas las props
3. **Accesibilidad**: Incluye labels, aria-labels y navegación por teclado
4. **Responsive**: Todos los componentes deben funcionar en móvil y desktop
5. **Performance**: Usa `'use client'` solo cuando sea necesario

---

## 🔄 Próximos Componentes

- [ ] Breadcrumbs
- [ ] Pagination
- [ ] Modal/Dialog
- [ ] Toast/Notifications
- [ ] Tabs
- [ ] Accordion
- [ ] Dropdown Menu

---

## 📚 Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

---

**Última actualización**: Octubre 2024
**Versión**: 1.0.0
