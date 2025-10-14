// src/lib/format.ts
/**
 * Utilidades de formato para MoviliaX
 * Funciones para formatear texto, números, URLs, etc.
 */

/**
 * Convierte un texto a formato slug (URL-friendly)
 * @example slugify("Movilidad Urbana en México") → "movilidad-urbana-en-mexico"
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD') // Normalizar caracteres especiales
    .replace(/[\u0300-\u036f]/g, '') // Eliminar acentos
    .replace(/[^\w\s-]/g, '') // Eliminar caracteres especiales
    .trim()
    .replace(/\s+/g, '-') // Reemplazar espacios con guiones
    .replace(/-+/g, '-'); // Eliminar guiones duplicados
}

/**
 * Trunca un texto a una longitud específica
 * @param text - Texto a truncar
 * @param length - Longitud máxima
 * @param suffix - Sufijo a agregar (default: "...")
 */
export function truncate(text: string, length: number, suffix = '...'): string {
  if (text.length <= length) return text;
  return text.substring(0, length).trim() + suffix;
}

/**
 * Capitaliza la primera letra de un texto
 * @example capitalize("hola mundo") → "Hola mundo"
 */
export function capitalize(text: string): string {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

/**
 * Convierte un texto a Title Case
 * @example toTitleCase("hola mundo") → "Hola Mundo"
 */
export function toTitleCase(text: string): string {
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Formatea un número con separadores de miles
 * @example formatNumber(1234567) → "1,234,567"
 */
export function formatNumber(num: number, locale = 'es-MX'): string {
  return new Intl.NumberFormat(locale).format(num);
}

/**
 * Formatea un número como moneda
 * @example formatCurrency(1234.56) → "$1,234.56"
 */
export function formatCurrency(
  amount: number, 
  currency = 'MXN', 
  locale = 'es-MX'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);
}

/**
 * Calcula el tiempo de lectura estimado
 * @param content - Contenido del artículo
 * @param wordsPerMinute - Palabras por minuto (default: 200)
 * @returns Tiempo de lectura en minutos
 */
export function calculateReadTime(
  content: string, 
  wordsPerMinute = 200
): number {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}

/**
 * Extrae un excerpt/resumen de un contenido
 * @param content - Contenido completo
 * @param maxLength - Longitud máxima del excerpt
 */
export function extractExcerpt(content: string, maxLength = 160): string {
  // Eliminar markdown y HTML
  const cleanContent = content
    .replace(/!\[.*?\]\(.*?\)/g, '') // Imágenes markdown
    .replace(/\[.*?\]\(.*?\)/g, '') // Links markdown
    .replace(/<[^>]*>/g, '') // HTML tags
    .replace(/[#*_~`]/g, '') // Markdown símbolos
    .trim();

  return truncate(cleanContent, maxLength);
}

/**
 * Formatea bytes a tamaño legible
 * @example formatBytes(1024) → "1 KB"
 */
export function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Genera un ID único
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

/**
 * Normaliza URL removiendo trailing slashes
 */
export function normalizeUrl(url: string): string {
  return url.replace(/\/$/, '');
}
