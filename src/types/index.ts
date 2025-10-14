/**
 * @file src/types/index.ts
 * @description Exportaciones centralizadas de todos los tipos TypeScript de MoviliaX
 */

// Content Types
export type {
  Post,
  PostMetadata,
  PostFrontmatter,
  Author,
  AuthorProfile,
  Category,
  Tag,
  Newsletter,
  Comment,
  Series,
} from './content';

// Component Types
export type {
  ButtonProps,
  CardProps,
  InputProps,
  BadgeProps,
  SearchBarProps,
  NavbarProps,
  FooterProps,
  SidebarProps,
  ArticleCardProps,
  AuthorCardProps,
  NewsletterProps,
  CategoryFilterProps,
} from './components';

// API Types
export type {
  ApiResponse,
  ApiError,
  PaginatedResponse,
  PaginationParams,
  SearchParams,
  FilterParams,
  SortParams,
  ApiEndpoint,
  RequestConfig,
} from './api';

// Common Types
export type {
  ID,
  Timestamp,
  DateString,
  Slug,
  URL,
  Email,
  Color,
  Size,
  Variant,
  Status,
  Theme,
  Language,
} from './common';

// SEO Types
export type {
  SEOMetadata,
  OpenGraphData,
  TwitterCardData,
  StructuredData,
  JsonLd,
  BreadcrumbList,
  Article as ArticleSchema,
  Organization,
} from './seo';

// Navigation Types
export type {
  NavItem,
  NavLink,
  MenuGroup,
  BreadcrumbItem,
  Route,
  RouteConfig,
} from './navigation';

// Form Types
export type {
  FormValues,
  FormErrors,
  FormField,
  FormConfig,
  ContactFormData,
  NewsletterFormData,
  SearchFormData,
  CommentFormData,
  ValidationRule,
} from './form';

// Utility Types
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type Maybe<T> = T | null | undefined;
export type ArrayElement<T> = T extends (infer U)[] ? U : never;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
export type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P];
};

// Re-export everything as namespace for convenience
export * as ContentTypes from './content';
export * as ComponentTypes from './components';
export * as ApiTypes from './api';
export * as CommonTypes from './common';
export * as SEOTypes from './seo';
export * as NavigationTypes from './navigation';
export * as FormTypes from './form';
