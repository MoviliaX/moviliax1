# 🚀 Guía de Instalación - src/lib

## 📦 Archivos Creados

Se han generado **11 archivos** de utilidades para MoviliaX:

```
src/lib/
├── index.ts         ✅ Exportaciones centralizadas
├── README.md        ✅ Documentación completa
│
├── format.ts        ✅ Formateo de texto y números (15 funciones)
├── validation.ts    ✅ Validaciones (10 funciones)
├── date.ts          ✅ Manejo de fechas (12 funciones)
├── seo.ts           ✅ SEO y metadatos (8 funciones)
├── mdx.ts           ✅ Contenido MDX (13 funciones)
├── constants.ts     ✅ Constantes del proyecto
├── types.ts         ✅ Tipos TypeScript compartidos
├── api.ts           ✅ Cliente HTTP (12 funciones)
└── utils.ts         ✅ Utilidades generales (25+ funciones)
```

**Total: 95+ funciones listas para usar** 🎉

---

## 📥 Instalación

### 1. Copiar Archivos

Copia la carpeta completa a tu proyecto:

```bash
cp -r src/lib /ruta/a/moviliax1/src/
```

### 2. Instalar Dependencias

La mayoría de funciones usan solo dependencias de Next.js, pero para MDX necesitas:

```bash
npm install gray-matter
```

### 3. Configurar TypeScript

Asegúrate de tener los path aliases en `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/lib": ["./src/lib"],
      "@/lib/*": ["./src/lib/*"]
    }
  }
}
```

### 4. Variables de Entorno

Crea un archivo `.env.local` con:

```env
# API
NEXT_PUBLIC_API_URL=http://localhost:3000

# Analytics (opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_VERCEL_ANALYTICS=false
```

---

## 🧪 Verificar Instalación

### Prueba 1: Importar utilidades

Crea `src/app/test-lib/page.tsx`:

```typescript
import { 
  slugify, 
  formatDate, 
  isValidEmail,
  SITE_CONFIG 
} from '@/lib';

export default function TestPage() {
  const slug = slugify("Hola Mundo");
  const date = formatDate(new Date());
  const valid = isValidEmail("test@email.com");

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test de Utilidades</h1>
      
      <div className="space-y-2">
        <p>Slug: {slug}</p>
        <p>Fecha: {date}</p>
        <p>Email válido: {valid ? 'Sí' : 'No'}</p>
        <p>Site: {SITE_CONFIG.name}</p>
      </div>
    </div>
  );
}
```

Visita: `http://localhost:3000/test-lib`

### Prueba 2: Usar funciones de formato

```typescript
import { 
  formatNumber, 
  formatCurrency, 
  truncate,
  calculateReadTime 
} from '@/lib/format';

const num = formatNumber(1234567); // "1,234,567"
const price = formatCurrency(1234.56, 'MXN'); // "$1,234.56"
const short = truncate("Texto largo...", 10); // "Texto la..."
const time = calculateReadTime(content); // 5
```

### Prueba 3: Validaciones

```typescript
import { validateContactForm } from '@/lib/validation';

const result = validateContactForm({
  name: "Juan",
  email: "juan@email.com",
  message: "Hola mundo"
});

console.log(result.isValid); // true
console.log(result.errors); // {}
```

---

## 📚 Uso Común

### En Componentes React

```typescript
'use client';

import { useState } from 'react';
import { debounce, copyToClipboard } from '@/lib/utils';

export default function MyComponent() {
  const [query, setQuery] = useState('');

  // Búsqueda con debounce
  const debouncedSearch = debounce((value: string) => {
    console.log('Buscando:', value);
  }, 300);

  const handleCopy = async () => {
    const success = await copyToClipboard('Texto copiado');
    if (success) alert('Copiado!');
  };

  return (
    <div>
      <input 
        onChange={(e) => debouncedSearch(e.target.value)}
        placeholder="Buscar..."
      />
      <button onClick={handleCopy}>Copiar</button>
    </div>
  );
}
```

### En Server Components

```typescript
import { getAllPosts, getPostsByCategory } from '@/lib/mdx';
import { formatDate } from '@/lib/date';
import { CATEGORIES } from '@/lib/constants';

export default function PostsPage() {
  const posts = getAllPosts();
  const movilidad = getPostsByCategory('movilidad-urbana');

  return (
    <div>
      <h1>Todos los Posts ({posts.length})</h1>
      
      {posts.map(post => (
        <article key={post.slug}>
          <h2>{post.title}</h2>
          <time>{formatDate(post.date)}</time>
        </article>
      ))}
    </div>
  );
}
```

### En API Routes

```typescript
// app/api/posts/route.ts
import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/mdx';
import type { ApiResponse } from '@/lib/types';

export async function GET() {
  try {
    const posts = getAllPosts();
    
    const response: ApiResponse = {
      success: true,
      data: posts
    };
    
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Error al obtener posts' },
      { status: 500 }
    );
  }
}
```

### Generar Metadatos SEO

```typescript
// app/posts/[slug]/page.tsx
import { getPostBySlug } from '@/lib/mdx';
import { generateArticleSEO } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  return generateArticleSEO(post);
}

export default function PostPage({ params }) {
  const post = getPostBySlug(params.slug);
  
  return <article>{/* Contenido */}</article>;
}
```

---

## 📋 Checklist de Instalación

- [ ] Carpeta `src/lib/` copiada al proyecto
- [ ] `gray-matter` instalado (`npm install gray-matter`)
- [ ] Path aliases configurados en `tsconfig.json`
- [ ] Variables de entorno en `.env.local`
- [ ] Página de prueba creada y funcionando
- [ ] README.md revisado

---

## 🔥 Funciones Más Útiles

### Top 10 para empezar:

1. **`slugify(text)`** - Crear URLs amigables
2. **`formatDate(date)`** - Mostrar fechas bonitas
3. **`isValidEmail(email)`** - Validar emails
4. **`getAllPosts()`** - Obtener todos los artículos
5. **`generateArticleSEO(post)`** - SEO automático
6. **`cn(...classes)`** - Combinar clases CSS
7. **`debounce(func, wait)`** - Optimizar búsquedas
8. **`copyToClipboard(text)`** - Copiar al portapapeles
9. **`SITE_CONFIG`** - Configuración del sitio
10. **`ROUTES.post(slug)`** - Generar URLs

---

## 🐛 Solución de Problemas

### Error: "Cannot find module '@/lib'"
**Solución**: Verifica `tsconfig.json` y reinicia el servidor:
```bash
npm run dev
```

### Error: "gray-matter not found"
**Solución**: Instala la dependencia:
```bash
npm install gray-matter
```

### Error en funciones de MDX
**Solución**: Asegúrate de tener la carpeta `content/posts/` creada:
```bash
mkdir -p content/posts
```

### TypeScript errors
**Solución**: Reinicia el TypeScript server en VSCode:
- Cmd/Ctrl + Shift + P
- "TypeScript: Restart TS Server"

---

## 📖 Documentación

Revisa `src/lib/README.md` para documentación completa de todas las funciones.

---

## 🎯 Próximos Pasos

1. Revisar todas las funciones en `README.md`
2. Crear tu primer artículo en `content/posts/`
3. Usar las utilidades en tus componentes
4. Personalizar constantes en `constants.ts`
5. Agregar más tipos según necesites en `types.ts`

---

**¡Todo listo para usar las utilidades de MoviliaX! 🚀**
