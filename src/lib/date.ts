// src/lib/date.ts
/**
 * Utilidades de fecha para MoviliaX
 */

/**
 * Formatea una fecha a formato legible en español
 * @example formatDate(new Date()) → "13 de octubre de 2024"
 */
export function formatDate(
  date: string | Date,
  locale = 'es-MX',
  options?: Intl.DateTimeFormatOptions
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  };

  return new Intl.DateTimeFormat(locale, defaultOptions).format(dateObj);
}

/**
 * Formatea una fecha a formato corto
 * @example formatShortDate(new Date()) → "13/10/2024"
 */
export function formatShortDate(date: string | Date, locale = 'es-MX'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(dateObj);
}

/**
 * Formatea una fecha con hora
 * @example formatDateTime(new Date()) → "13 de octubre de 2024, 14:30"
 */
export function formatDateTime(
  date: string | Date,
  locale = 'es-MX'
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(dateObj);
}

/**
 * Obtiene una fecha relativa (hace X tiempo)
 * @example getRelativeTime(date) → "hace 2 días"
 */
export function getRelativeTime(date: string | Date, locale = 'es-MX'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);

  // Menos de 1 minuto
  if (diffInSeconds < 60) {
    return 'hace un momento';
  }

  // Menos de 1 hora
  if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `hace ${minutes} ${minutes === 1 ? 'minuto' : 'minutos'}`;
  }

  // Menos de 1 día
  if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `hace ${hours} ${hours === 1 ? 'hora' : 'horas'}`;
  }

  // Menos de 1 mes
  if (diffInSeconds < 2592000) {
    const days = Math.floor(diffInSeconds / 86400);
    return `hace ${days} ${days === 1 ? 'día' : 'días'}`;
  }

  // Menos de 1 año
  if (diffInSeconds < 31536000) {
    const months = Math.floor(diffInSeconds / 2592000);
    return `hace ${months} ${months === 1 ? 'mes' : 'meses'}`;
  }

  // Más de 1 año
  const years = Math.floor(diffInSeconds / 31536000);
  return `hace ${years} ${years === 1 ? 'año' : 'años'}`;
}

/**
 * Verifica si una fecha es de hoy
 */
export function isToday(date: string | Date): boolean {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const today = new Date();
  
  return (
    dateObj.getDate() === today.getDate() &&
    dateObj.getMonth() === today.getMonth() &&
    dateObj.getFullYear() === today.getFullYear()
  );
}

/**
 * Verifica si una fecha es de esta semana
 */
export function isThisWeek(date: string | Date): boolean {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const today = new Date();
  const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
  const lastDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 6));
  
  return dateObj >= firstDayOfWeek && dateObj <= lastDayOfWeek;
}

/**
 * Verifica si una fecha es de este mes
 */
export function isThisMonth(date: string | Date): boolean {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const today = new Date();
  
  return (
    dateObj.getMonth() === today.getMonth() &&
    dateObj.getFullYear() === today.getFullYear()
  );
}

/**
 * Obtiene el nombre del mes
 */
export function getMonthName(month: number, locale = 'es-MX'): string {
  const date = new Date(2000, month, 1);
  return new Intl.DateTimeFormat(locale, { month: 'long' }).format(date);
}

/**
 * Obtiene el año actual
 */
export function getCurrentYear(): number {
  return new Date().getFullYear();
}

/**
 * Convierte fecha a formato ISO
 */
export function toISODate(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toISOString();
}

/**
 * Ordena un array de objetos por fecha
 */
export function sortByDate<T extends { date: string | Date }>(
  items: T[],
  order: 'asc' | 'desc' = 'desc'
): T[] {
  return [...items].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return order === 'desc' ? dateB - dateA : dateA - dateB;
  });
}
