// src/lib/validation.ts
/**
 * Utilidades de validación para MoviliaX
 */

/**
 * Valida si un email es válido
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Valida si una URL es válida
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Valida si un slug es válido (solo letras, números y guiones)
 */
export function isValidSlug(slug: string): boolean {
  const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  return slugRegex.test(slug);
}

/**
 * Valida si una fecha es válida
 */
export function isValidDate(date: string | Date): boolean {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj instanceof Date && !isNaN(dateObj.getTime());
}

/**
 * Valida longitud mínima de texto
 */
export function hasMinLength(text: string, minLength: number): boolean {
  return text.trim().length >= minLength;
}

/**
 * Valida longitud máxima de texto
 */
export function hasMaxLength(text: string, maxLength: number): boolean {
  return text.trim().length <= maxLength;
}

/**
 * Valida si el texto no está vacío
 */
export function isNotEmpty(text: string): boolean {
  return text.trim().length > 0;
}

/**
 * Valida un formulario de newsletter
 */
export interface NewsletterFormData {
  email: string;
}

export function validateNewsletterForm(data: NewsletterFormData): {
  isValid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!isNotEmpty(data.email)) {
    errors.email = 'El email es requerido';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'El email no es válido';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Valida un formulario de contacto
 */
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export function validateContactForm(data: ContactFormData): {
  isValid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!isNotEmpty(data.name)) {
    errors.name = 'El nombre es requerido';
  } else if (!hasMinLength(data.name, 2)) {
    errors.name = 'El nombre debe tener al menos 2 caracteres';
  }

  if (!isNotEmpty(data.email)) {
    errors.email = 'El email es requerido';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'El email no es válido';
  }

  if (!isNotEmpty(data.message)) {
    errors.message = 'El mensaje es requerido';
  } else if (!hasMinLength(data.message, 10)) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Sanitiza HTML para prevenir XSS
 */
export function sanitizeHtml(html: string): string {
  return html
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}
