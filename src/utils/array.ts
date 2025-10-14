/**
 * @file src/utils/array.ts
 * @description Utilidades para manipulación de arrays
 */

/**
 * Divide un array en chunks de tamaño específico
 */
export function chunk<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

/**
 * Mezcla aleatoriamente un array (Fisher-Yates shuffle)
 */
export function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Remueve duplicados de un array
 */
export function unique<T>(array: T[]): T[] {
  return [...new Set(array)];
}

/**
 * Remueve duplicados por una propiedad específica
 */
export function uniqueBy<T>(array: T[], key: keyof T): T[] {
  const seen = new Set();
  return array.filter(item => {
    const value = item[key];
    if (seen.has(value)) {
      return false;
    }
    seen.add(value);
    return true;
  });
}

/**
 * Agrupa elementos por una función o key
 */
export function groupBy<T>(
  array: T[],
  keyOrFn: keyof T | ((item: T) => string | number)
): Record<string, T[]> {
  return array.reduce((groups, item) => {
    const key = typeof keyOrFn === 'function' 
      ? keyOrFn(item) 
      : String(item[keyOrFn]);
    
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {} as Record<string, T[]>);
}

/**
 * Ordena un array por una propiedad
 */
export function sortBy<T>(
  array: T[],
  key: keyof T,
  order: 'asc' | 'desc' = 'asc'
): T[] {
  return [...array].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];
    
    if (aVal < bVal) return order === 'asc' ? -1 : 1;
    if (aVal > bVal) return order === 'asc' ? 1 : -1;
    return 0;
  });
}

/**
 * Divide un array en dos según una condición
 */
export function partition<T>(
  array: T[],
  predicate: (item: T) => boolean
): [T[], T[]] {
  const pass: T[] = [];
  const fail: T[] = [];
  
  array.forEach(item => {
    if (predicate(item)) {
      pass.push(item);
    } else {
      fail.push(item);
    }
  });
  
  return [pass, fail];
}

/**
 * Encuentra la intersección de múltiples arrays
 */
export function intersection<T>(...arrays: T[][]): T[] {
  if (arrays.length === 0) return [];
  if (arrays.length === 1) return arrays[0];
  
  const [first, ...rest] = arrays;
  return first.filter(item => 
    rest.every(arr => arr.includes(item))
  );
}

/**
 * Encuentra la diferencia entre dos arrays (elementos en A pero no en B)
 */
export function difference<T>(arrayA: T[], arrayB: T[]): T[] {
  return arrayA.filter(item => !arrayB.includes(item));
}

/**
 * Aplana un array anidado
 */
export function flatten<T>(array: any[]): T[] {
  return array.reduce((flat, item) => {
    return flat.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);
}

/**
 * Remueve valores falsy de un array
 */
export function compact<T>(array: (T | null | undefined | false | '' | 0)[]): T[] {
  return array.filter(Boolean) as T[];
}

/**
 * Obtiene un elemento aleatorio del array
 */
export function sample<T>(array: T[]): T | undefined {
  if (array.length === 0) return undefined;
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Obtiene N elementos aleatorios del array
 */
export function sampleSize<T>(array: T[], n: number): T[] {
  const shuffled = shuffle(array);
  return shuffled.slice(0, Math.min(n, array.length));
}

/**
 * Encuentra el elemento más frecuente
 */
export function mode<T>(array: T[]): T | undefined {
  if (array.length === 0) return undefined;
  
  const frequency = new Map<T, number>();
  let maxFreq = 0;
  let modeValue: T | undefined;
  
  array.forEach(item => {
    const freq = (frequency.get(item) || 0) + 1;
    frequency.set(item, freq);
    
    if (freq > maxFreq) {
      maxFreq = freq;
      modeValue = item;
    }
  });
  
  return modeValue;
}

/**
 * Encuentra el índice del elemento con valor máximo
 */
export function maxIndex<T>(array: T[], getValue: (item: T) => number): number {
  if (array.length === 0) return -1;
  
  let maxIdx = 0;
  let maxVal = getValue(array[0]);
  
  for (let i = 1; i < array.length; i++) {
    const val = getValue(array[i]);
    if (val > maxVal) {
      maxVal = val;
      maxIdx = i;
    }
  }
  
  return maxIdx;
}

/**
 * Encuentra el índice del elemento con valor mínimo
 */
export function minIndex<T>(array: T[], getValue: (item: T) => number): number {
  if (array.length === 0) return -1;
  
  let minIdx = 0;
  let minVal = getValue(array[0]);
  
  for (let i = 1; i < array.length; i++) {
    const val = getValue(array[i]);
    if (val < minVal) {
      minVal = val;
      minIdx = i;
    }
  }
  
  return minIdx;
}

/**
 * Suma todos los valores de un array
 */
export function sum(array: number[]): number {
  return array.reduce((total, num) => total + num, 0);
}

/**
 * Calcula el promedio de un array
 */
export function average(array: number[]): number {
  if (array.length === 0) return 0;
  return sum(array) / array.length;
}

/**
 * Mueve un elemento de una posición a otra
 */
export function move<T>(array: T[], from: number, to: number): T[] {
  const result = [...array];
  const [removed] = result.splice(from, 1);
  result.splice(to, 0, removed);
  return result;
}

/**
 * Inserta un elemento en una posición específica
 */
export function insertAt<T>(array: T[], index: number, item: T): T[] {
  return [...array.slice(0, index), item, ...array.slice(index)];
}

/**
 * Remueve un elemento en una posición específica
 */
export function removeAt<T>(array: T[], index: number): T[] {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}

/**
 * Reemplaza un elemento en una posición específica
 */
export function replaceAt<T>(array: T[], index: number, item: T): T[] {
  return [...array.slice(0, index), item, ...array.slice(index + 1)];
}

/**
 * Cuenta ocurrencias de cada elemento
 */
export function countOccurrences<T>(array: T[]): Map<T, number> {
  const counts = new Map<T, number>();
  array.forEach(item => {
    counts.set(item, (counts.get(item) || 0) + 1);
  });
  return counts;
}

/**
 * Verifica si dos arrays tienen los mismos elementos (sin importar orden)
 */
export function haveSameElements<T>(arrayA: T[], arrayB: T[]): boolean {
  if (arrayA.length !== arrayB.length) return false;
  
  const sortedA = [...arrayA].sort();
  const sortedB = [...arrayB].sort();
  
  return sortedA.every((item, index) => item === sortedB[index]);
}

/**
 * Crea un rango de números
 */
export function range(start: number, end: number, step: number = 1): number[] {
  const result: number[] = [];
  for (let i = start; i < end; i += step) {
    result.push(i);
  }
  return result;
}

/**
 * Zip - combina múltiples arrays en tuplas
 */
export function zip<T>(...arrays: T[][]): T[][] {
  const maxLength = Math.max(...arrays.map(arr => arr.length));
  const result: T[][] = [];
  
  for (let i = 0; i < maxLength; i++) {
    result.push(arrays.map(arr => arr[i]));
  }
  
  return result;
}

/**
 * Divide array en dos mitades
 */
export function split<T>(array: T[]): [T[], T[]] {
  const mid = Math.floor(array.length / 2);
  return [array.slice(0, mid), array.slice(mid)];
}
