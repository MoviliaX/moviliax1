# 🛠️ Librería de Utilidades MoviliaX

Documentación completa de todas las funciones y utilidades disponibles en `/src/lib`.

## 📁 Estructura

```
src/lib/
├── index.ts         # Exportaciones centralizadas
├── format.ts        # Formateo de texto y números
├── validation.ts    # Validaciones de formularios
├── date.ts          # Manejo de fechas
├── seo.ts           # Utilidades de SEO
├── mdx.ts           # Manejo de contenido MDX
├── constants.ts     # Constantes del proyecto
├── types.ts         # Tipos TypeScript
├── api.ts           # Cliente HTTP
└── utils.ts         # Utilidades generales
```

---

## 📦 Uso General

Puedes importar todas las utilidades desde el index:

```typescript
import { slugify, formatDate, isValidEmail } from '@/lib';
```

O importar módulos específicos:

```typescript
import { slugify, truncate } from '@/lib/format';
import { formatDate, getRelativeTime } from '@/lib/date';
```

---

## 📝 format.ts

### Funciones de Formateo de Texto

#### **`slugify(text: string): string`**
Convierte texto a formato slug URL-friendly.

```typescript
slugify("Movilidad Urbana en México") 
// → "movilidad-urbana-en-mexico"
```

#### **`truncate(text: string, length: number, suffix?: string): string`**
Trunca un texto a longitud específica.

```typescript
truncate("Este es un texto largo", 10)
// → "Este es un..."
```

#### **`capitalize(text: string): string`**
Capitaliza la primera letra.

```typescript
capitalize("hola mundo") 
// → "Hola mundo"
```

#### **`toTitleCase(text: string): string`**
Convierte a Title Case.

```typescript
toTitleCase("hola mundo") 
// → "Hola Mundo"
```

### Funciones de Formateo de Números

#### **`formatNumber(num: number, locale?: string): string`**
Formatea números con separadores de miles.

```typescript
formatNumber(1234567) 
// → "1,234,567"
```

#### **`formatCurrency(amount: number, currency?: string, locale?: string): string`**
Formatea como moneda.

```typescript
formatCurrency(1234.56, 'MXN') 
// → "$1,234.56"
```

### Funciones de Contenido

#### **`calculateReadTime(content: string, wordsPerMinute?: number): number`**
Calcula tiempo de lectura estimado.

```typescript
calculateReadTime(articleContent) 
// → 5 (minutos)
```

#### **`extractExcerpt(content: string, maxLength?: number): string`**
Extrae un resumen del contenido.

```typescript
extractExcerpt(content, 160) 
// → "Resumen del contenido..."
```

---

## ✅ validation.ts

### Validaciones Básicas

#### **`isValidEmail(email: string): boolean`**
```typescript
isValidEmail("usuario@ejemplo.com") // → true
isValidEmail("invalido") // → false
```

#### **`isValidUrl(url: string): boolean`**
```typescript
isValidUrl("https://moviliax.com") // → true
```

#### **`isValidSlug(slug: string): boolean`**
```typescript
isValidSlug("mi-articulo") // → true
```

### Validación de Formularios

#### **`validateNewsletterForm(data: NewsletterFormData)`**
```typescript
const result = validateNewsletterForm({ email: "test@email.com" });
// → { isValid: true, errors: {} }
```

#### **`validateContactForm(data: ContactFormData)`**
```typescript
const result = validateContactForm({
  name: "Juan",
  email: "juan@email.com",
  message: "Hola mundo"
});
```

---

## 📅 date.ts

### Formateo de Fechas

#### **`formatDate(date: string | Date, locale?: string): string`**
```typescript
formatDate(new Date()) 
// → "13 de octubre de 2024"
```

#### **`formatShortDate(date: string | Date): string`**
```typescript
formatShortDate(new Date()) 
// → "13/10/2024"
```

#### **`getRelativeTime(date: string | Date): string`**
```typescript
getRelativeTime(yesterday) 
// → "hace 1 día"
```

### Utilidades de Fecha

#### **`isToday(date: string | Date): boolean`**
```typescript
isToday(new Date()) // → true
```

#### **`sortByDate<T>(items: T[], order?: 'asc' | 'desc'): T[]`**
```typescript
const sorted = sortByDate(posts, 'desc');
```

---

## 🔍 seo.ts

### Generación de Metadatos

#### **`generateSEOMetadata(data: SEOMetadata)`**
Genera metadatos completos de SEO.

```typescript
const seo = generateSEOMetadata({
  title: "Mi Artículo",
  description: "Descripción del artículo",
  image: "/image.jpg",
  type: "article"
});
```

