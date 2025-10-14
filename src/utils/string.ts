/**
 * @file src/utils/string.ts
 * @description Utilidades para manipulación de strings
 */

/**
 * Trunca un texto a una longitud específica
 */
export function truncateText(text: string, maxLength: number, suffix = '...'): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - suffix.length).trim() + suffix;
}

/**
 * Capitaliza la primera letra de un string
 */
export function capitalizeFirst(text: string): string {
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

/**
 * Convierte un texto a Title Case
 */
export function toTitleCase(text: string): string {
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Remueve acentos de un string
 */
export function removeAccents(text: string): string {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

/**
 * Genera un excerpt limpio desde HTML
 */
export function generateExcerpt(html: string, maxLength: number = 160): string {
  // Remover tags HTML
  const text = html.replace(/<[^>]*>/g, '');
  // Remover múltiples espacios
  const cleaned = text.replace(/\s+/g, ' ').trim();
  // Truncar
  return truncateText(cleaned, maxLength);
}

/**
 * Cuenta palabras en un texto
 */
export function countWords(text: string): number {
  const cleaned = text.trim().replace(/\s+/g, ' ');
  return cleaned ? cleaned.split(' ').length : 0;
}

/**
 * Estima tiempo de lectura en minutos
 */
export function estimateReadTime(
  text: string, 
  wordsPerMinute: number = 200
): number {
  const words = countWords(text);
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Sanitiza un nombre de archivo
 */
export function sanitizeFilename(filename: string): string {
  return filename
    .toLowerCase()
    .replace(/[^a-z0-9.-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Genera un string aleatorio
 */
export function generateRandomString(length: number = 10): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Convierte camelCase a kebab-case
 */
export function camelToKebab(text: string): string {
  return text.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Convierte kebab-case a camelCase
 */
export function kebabToCamel(text: string): string {
  return text.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

/**
 * Convierte snake_case a camelCase
 */
export function snakeToCamel(text: string): string {
  return text.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

/**
 * Pluraliza una palabra (español básico)
 */
export function pluralize(word: string, count: number): string {
  if (count === 1) return word;
  
  // Reglas básicas de español
  if (word.endsWith('z')) return word.slice(0, -1) + 'ces';
  if (word.endsWith('c')) return word.slice(0, -1) + 'ques';
  if (word.match(/[aeiou]$/)) return word + 's';
  return word + 'es';
}

/**
 * Genera un hash simple de un string
 */
export function simpleHash(text: string): number {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

/**
 * Escapa caracteres especiales HTML
 */
export function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, char => map[char]);
}

/**
 * Desescapa caracteres HTML
 */
export function unescapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#039;': "'"
  };
  return text.replace(/&amp;|&lt;|&gt;|&quot;|&#039;/g, entity => map[entity]);
}

/**
 * Limpia espacios en blanco extras
 */
export function cleanWhitespace(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

/**
 * Obtiene iniciales de un nombre
 */
export function getInitials(name: string, maxLength: number = 2): string {
  const words = name.trim().split(/\s+/);
  const initials = words.map(word => word.charAt(0).toUpperCase());
  return initials.slice(0, maxLength).join('');
}

/**
 * Verifica si un string es un JSON válido
 */
export function isValidJson(text: string): boolean {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
}

/**
 * Extrae números de un string
 */
export function extractNumbers(text: string): number[] {
  const matches = text.match(/-?\d+\.?\d*/g);
  return matches ? matches.map(Number) : [];
}

/**
 * Remueve duplicados de palabras en un string
 */
export function removeDuplicateWords(text: string): string {
  const words = text.split(/\s+/);
  const unique = [...new Set(words)];
  return unique.join(' ');
}

/**
 * Formatea un número de teléfono mexicano
 */
export function formatPhoneMX(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  
  if (cleaned.length === 12 && cleaned.startsWith('52')) {
    return `+52 ${cleaned.slice(2, 5)}-${cleaned.slice(5, 8)}-${cleaned.slice(8)}`;
  }
  
  return phone;
}

/**
 * Censurar información sensible
 */
export function maskSensitiveData(
  text: string,
  visibleStart: number = 4,
  visibleEnd: number = 4,
  maskChar: string = '*'
): string {
  if (text.length <= visibleStart + visibleEnd) return text;
  
  const start = text.slice(0, visibleStart);
  const end = text.slice(-visibleEnd);
  const masked = maskChar.repeat(text.length - visibleStart - visibleEnd);
  
  return start + masked + end;
}
