/**
 * @file src/types/common.ts
 * @description Tipos TypeScript comunes compartidos en MoviliaX
 */

/**
 * ID - Identificador único
 */
export type ID = string | number;

/**
 * Timestamp - Marca de tiempo
 */
export type Timestamp = number;

/**
 * DateString - Fecha en formato string ISO
 */
export type DateString = string;

/**
 * Slug - URL-friendly string
 */
export type Slug = string;

/**
 * URL - URL completa
 */
export type URL = string;

/**
 * Email - Dirección de email
 */
export type Email = string;

/**
 * Color - Código de color (hex, rgb, rgba)
 */
export type Color = string;

/**
 * HexColor - Código de color hexadecimal
 */
export type HexColor = `#${string}`;

/**
 * Size - Tamaños estándar
 */
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Variant - Variantes de componentes
 */
export type Variant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';

/**
 * Status - Estados generales
 */
export type Status = 'idle' | 'loading' | 'success' | 'error';

/**
 * Theme - Temas de la aplicación
 */
export type Theme = 'light' | 'dark' | 'system';

/**
 * Language - Idiomas soportados
 */
export type Language = 'es' | 'en';

/**
 * Locale - Configuración regional
 */
export type Locale = 'es-MX' | 'es-ES' | 'en-US' | 'en-GB';

/**
 * Nullable - Tipo que puede ser null
 */
export type Nullable<T> = T | null;

/**
 * Optional - Tipo que puede ser undefined
 */
export type Optional<T> = T | undefined;

/**
 * Maybe - Tipo que puede ser null o undefined
 */
export type Maybe<T> = T | null | undefined;

/**
 * NonNullable - Tipo que no puede ser null ni undefined
 */
export type NonNullable<T> = T extends null | undefined ? never : T;

/**
 * ValueOf - Tipo de los valores de un objeto
 */
export type ValueOf<T> = T[keyof T];

/**
 * ArrayElement - Tipo de los elementos de un array
 */
export type ArrayElement<T> = T extends (infer U)[] ? U : never;

/**
 * DeepPartial - Hace todos los campos opcionales recursivamente
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * DeepRequired - Hace todos los campos requeridos recursivamente
 */
export type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P];
};

/**
 * DeepReadonly - Hace todos los campos readonly recursivamente
 */
export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

/**
 * Prettify - Mejora la visualización de tipos complejos
 */
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

/**
 * UnionToIntersection - Convierte unión en intersección
 */
export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

/**
 * Coordinates - Coordenadas geográficas
 */
export interface Coordinates {
  latitude: number;
  longitude: number;
}

/**
 * Address - Dirección completa
 */
export interface Address {
  street?: string;
  city: string;
  state: string;
  country: string;
  postalCode?: string;
  coordinates?: Coordinates;
}

/**
 * ImageData - Datos de imagen
 */
export interface ImageData {
  url: URL;
  alt: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
}

/**
 * VideoData - Datos de video
 */
export interface VideoData {
  url: URL;
  thumbnail?: URL;
  duration?: number;
  width?: number;
  height?: number;
}

/**
 * FileData - Datos de archivo
 */
export interface FileData {
  url: URL;
  name: string;
  size: number;
  type: string;
  uploadedAt?: DateString;
}

/**
 * Meta - Metadatos genéricos
 */
export interface Meta {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  image?: URL;
  [key: string]: any;
}

/**
 * Range - Rango numérico
 */
export interface Range<T = number> {
  min: T;
  max: T;
}

/**
 * DateRange - Rango de fechas
 */
export interface DateRange {
  start: DateString;
  end: DateString;
}

/**
 * Dimensions - Dimensiones (ancho y alto)
 */
export interface Dimensions {
  width: number;
  height: number;
}

/**
 * Position - Posición (x, y)
 */
export interface Position {
  x: number;
  y: number;
}

/**
 * ColorPalette - Paleta de colores
 */
export interface ColorPalette {
  primary: HexColor;
  secondary: HexColor;
  accent: HexColor;
  background: HexColor;
  foreground: HexColor;
  muted: HexColor;
  border: HexColor;
}

/**
 * Breakpoints - Breakpoints responsive
 */
export interface Breakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
}

/**
 * Spacing - Sistema de espaciado
 */
export type Spacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 64;

/**
 * FontWeight - Pesos de fuente
 */
export type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

/**
 * FontSize - Tamaños de fuente
 */
export type FontSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';

/**
 * BorderRadius - Radio de borde
 */
export type BorderRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

/**
 * Shadow - Sombras
 */
export type Shadow = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner';

/**
 * Transition - Transiciones
 */
export type Transition = 'none' | 'all' | 'colors' | 'opacity' | 'shadow' | 'transform';

/**
 * ZIndex - Z-index
 */
export type ZIndex = 0 | 10 | 20 | 30 | 40 | 50 | 100 | 200 | 300 | 400 | 500;

/**
 * Display - Tipo de display CSS
 */
export type Display = 'none' | 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid';

/**
 * FlexDirection - Dirección de flexbox
 */
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

/**
 * JustifyContent - Alineación horizontal
 */
export type JustifyContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';

/**
 * AlignItems - Alineación vertical
 */
export type AlignItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

/**
 * TextAlign - Alineación de texto
 */
export type TextAlign = 'left' | 'center' | 'right' | 'justify';

/**
 * Overflow - Comportamiento de overflow
 */
export type Overflow = 'auto' | 'hidden' | 'visible' | 'scroll';

/**
 * Cursor - Tipo de cursor
 */
export type Cursor = 'auto' | 'default' | 'pointer' | 'wait' | 'text' | 'move' | 'not-allowed' | 'help';

/**
 * UserSelect - Selección de usuario
 */
export type UserSelect = 'none' | 'auto' | 'text' | 'all';
