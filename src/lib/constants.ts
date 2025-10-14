// src/lib/constants.ts
/**
 * Constantes globales de MoviliaX
 */

// Información del sitio
export const SITE_CONFIG = {
  name: 'MoviliaX',
  title: 'MoviliaX - Plataforma de Movilidad y Logística Digital',
  description:
    'Conocimiento experto sobre movilidad urbana, logística y tecnología de transporte en América Latina',
  url: 'https://moviliax.com',
  locale: 'es-MX',
  author: 'MoviliaX Team',
  email: 'info@moviliax.com',
  copyright: '© 2024 MoviliaX. Licencia MIT.',
} as const;

// Redes sociales
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/moviliax',
  linkedin: 'https://linkedin.com/company/moviliax',
  github: 'https://github.com/MoviliaX',
  youtube: 'https://youtube.com/@moviliax',
  instagram: 'https://instagram.com/moviliax',
} as const;

// Navegación principal
export const NAV_ITEMS = [
  { href: '/', label: 'Inicio' },
  { href: '/posts', label: 'Artículos' },
  { href: '/categorias', label: 'Categorías' },
  { href: '/autores', label: 'Autores' },
  { href: '/about', label: 'Acerca de' },
] as const;

// Categorías principales
export const CATEGORIES = [
  {
    slug: 'movilidad-urbana',
    name: 'Movilidad Urbana',
    description: 'Soluciones de transporte y movilidad en ciudades',
    color: 'blue',
  },
  {
    slug: 'logistica',
    name: 'Logística',
    description: 'Cadena de suministro y distribución',
    color: 'green',
  },
  {
    slug: 'tecnologia',
    name: 'Tecnología',
    description: 'Innovación y herramientas digitales',
    color: 'purple',
  },
  {
    slug: 'sostenibilidad',
    name: 'Sostenibilidad',
    description: 'Soluciones ecológicas y sustentables',
    color: 'emerald',
  },
  {
    slug: 'innovacion',
    name: 'Innovación',
    description: 'Nuevas tendencias y casos de éxito',
    color: 'orange',
  },
] as const;

// Configuración de paginación
export const PAGINATION = {
  postsPerPage: 12,
  recentPostsLimit: 5,
  relatedPostsLimit: 3,
  popularPostsLimit: 5,
} as const;

// Configuración de lectura
export const READING = {
  wordsPerMinute: 200,
  excerptLength: 160,
} as const;

// Configuración de imágenes
export const IMAGES = {
  defaultOgImage: '/og-image.jpg',
  defaultAvatar: '/default-avatar.png',
  defaultPostImage: '/default-post.jpg',
  logoLight: '/logo-light.svg',
  logoDark: '/logo-dark.svg',
} as const;

// Configuración de SEO
export const SEO = {
  titleTemplate: '%s | MoviliaX',
  defaultTitle: 'MoviliaX - Plataforma de Movilidad y Logística Digital',
  defaultDescription:
    'Conocimiento experto sobre movilidad urbana, logística y tecnología de transporte en América Latina',
  keywords: [
    'movilidad urbana',
    'logística',
    'transporte',
    'tecnología',
    'América Latina',
    'México',
    'supply chain',
    'last mile',
    'innovación',
  ],
  twitterHandle: '@moviliax',
} as const;

// Rutas del proyecto
export const ROUTES = {
  home: '/',
  posts: '/posts',
  post: (slug: string) => `/posts/${slug}`,
  categories: '/categorias',
  category: (slug: string) => `/categorias/${slug}`,
  tags: '/tags',
  tag: (slug: string) => `/tags/${slug}`,
  authors: '/autores',
  author: (slug: string) => `/autores/${slug}`,
  about: '/about',
  contact: '/contacto',
  search: '/buscar',
  newsletter: '/newsletter',
} as const;

// Configuración de API
export const API = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  endpoints: {
    posts: '/api/posts',
    newsletter: '/api/newsletter',
    contact: '/api/contact',
    search: '/api/search',
  },
} as const;

// Mensajes del sistema
export const MESSAGES = {
  loading: 'Cargando...',
  error: 'Ocurrió un error. Por favor intenta de nuevo.',
  notFound: 'No se encontró el contenido solicitado.',
  noResults: 'No se encontraron resultados.',
  emptyState: 'No hay contenido disponible.',
  success: '¡Operación exitosa!',
} as const;

// Configuración de formularios
export const FORMS = {
  newsletter: {
    successMessage: '¡Te has suscrito exitosamente! Revisa tu correo.',
    errorMessage: 'Hubo un error al suscribirte. Intenta de nuevo.',
  },
  contact: {
    successMessage: '¡Mensaje enviado! Te responderemos pronto.',
    errorMessage: 'Error al enviar mensaje. Intenta de nuevo.',
  },
} as const;

// Límites de validación
export const VALIDATION_LIMITS = {
  name: {
    min: 2,
    max: 100,
  },
  email: {
    max: 255,
  },
  message: {
    min: 10,
    max: 1000,
  },
  title: {
    min: 5,
    max: 200,
  },
  excerpt: {
    min: 20,
    max: 300,
  },
} as const;

// Configuración de fecha
export const DATE_CONFIG = {
  locale: 'es-MX',
  timezone: 'America/Mexico_City',
  formats: {
    long: 'DD de MMMM de YYYY',
    short: 'DD/MM/YYYY',
    time: 'HH:mm',
    datetime: 'DD de MMMM de YYYY, HH:mm',
  },
} as const;

// Feature flags
export const FEATURES = {
  newsletter: true,
  comments: false,
  search: true,
  darkMode: false,
  analytics: true,
} as const;

// Configuración de analytics
export const ANALYTICS = {
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
  vercelAnalytics: process.env.NEXT_PUBLIC_VERCEL_ANALYTICS === 'true',
} as const;
