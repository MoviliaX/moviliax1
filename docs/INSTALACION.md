# 🚀 Guía de Instalación - Componentes MoviliaX

## 📦 Archivos Creados

Se han generado **17 componentes** organizados en la siguiente estructura:

```
src/components/
├── index.ts                    # Exportaciones centralizadas
├── README.md                   # Documentación completa
│
├── layout/                     # 4 componentes de layout
│   ├── Header.tsx             ✅ Encabezado principal
│   ├── Footer.tsx             ✅ Pie de página
│   ├── Navbar.tsx             ✅ Navegación responsive
│   └── Sidebar.tsx            ✅ Barra lateral
│
├── common/                     # 4 componentes comunes
│   ├── Button.tsx             ✅ Botón reutilizable
│   ├── Card.tsx               ✅ Tarjeta contenedora
│   ├── Logo.tsx               ✅ Logo de MoviliaX
│   └── SearchBar.tsx          ✅ Barra de búsqueda
│
├── features/                   # 4 componentes de funcionalidad
│   ├── ArticleCard.tsx        ✅ Tarjeta de artículo
│   ├── AuthorCard.tsx         ✅ Tarjeta de autor
│   ├── CategoryFilter.tsx     ✅ Filtro de categorías
│   └── Newsletter.tsx         ✅ Suscripción newsletter
│
└── ui/                         # 3 componentes UI básicos
    ├── Badge.tsx              ✅ Etiqueta/Badge
    ├── Container.tsx          ✅ Contenedor responsive
    └── Input.tsx              ✅ Campo de entrada
```

---

## 📥 Cómo Instalar

### Opción 1: Copiar Carpeta Completa (Recomendado)

1. Descarga la carpeta `src/components/`
2. Copia toda la carpeta en tu proyecto MoviliaX:
   ```bash
   # Desde la ubicación de descarga
   cp -r src/components /ruta/a/moviliax1/src/
   ```

### Opción 2: Instalación Manual

Si solo necesitas componentes específicos:

```bash
cd /ruta/a/moviliax1

# Crear estructura
mkdir -p src/components/{layout,common,features,ui}

# Copiar archivos individuales según necesites
cp componentes-descargados/layout/Header.tsx src/components/layout/
```

---

## ⚙️ Configuración de TypeScript

Asegúrate de tener los alias configurados en `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components": ["./src/components"],
      "@/components/*": ["./src/components/*"]
    }
  }
}
```

---

## 🎨 Dependencias Necesarias

Estos componentes requieren:

### 1. **Next.js 14** (ya instalado)
```bash
npm install next@latest react@latest react-dom@latest
```

### 2. **TypeScript** (ya instalado)
```bash
npm install -D typescript @types/react @types/node
```

### 3. **Tailwind CSS** (verificar instalación)
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 4. **Configurar Tailwind** en `tailwind.config.js`:
```javascript
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 5. **Importar Tailwind** en `src/app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🧪 Verificar Instalación

Crea una página de prueba en `src/app/test/page.tsx`:

```tsx
import { 
  Header, 
  Footer, 
  Container, 
  Button, 
  Card 
} from '@/components';

export default function TestPage() {
  return (
    <>
      <Header />
      
      <Container className="py-12">
        <Card>
          <h1 className="text-3xl font-bold mb-4">
            ¡Componentes instalados correctamente! 🎉
          </h1>
          <p className="mb-4">
            Todos los componentes de MoviliaX están funcionando.
          </p>
          <Button variant="primary">
            Probar Botón
          </Button>
        </Card>
      </Container>
      
      <Footer />
    </>
  );
}
```

Visita: `http://localhost:3000/test`

---

## 📋 Checklist de Instalación

- [ ] Carpeta `src/components/` copiada al proyecto
- [ ] TypeScript configurado con paths aliases
- [ ] Tailwind CSS instalado y configurado
- [ ] Página de prueba creada y funcionando
- [ ] README.md revisado en `src/components/README.md`

---

## 🎯 Próximos Pasos

1. **Personalizar colores** en `tailwind.config.js`
2. **Agregar tu logo** en `/public/logo.svg`
3. **Revisar componentes** en `src/components/README.md`
4. **Crear tu primera página** usando los componentes
5. **Adaptar datos** (categorías, autores, etc.)

---

## 🐛 Solución de Problemas

### Error: "Module not found: Can't resolve '@/components'"
**Solución**: Verifica que `tsconfig.json` tenga los paths configurados correctamente.

### Error: Tailwind classes no funcionan
**Solución**: 
1. Verifica que `globals.css` importe Tailwind
2. Asegura que `tailwind.config.js` incluya la carpeta components en `content`
3. Reinicia el servidor: `npm run dev`

### Error: TypeScript types
**Solución**: Instala los tipos necesarios:
```bash
npm install -D @types/react @types/node
```

---

## 📞 Soporte

Si encuentras problemas:
1. Revisa la documentación en `src/components/README.md`
2. Verifica que todas las dependencias estén instaladas
3. Consulta los ejemplos de uso en cada componente

---

## 📝 Notas Importantes

- ✅ Todos los componentes son **TypeScript**
- ✅ Diseño **responsive** (móvil y desktop)
- ✅ Componentes **reutilizables** y personalizables
- ✅ Siguen **mejores prácticas** de Next.js 14
- ✅ Preparados para **Server Components** y **Client Components**

---

**¡Listo para comenzar a construir MoviliaX! 🚀**
