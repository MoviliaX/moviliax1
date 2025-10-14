/**
 * @file src/utils/validation.ts
 * @description Utilidades de validación
 */

export function isEmail(email: string): boolean {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

export function isUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function isPhone(phone: string): boolean {
  // Valida números mexicanos (10 dígitos)
  const pattern = /^(\+?52)?[\s-]?(\d{3})[\s-]?(\d{3})[\s-]?(\d{4})$/;
  return pattern.test(phone.replace(/\s/g, ''));
}

export function isCreditCard(number: string): boolean {
  // Algoritmo de Luhn
  const digits = number.replace(/\D/g, '');
  if (digits.length < 13 || digits.length > 19) return false;
  
  let sum = 0;
  let isEven = false;
  
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits[i]);
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  return sum % 10 === 0;
}

export function isPostalCode(code: string, country: string = 'MX'): boolean {
  const patterns: Record<string, RegExp> = {
    MX: /^\d{5}$/,
    US: /^\d{5}(-\d{4})?$/,
    CA: /^[A-Z]\d[A-Z]\s?\d[A-Z]\d$/i,
  };
  
  return patterns[country]?.test(code) || false;
}
