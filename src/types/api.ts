/**
 * @file src/types/api.ts
 * @description Tipos TypeScript para API y peticiones HTTP de MoviliaX
 */

import { Post, Author, Category, Tag, Newsletter, Comment } from './content';
import { ID, Nullable } from './common';

/**
 * ApiResponse - Respuesta genérica de API
 */
export interface ApiResponse<T = any> {
  success: boolean;
  data: Nullable<T>;
  message?: string;
  timestamp: string;
  requestId?: string;
}

/**
 * ApiError - Error de API
 */
export interface ApiError {
  success: false;
  error: {
    code: string;
    message: string;
    details?: Record<string, any>;
    statusCode: number;
    timestamp: string;
  };
  requestId?: string;
}

/**
 * PaginatedResponse - Respuesta paginada de API
 */
export interface PaginatedResponse<T = any> {
  success: boolean;
  data: T[];
  pagination: PaginationMeta;
  message?: string;
  timestamp: string;
}

/**
 * PaginationMeta - Metadata de paginación
 */
export interface PaginationMeta {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

/**
 * PaginationParams - Parámetros de paginación
 */
export interface PaginationParams {
  page?: number;
  pageSize?: number;
  limit?: number;
  offset?: number;
}

/**
 * SearchParams - Parámetros de búsqueda
 */
export interface SearchParams {
  query: string;
  fields?: string[];
  fuzzy?: boolean;
  matchAll?: boolean;
}

/**
 * FilterParams - Parámetros de filtrado
 */
export interface FilterParams {
  categories?: string[];
  tags?: string[];
  authors?: string[];
  dateFrom?: string;
  dateTo?: string;
  status?: string;
  featured?: boolean;
}

/**
 * SortParams - Parámetros de ordenamiento
 */
export interface SortParams {
  sortBy?: 'date' | 'views' | 'likes' | 'title' | 'readTime';
  sortOrder?: 'asc' | 'desc';
}

/**
 * RequestConfig - Configuración de petición HTTP
 */
export interface RequestConfig {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  headers?: Record<string, string>;
  params?: Record<string, any>;
  body?: any;
  timeout?: number;
  cache?: RequestCache;
  credentials?: RequestCredentials;
}

/**
 * ApiEndpoint - Endpoints de API
 */
export type ApiEndpoint =
  | '/api/posts'
  | '/api/posts/:id'
  | '/api/posts/:slug'
  | '/api/authors'
  | '/api/authors/:id'
  | '/api/categories'
  | '/api/tags'
  | '/api/newsletter'
  | '/api/newsletter/subscribe'
  | '/api/comments'
  | '/api/search'
  | '/api/stats';

/**
 * GetPostsParams - Parámetros para obtener posts
 */
export interface GetPostsParams extends PaginationParams, FilterParams, SortParams {
  search?: string;
  include?: ('author' | 'category' | 'tags' | 'comments')[];
}

/**
 * GetPostsResponse - Respuesta de obtener posts
 */
export type GetPostsResponse = PaginatedResponse<Post>;

/**
 * GetPostBySlugParams - Parámetros para obtener post por slug
 */
export interface GetPostBySlugParams {
  slug: string;
  include?: ('author' | 'category' | 'tags' | 'comments' | 'related')[];
}

/**
 * GetPostBySlugResponse - Respuesta de obtener post por slug
 */
export type GetPostBySlugResponse = ApiResponse<Post>;

/**
 * CreatePostRequest - Request para crear post
 */
export interface CreatePostRequest {
  title: string;
  content: string;
  excerpt?: string;
  featuredImage?: string;
  authorId: ID;
  categoryId: ID;
  tagIds?: ID[];
  status?: 'draft' | 'published';
  publishedAt?: string;
  metadata?: Record<string, any>;
}

/**
 * UpdatePostRequest - Request para actualizar post
 */
export interface UpdatePostRequest extends Partial<CreatePostRequest> {
  id: ID;
}

/**
 * DeletePostRequest - Request para eliminar post
 */
export interface DeletePostRequest {
  id: ID;
  permanent?: boolean;
}

/**
 * SearchRequest - Request de búsqueda
 */
export interface SearchRequest extends PaginationParams, SearchParams {
  filters?: FilterParams;
  sort?: SortParams;
}

/**
 * SearchResponse - Respuesta de búsqueda
 */
export interface SearchResponse extends PaginatedResponse<Post> {
  query: string;
  totalResults: number;
  searchTime: number;
  suggestions?: string[];
}

/**
 * NewsletterSubscribeRequest - Request de suscripción a newsletter
 */
export interface NewsletterSubscribeRequest {
  email: string;
  name?: string;
  preferences?: {
    frequency?: 'daily' | 'weekly' | 'monthly';
    categories?: string[];
  };
  source?: string;
  consent: boolean;
}

/**
 * NewsletterSubscribeResponse - Respuesta de suscripción
 */
export interface NewsletterSubscribeResponse extends ApiResponse {
  data: {
    subscribed: boolean;
    email: string;
    confirmationRequired?: boolean;
  };
}

/**
 * CreateCommentRequest - Request para crear comentario
 */
export interface CreateCommentRequest {
  postId: ID;
  author: {
    name: string;
    email: string;
    website?: string;
  };
  content: string;
  parentId?: ID;
}

/**
 * GetCommentsParams - Parámetros para obtener comentarios
 */
export interface GetCommentsParams extends PaginationParams {
  postId?: ID;
  status?: 'pending' | 'approved' | 'spam';
  sortBy?: 'date' | 'likes';
}

/**
 * GetCommentsResponse - Respuesta de obtener comentarios
 */
export type GetCommentsResponse = PaginatedResponse<Comment>;

/**
 * GetAuthorsResponse - Respuesta de obtener autores
 */
export type GetAuthorsResponse = ApiResponse<Author[]>;

/**
 * GetCategoriesResponse - Respuesta de obtener categorías
 */
export type GetCategoriesResponse = ApiResponse<Category[]>;

/**
 * GetTagsResponse - Respuesta de obtener tags
 */
export type GetTagsResponse = ApiResponse<Tag[]>;

/**
 * GetStatsResponse - Respuesta de estadísticas
 */
export interface GetStatsResponse extends ApiResponse {
  data: {
    totalPosts: number;
    totalAuthors: number;
    totalViews: number;
    totalComments: number;
    postsThisMonth: number;
    popularPosts: Post[];
    popularCategories: Category[];
  };
}

/**
 * UploadImageRequest - Request para subir imagen
 */
export interface UploadImageRequest {
  file: File;
  folder?: string;
  optimize?: boolean;
  maxWidth?: number;
  maxHeight?: number;
}

/**
 * UploadImageResponse - Respuesta de subir imagen
 */
export interface UploadImageResponse extends ApiResponse {
  data: {
    url: string;
    filename: string;
    size: number;
    width: number;
    height: number;
    format: string;
  };
}

/**
 * ContactFormRequest - Request de formulario de contacto
 */
export interface ContactFormRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  company?: string;
  captcha?: string;
}

/**
 * ContactFormResponse - Respuesta de formulario de contacto
 */
export interface ContactFormResponse extends ApiResponse {
  data: {
    sent: boolean;
    ticketId?: string;
  };
}

/**
 * WebhookPayload - Payload de webhook
 */
export interface WebhookPayload<T = any> {
  event: string;
  timestamp: string;
  data: T;
  signature?: string;
}

/**
 * RateLimitInfo - Información de límite de rate
 */
export interface RateLimitInfo {
  limit: number;
  remaining: number;
  reset: number;
  retryAfter?: number;
}

/**
 * CacheControl - Control de caché
 */
export interface CacheControl {
  maxAge?: number;
  sMaxAge?: number;
  staleWhileRevalidate?: number;
  staleIfError?: number;
  public?: boolean;
  private?: boolean;
  noStore?: boolean;
  noCache?: boolean;
}
