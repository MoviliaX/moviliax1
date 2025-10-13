# Guía de Contribución a MoviliaX

¡Gracias por tu interés en contribuir a MoviliaX! 🚀

Esta guía te ayudará a entender cómo puedes participar en el desarrollo de la revista digital líder en movilidad, logística e innovación tecnológica en México.

---

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [Cómo Contribuir](#cómo-contribuir)
- [Tipos de Contribuciones](#tipos-de-contribuciones)
- [Proceso de Pull Request](#proceso-de-pull-request)
- [Guía de Estilo](#guía-de-estilo)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Reportar Bugs](#reportar-bugs)
- [Sugerir Mejoras](#sugerir-mejoras)

---

## 📜 Código de Conducta

Este proyecto se adhiere a un [Código de Conducta](CODE_OF_CONDUCT.md). Al participar, se espera que mantengas este código. Por favor, reporta comportamientos inaceptables a contacto@moviliax.com.

---

## 🤝 Cómo Contribuir

### Contribuciones que Aceptamos

- **Código**: Mejoras al sitio web, nuevas funcionalidades
- **Contenido**: Artículos, análisis, infografías
- **Diseño**: Mejoras de UI/UX, branding
- **Documentación**: Guías, tutoriales, correcciones
- **Traducción**: Contenido en otros idiomas
- **Testing**: Pruebas y reportes de bugs

---

## 🎯 Tipos de Contribuciones

### 1. Contribuciones de Código

#### Requisitos Previos

- Node.js 18+ (si aplica)
- Git instalado
- Cuenta de GitHub
- Editor de código (VS Code recomendado)

#### Setup Local

```bash
# 1. Fork el repositorio en GitHub

# 2. Clona tu fork
git clone https://github.com/TU_USUARIO/RevistaMoviliaX.git
cd RevistaMoviliaX

# 3. Agrega el repositorio original como upstream
git remote add upstream https://github.com/moviliaxlat/RevistaMoviliaX.git

# 4. Crea una rama para tu contribución
git checkout -b feature/mi-nueva-funcionalidad
```

#### Áreas de Contribución Técnica

- **Frontend**: Mejoras al sitio web (HTML, CSS, JavaScript)
- **Contenido Interactivo**: Infografías, visualizaciones de datos
- **Performance**: Optimización de velocidad y SEO
- **Accesibilidad**: Mejoras en WCAG compliance
- **Responsive Design**: Mejoras para dispositivos móviles

### 2. Contribuciones de Contenido

#### Tipos de Contenido

- **Artículos**: 800-2000 palabras sobre movilidad, logística, tecnología
- **Análisis**: Deep dives de tendencias e innovaciones
- **Infografías**: Visualizaciones de datos relevantes
- **Entrevistas**: Con líderes de la industria
- **Casos de Estudio**: Implementaciones exitosas

#### Proceso de Envío de Contenido

1. **Propuesta**: Envía un outline de tu artículo a editorial@moviliax.com
2. **Aprobación**: Espera confirmación del equipo editorial
3. **Escritura**: Redacta siguiendo nuestra [Guía de Estilo Editorial](#guía-de-estilo-editorial)
4. **Revisión**: El equipo revisará y sugerirá cambios
5. **Publicación**: Una vez aprobado, se publicará con tu autoría

#### Guía de Estilo Editorial

- **Tono**: Profesional pero accesible
- **Formato**: Markdown con headings claros
- **Fuentes**: Siempre cita fuentes confiables
- **Imágenes**: Incluye créditos y alt text
- **SEO**: Incluye keywords relevantes naturalmente

### 3. Contribuciones de Diseño

- **UI/UX**: Mejoras de experiencia de usuario
- **Branding**: Propuestas de identidad visual
- **Iconografía**: Diseño de iconos y gráficos
- **Templates**: Plantillas de contenido

---

## 🔄 Proceso de Pull Request

### Antes de Enviar

1. ✅ Asegúrate de que tu código funciona
2. ✅ Sigue las convenciones de código del proyecto
3. ✅ Actualiza la documentación si es necesario
4. ✅ Añade tests si aplica
5. ✅ Prueba en diferentes navegadores (Chrome, Firefox, Safari)
6. ✅ Verifica que sea responsive

### Crear el Pull Request

1. **Commits claros**: Usa commits descriptivos

```bash
git commit -m "feat: Add interactive EV infographic"
git commit -m "fix: Correct newsletter responsive layout"
git commit -m "docs: Update contributing guidelines"
```

**Convenciones de Commit:**
- `feat:` Nueva funcionalidad
- `fix:` Corrección de bug
- `docs:` Cambios en documentación
- `style:` Cambios de formato (no afectan el código)
- `refactor:` Refactorización de código
- `test:` Añadir o modificar tests
- `chore:` Tareas de mantenimiento

2. **Push a tu fork**

```bash
git push origin feature/mi-nueva-funcionalidad
```

3. **Crea el Pull Request** en GitHub
   - Título descriptivo
   - Descripción detallada de los cambios
   - Referencias a issues relacionados
   - Screenshots si aplica

### Template de Pull Request

```markdown
## Descripción
Breve descripción de los cambios realizados.

## Tipo de Cambio
- [ ] Bug fix
- [ ] Nueva funcionalidad
- [ ] Breaking change
- [ ] Documentación

## ¿Cómo se ha probado?
Describe las pruebas realizadas.

## Checklist
- [ ] Mi código sigue el estilo del proyecto
- [ ] He realizado un self-review de mi código
- [ ] He comentado mi código donde es necesario
- [ ] He actualizado la documentación
- [ ] Mis cambios no generan nuevos warnings
- [ ] He probado en diferentes navegadores
```

### Revisión de Código

- El equipo revisará tu PR dentro de 3-5 días hábiles
- Responde a los comentarios y sugerencias
- Haz los cambios solicitados
- Una vez aprobado, tu PR será merged

---

## 🎨 Guía de Estilo

### HTML/CSS

```html
<!-- ✅ Correcto -->
<div class="article-card">
    <h3 class="article-title">Título del Artículo</h3>
</div>

<!-- ❌ Incorrecto -->
<div class="articleCard">
    <h3 class="ArticleTitle">Título del Artículo</h3>
</div>
```

### JavaScript

```javascript
// ✅ Correcto - camelCase para variables
const activeTab = 'ventas';
const handleClick = () => {};

// ❌ Incorrecto
const active_tab = 'ventas';
const handle_click = () => {};
```

### Colores de Marca

```css
--azul-profundo: #0A0F2C;
--cian-electrico: #00E0FF;
--gris-metalico: #7A7F8C;
--blanco: #FFFFFF;
--negro-carbon: #0D0D0D;
```

---

## 📁 Estructura del Proyecto

```
RevistaMoviliaX/
├── docs/              # Sitio web público
│   ├── index.html
│   ├── about.html
│   ├── media-kit.html
│   └── newsletters/
├── content/           # Contenido editorial
│   └── articles/
├── assets/            # Recursos multimedia
│   ├── images/
│   └── branding/
├── scripts/           # Scripts de automatización
└── README.md
```

---

## 🐛 Reportar Bugs

### Antes de Reportar

1. Busca en [Issues existentes](https://github.com/moviliaxlat/RevistaMoviliaX/issues)
2. Verifica que sea reproducible
3. Prueba en diferentes navegadores

### Template de Bug Report

```markdown
**Descripción del Bug**
Descripción clara y concisa del problema.

**Para Reproducir**
Pasos para reproducir el comportamiento:
1. Ve a '...'
2. Click en '...'
3. Scroll down a '...'
4. Ver error

**Comportamiento Esperado**
Lo que esperabas que sucediera.

**Screenshots**
Si aplica, añade screenshots.

**Entorno:**
 - OS: [e.g. Windows, macOS, Linux]
 - Navegador: [e.g. Chrome 120, Safari 17]
 - Dispositivo: [e.g. Desktop, iPhone 15, Samsung S23]

**Contexto Adicional**
Cualquier otra información relevante.
```

---

## 💡 Sugerir Mejoras

### Template de Feature Request

```markdown
**¿Tu sugerencia está relacionada con un problema?**
Descripción clara del problema.

**Describe la solución que te gustaría**
Descripción clara de lo que quieres que suceda.

**Describe alternativas consideradas**
Otras soluciones o funcionalidades consideradas.

**Contexto Adicional**
Screenshots, mockups, o cualquier información adicional.
```

---

## 🏆 Reconocimiento de Contribuidores

Todos los contribuidores serán:
- Añadidos al archivo `CONTRIBUTORS.md`
- Mencionados en el changelog
- Reconocidos en redes sociales (con permiso)
- Invitados a eventos especiales de MoviliaX

---

## 📞 ¿Preguntas?

- **Email**: contacto@moviliax.com
- **Twitter**: [@moviliax](https://twitter.com/moviliax)
- **LinkedIn**: [MoviliaX](https://linkedin.com/company/moviliax)

---

## 📝 Licencia

Al contribuir a MoviliaX, aceptas que tus contribuciones sean licenciadas bajo la [Licencia MIT](LICENSE).

---

**¡Gracias por hacer de MoviliaX una mejor plataforma para la comunidad de movilidad y logística!** 🚀🇲🇽
