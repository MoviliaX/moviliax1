/**
 * @file src/utils/storage.ts
 * @description Utilidades para localStorage y sessionStorage
 */

/**
 * Guarda un valor en localStorage
 */
export function setLocalStorage<T>(key: string, value: T): boolean {
  try {
    const serialized = JSON.stringify(value);
    localStorage.setItem(key, serialized);
    return true;
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    return false;
  }
}

/**
 * Obtiene un valor de localStorage
 */
export function getLocalStorage<T>(key: string, defaultValue?: T): T | null {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue ?? null;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return defaultValue ?? null;
  }
}

/**
 * Remueve un valor de localStorage
 */
export function removeLocalStorage(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing from localStorage:', error);
  }
}

/**
 * Limpia todo localStorage
 */
export function clearLocalStorage(): void {
  try {
    localStorage.clear();
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
}

/**
 * Guarda un valor en sessionStorage
 */
export function setSessionStorage<T>(key: string, value: T): boolean {
  try {
    const serialized = JSON.stringify(value);
    sessionStorage.setItem(key, serialized);
    return true;
  } catch (error) {
    console.error('Error saving to sessionStorage:', error);
    return false;
  }
}

/**
 * Obtiene un valor de sessionStorage
 */
export function getSessionStorage<T>(key: string, defaultValue?: T): T | null {
  try {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue ?? null;
  } catch (error) {
    console.error('Error reading from sessionStorage:', error);
    return defaultValue ?? null;
  }
}

/**
 * Remueve un valor de sessionStorage
 */
export function removeSessionStorage(key: string): void {
  try {
    sessionStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing from sessionStorage:', error);
  }
}

/**
 * Limpia todo sessionStorage
 */
export function clearSessionStorage(): void {
  try {
    sessionStorage.clear();
  } catch (error) {
    console.error('Error clearing sessionStorage:', error);
  }
}