#### **`generateArticleSEO(article: {...})`**
```typescript
const seo = generateArticleSEO({
  title: "Título del artículo",
  excerpt: "Resumen",
  slug: "mi-articulo",
  author: "Juan",
  date: "2024-10-13",
  category: "Movilidad"
});
```

### JSON-LD (Structured Data)

#### **`generateArticleJsonLd(article: {...})`**
```typescript
const jsonLd = generateArticleJsonLd({
  title: "Título",
  excerpt: "Resumen",
  slug: "slug",
  author: { name: "Juan" },
  date: "2024-10-13",
  category: "Tech"
});
```

---

## 📄 mdx.ts

### Manejo de Posts

#### **`getAllPosts(directory?: string): Post[]`**
Obtiene todos los posts.

```typescript
const posts = getAllPosts();
```

#### **`getPostBySlug(slug: string): Post | null`**
```typescript
const post = getPostBySlug("mi-articulo");
```

#### **`getPostsByCategory(category: string): Post[]`**
```typescript
const posts = getPostsByCategory("movilidad-urbana");
```

#### **`searchPosts(query: string): Post[]`**
```typescript
const results = searchPosts("transporte");
```

### Funciones Útiles

#### **`getAllCategories(): { name: string; count: number }[]`**
```typescript
const categories = getAllCategories();
```

#### **`getRelatedPosts(post: Post, limit?: number): Post[]`**
```typescript
const related = getRelatedPosts(currentPost, 3);
```

---

## 📊 constants.ts

### Constantes Disponibles

```typescript
import { 
  SITE_CONFIG,
  SOCIAL_LINKS,
  NAV_ITEMS,
  CATEGORIES,
  PAGINATION,
  ROUTES,
  MESSAGES
} from '@/lib/constants';

// Usar constantes
console.log(SITE_CONFIG.name); // "MoviliaX"
console.log(ROUTES.post('slug')); // "/posts/slug"
```

---

## 🔤 types.ts

### Tipos Principales

```typescript
import type { 
  Post,
  Author,
  Category,
  Tag,
  ApiResponse,
  PaginatedResponse
} from '@/lib/types';

// Usar tipos
const post: Post = {
  slug: "mi-post",
  title: "Título",
  // ...
};
```

---

## 🌐 api.ts

### Cliente HTTP

#### **`get<T>(endpoint: string): Promise<ApiResponse<T>>`**
```typescript
const { data, error } = await get('/api/posts');
```

#### **`post<T>(endpoint: string, data?: any): Promise<ApiResponse<T>>`**
```typescript
const response = await post('/api/newsletter', { email });
```

### Funciones Específicas

#### **`subscribeToNewsletter(email: string)`**
```typescript
await subscribeToNewsletter("user@email.com");
```

#### **`searchPosts(query: string)`**
```typescript
const results = await searchPosts("movilidad");
```

---

## 🔧 utils.ts

### Utilidades Generales

#### **`cn(...classes): string`**
Combina clases CSS condicionalmente (perfecto para Tailwind).

```typescript
cn('base', isActive && 'active', 'another')
// → "base active another"
```

#### **`debounce(func, wait): Function`**
```typescript
const debouncedSearch = debounce(search, 300);
```

#### **`throttle(func, limit): Function`**
```typescript
const throttledScroll = throttle(handleScroll, 100);
```

#### **`groupBy<T>(array: T[], key: keyof T)`**
```typescript
const grouped = groupBy(posts, 'category');
```

#### **`copyToClipboard(text: string): Promise<boolean>`**
```typescript
await copyToClipboard("Texto a copiar");
```

---

## 💡 Ejemplos de Uso Completo

### Crear una página de artículo

```typescript
import { getPostBySlug } from '@/lib/mdx';
import { formatDate, getRelativeTime } from '@/lib/date';
import { generateArticleSEO } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  return generateArticleSEO(post);
}

export default function PostPage({ params }) {
  const post = getPostBySlug(params.slug);
  
  return (
    <article>
      <h1>{post.title}</h1>
      <time>{formatDate(post.date)}</time>
      <p>{getRelativeTime(post.date)}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
```

### Crear un formulario con validación

```typescript
'use client';

import { useState } from 'react';
import { validateContactForm } from '@/lib/validation';
import { sendContactForm } from '@/lib/api';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validation = validateContactForm(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }
    
    const result = await sendContactForm(formData);
    // Manejar resultado...
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campos del formulario */}
    </form>
  );
}
```

---

## 🔗 Dependencias

### Instaladas por defecto
- Next.js 14
- React
- TypeScript

### Necesarias para MDX
```bash
npm install gray-matter
```

---

## 📚 Recursos

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [MDX Documentation](https://mdxjs.com/)

---

**Última actualización**: Octubre 2024  
**Versión**: 1.0.0
