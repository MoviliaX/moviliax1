/**
 * @file src/utils/object.ts
 * @description Utilidades para manipulación de objetos
 */

/**
 * Clona profundamente un objeto
 */
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime()) as any;
  if (obj instanceof Array) return obj.map(item => deepClone(item)) as any;
  if (obj instanceof Object) {
    const cloned = {} as T;
    Object.keys(obj).forEach(key => {
      (cloned as any)[key] = deepClone((obj as any)[key]);
    });
    return cloned;
  }
  return obj;
}

/**
 * Merge profundo de objetos
 */
export function deepMerge<T extends object>(target: T, ...sources: Partial<T>[]): T {
  if (!sources.length) return target;
  
  const source = sources.shift();
  if (!source) return target;
  
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      const sourceValue = (source as any)[key];
      const targetValue = (target as any)[key];
      
      if (isObject(sourceValue)) {
        if (!targetValue) {
          (target as any)[key] = {};
        }
        (target as any)[key] = deepMerge(targetValue, sourceValue);
      } else {
        (target as any)[key] = sourceValue;
      }
    });
  }
  
  return deepMerge(target, ...sources);
}

/**
 * Verifica si un valor es un objeto plano
 */
function isObject(item: any): boolean {
  return item && typeof item === 'object' && !Array.isArray(item);
}

/**
 * Selecciona propiedades específicas de un objeto
 */
export function pick<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const result = {} as Pick<T, K>;
  keys.forEach(key => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
}

/**
 * Omite propiedades específicas de un objeto
 */
export function omit<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const result = { ...obj };
  keys.forEach(key => {
    delete result[key];
  });
  return result as Omit<T, K>;
}

/**
 * Verifica si un objeto está vacío
 */
export function isEmpty(obj: any): boolean {
  if (obj == null) return true;
  if (Array.isArray(obj) || typeof obj === 'string') return obj.length === 0;
  if (obj instanceof Map || obj instanceof Set) return obj.size === 0;
  return Object.keys(obj).length === 0;
}

/**
 * Compara profundamente dos objetos
 */
export function isEqual(a: any, b: any): boolean {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (typeof a !== typeof b) return false;
  
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    return a.every((item, index) => isEqual(item, b[index]));
  }
  
  if (typeof a === 'object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    
    if (keysA.length !== keysB.length) return false;
    
    return keysA.every(key => isEqual(a[key], b[key]));
  }
  
  return false;
}

/**
 * Aplana un objeto anidado
 */
export function flattenObject(
  obj: Record<string, any>,
  prefix: string = '',
  separator: string = '.'
): Record<string, any> {
  const flattened: Record<string, any> = {};
  
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    const newKey = prefix ? `${prefix}${separator}${key}` : key;
    
    if (isObject(value) && !Array.isArray(value)) {
      Object.assign(flattened, flattenObject(value, newKey, separator));
    } else {
      flattened[newKey] = value;
    }
  });
  
  return flattened;
}

/**
 * Des-aplana un objeto previamente aplanado
 */
export function unflattenObject(
  obj: Record<string, any>,
  separator: string = '.'
): Record<string, any> {
  const result: Record<string, any> = {};
  
  Object.keys(obj).forEach(key => {
    const keys = key.split(separator);
    let current = result;
    
    keys.forEach((k, index) => {
      if (index === keys.length - 1) {
        current[k] = obj[key];
      } else {
        current[k] = current[k] || {};
        current = current[k];
      }
    });
  });
  
  return result;
}

/**
 * Obtiene un valor anidado de forma segura
 */
export function get(
  obj: any,
  path: string,
  defaultValue?: any
): any {
  const keys = path.split('.');
  let result = obj;
  
  for (const key of keys) {
    if (result == null) return defaultValue;
    result = result[key];
  }
  
  return result !== undefined ? result : defaultValue;
}

/**
 * Establece un valor anidado
 */
export function set(
  obj: any,
  path: string,
  value: any
): void {
  const keys = path.split('.');
  let current = obj;
  
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!(key in current)) {
      current[key] = {};
    }
    current = current[key];
  }
  
  current[keys[keys.length - 1]] = value;
}

/**
 * Verifica si un objeto tiene una propiedad anidada
 */
export function has(obj: any, path: string): boolean {
  const keys = path.split('.');
  let current = obj;
  
  for (const key of keys) {
    if (current == null || !(key in current)) {
      return false;
    }
    current = current[key];
  }
  
  return true;
}

/**
 * Remueve propiedades undefined de un objeto
 */
export function compact(obj: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {};
  
  Object.keys(obj).forEach(key => {
    if (obj[key] !== undefined) {
      result[key] = obj[key];
    }
  });
  
  return result;
}

/**
 * Invierte claves y valores de un objeto
 */
export function invert(obj: Record<string, string | number>): Record<string, string> {
  const result: Record<string, string> = {};
  Object.keys(obj).forEach(key => {
    result[String(obj[key])] = key;
  });
  return result;
}

/**
 * Mapea valores de un objeto
 */
export function mapValues<T, R>(
  obj: Record<string, T>,
  fn: (value: T, key: string) => R
): Record<string, R> {
  const result: Record<string, R> = {};
  Object.keys(obj).forEach(key => {
    result[key] = fn(obj[key], key);
  });
  return result;
}

/**
 * Mapea claves de un objeto
 */
export function mapKeys<T>(
  obj: Record<string, T>,
  fn: (key: string, value: T) => string
): Record<string, T> {
  const result: Record<string, T> = {};
  Object.keys(obj).forEach(key => {
    const newKey = fn(key, obj[key]);
    result[newKey] = obj[key];
  });
  return result;
}

/**
 * Encuentra una clave por valor
 */
export function findKey<T>(
  obj: Record<string, T>,
  predicate: (value: T, key: string) => boolean
): string | undefined {
  return Object.keys(obj).find(key => predicate(obj[key], key));
}

/**
 * Transforma un objeto con una función
 */
export function transform<T, R>(
  obj: Record<string, T>,
  fn: (acc: R, value: T, key: string) => void,
  accumulator: R
): R {
  Object.keys(obj).forEach(key => {
    fn(accumulator, obj[key], key);
  });
  return accumulator;
}
