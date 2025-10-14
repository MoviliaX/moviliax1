// src/lib/types.ts
/**
 * Tipos TypeScript compartidos para MoviliaX
 */

// Tipos de contenido
export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  modifiedDate?: string;
  author: Author;
  category: Category;
  tags?: Tag[];
  image?: string;
  readTime?: number;
  draft?: boolean;
  featured?: boolean;
}

export interface Author {
  slug: string;
  name: string;
  bio: string;
  avatar?: string;
  role?: string;
  email?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
  articlesCount?: number;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  color?: string;
  icon?: string;
  count?: number;
}

export interface Tag {
  slug: string;
  name: string;
  count?: number;
}

// Tipos de UI
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavItem[];
}

export interface Breadcrumb {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: 'twitter' | 'linkedin' | 'github' | 'youtube' | 'instagram' | 'facebook';
  url: string;
  label?: string;
}

// Tipos de formularios
export interface NewsletterFormData {
  email: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface SearchFormData {
  query: string;
  filters?: {
    category?: string;
    tag?: string;
    author?: string;
    dateFrom?: string;
    dateTo?: string;
  };
}

// Tipos de respuesta API
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// Tipos de metadatos
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

// Tipos de SEO
export interface JsonLdArticle {
  '@context': string;
  '@type': 'Article';
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: {
    '@type': 'Person';
    name: string;
    url?: string;
  };
  publisher: {
    '@type': 'Organization';
    name: string;
    logo: {
      '@type': 'ImageObject';
      url: string;
    };
  };
  mainEntityOfPage: {
    '@type': 'WebPage';
    '@id': string;
  };
}

// Tipos de configuración
export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  locale: string;
  author: string;
  email: string;
  copyright: string;
}

// Tipos de estadísticas
export interface BlogStats {
  totalPosts: number;
  totalCategories: number;
  totalTags: number;
  totalAuthors?: number;
  totalWords: number;
  averageReadTime: number;
  postsThisMonth?: number;
  postsThisYear?: number;
}

// Tipos de búsqueda
export interface SearchResult {
  type: 'post' | 'page' | 'author' | 'category';
  title: string;
  excerpt?: string;
  url: string;
  image?: string;
  relevance?: number;
}

// Tipos de navegación
export interface TableOfContents {
  id: string;
  title: string;
  level: number;
  children?: TableOfContents[];
}

// Tipos de comentarios (para futura implementación)
export interface Comment {
  id: string;
  postSlug: string;
  author: {
    name: string;
    email: string;
    avatar?: string;
  };
  content: string;
  date: string;
  approved: boolean;
  parentId?: string;
  replies?: Comment[];
}

// Tipos de notificaciones
export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export interface Notification {
  id: string;
  type: NotificationType;
  title?: string;
  message: string;
  duration?: number;
  dismissible?: boolean;
}

// Tipos de componentes
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
export type BadgeSize = 'sm' | 'md' | 'lg';

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

// Tipos de filtros
export interface PostFilters {
  category?: string;
  tag?: string;
  author?: string;
  year?: number;
  month?: number;
  search?: string;
}

// Tipos de ordenamiento
export type SortOrder = 'asc' | 'desc';
export type SortField = 'date' | 'title' | 'readTime' | 'views';

export interface SortOptions {
  field: SortField;
  order: SortOrder;
}

// Tipos de estado
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

// Tipos de eventos
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// Helper types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type Required<T, K extends keyof T> = T & { [P in K]-?: T[P] };

// Utility types para React
export type ComponentProps<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T];
export type ReactChildren = React.ReactNode | React.ReactNode[];
