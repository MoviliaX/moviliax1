/**
 * @file src/types/content.ts
 * @description Tipos TypeScript para contenido de MoviliaX
 */

import { Nullable, Optional, DateString, Slug, URL, Email, ID } from './common';

/**
 * Post - Artículo completo del blog
 */
export interface Post {
  id: ID;
  slug: Slug;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: Nullable<URL>;
  author: Author;
  category: Category;
  tags: Tag[];
  publishedAt: DateString;
  updatedAt: DateString;
  readTime: number; // en minutos
  views: number;
  likes: number;
  comments: Comment[];
  status: PostStatus;
  featured: boolean;
  series: Nullable<Series>;
  relatedPosts: Post[];
  metadata: PostMetadata;
}

/**
 * PostMetadata - Metadatos del post
 */
export interface PostMetadata {
  seoTitle: Optional<string>;
  seoDescription: Optional<string>;
  keywords: string[];
  canonicalUrl: Optional<URL>;
  ogImage: Optional<URL>;
  twitterCard: 'summary' | 'summary_large_image';
}

/**
 * PostFrontmatter - Frontmatter para archivos MDX
 */
export interface PostFrontmatter {
  title: string;
  date: string;
  author: string;
  categories: string[];
  tags: string[];
  image?: string;
  excerpt?: string;
  draft?: boolean;
  featured?: boolean;
  series?: string;
  seriesOrder?: number;
}

/**
 * PostStatus - Estados de publicación
 */
export type PostStatus = 'draft' | 'published' | 'scheduled' | 'archived';

/**
 * Author - Autor de artículos
 */
export interface Author {
  id: ID;
  slug: Slug;
  name: string;
  bio: string;
  avatar: Nullable<URL>;
  email: Email;
  role: AuthorRole;
  socialLinks: SocialLinks;
  postsCount: number;
  joinedDate: DateString;
}

/**
 * AuthorProfile - Perfil extendido del autor
 */
export interface AuthorProfile extends Author {
  expertise: string[];
  achievements: string[];
  posts: Post[];
  favoriteTopics: Category[];
}

/**
 * AuthorRole - Roles de autor
 */
export type AuthorRole = 'editor' | 'writer' | 'contributor' | 'guest';

/**
 * SocialLinks - Enlaces de redes sociales
 */
export interface SocialLinks {
  twitter?: URL;
  linkedin?: URL;
  github?: URL;
  website?: URL;
  instagram?: URL;
  facebook?: URL;
}

/**
 * Category - Categoría de contenido
 */
export interface Category {
  id: ID;
  slug: Slug;
  name: string;
  description: string;
  icon: string; // emoji o nombre de icono
  color: string; // código hex
  parent: Nullable<Category>;
  postsCount: number;
  featured: boolean;
  order: number;
}

/**
 * Tag - Etiqueta de contenido
 */
export interface Tag {
  id: ID;
  slug: Slug;
  name: string;
  description: Optional<string>;
  postsCount: number;
}

/**
 * Newsletter - Edición del newsletter
 */
export interface Newsletter {
  id: ID;
  slug: Slug;
  edition: number;
  title: string;
  subject: string;
  content: string;
  excerpt: string;
  publishedAt: DateString;
  sections: NewsletterSection[];
  stats: NewsletterStats;
  featured: boolean;
}

/**
 * NewsletterSection - Sección del newsletter
 */
export interface NewsletterSection {
  id: ID;
  title: string;
  content: string;
  type: 'news' | 'deep-dive' | 'stats' | 'resources' | 'team-note' | 'cta';
  order: number;
}

/**
 * NewsletterStats - Estadísticas del newsletter
 */
export interface NewsletterStats {
  sent: number;
  opened: number;
  clicked: number;
  openRate: number;
  clickRate: number;
}

/**
 * Comment - Comentario en un post
 */
export interface Comment {
  id: ID;
  postId: ID;
  author: CommentAuthor;
  content: string;
  createdAt: DateString;
  updatedAt: DateString;
  likes: number;
  replies: Comment[];
  status: CommentStatus;
}

/**
 * CommentAuthor - Autor de comentario
 */
export interface CommentAuthor {
  name: string;
  email: Email;
  avatar: Nullable<URL>;
  website: Optional<URL>;
}

/**
 * CommentStatus - Estados de comentario
 */
export type CommentStatus = 'pending' | 'approved' | 'spam' | 'deleted';

/**
 * Series - Serie de artículos relacionados
 */
export interface Series {
  id: ID;
  slug: Slug;
  title: string;
  description: string;
  posts: Post[];
  postsCount: number;
  image: Nullable<URL>;
  completedPercentage: number;
}

/**
 * SearchResult - Resultado de búsqueda
 */
export interface SearchResult {
  post: Post;
  highlights: SearchHighlight[];
  score: number;
}

/**
 * SearchHighlight - Resaltado en resultados de búsqueda
 */
export interface SearchHighlight {
  field: 'title' | 'excerpt' | 'content';
  text: string;
  matches: number;
}

/**
 * BlogStats - Estadísticas generales del blog
 */
export interface BlogStats {
  totalPosts: number;
  totalAuthors: number;
  totalCategories: number;
  totalViews: number;
  totalComments: number;
  postsThisMonth: number;
  postsThisWeek: number;
  popularPosts: Post[];
  popularCategories: Category[];
  popularTags: Tag[];
}

/**
 * FeedItem - Item para RSS/Atom feed
 */
export interface FeedItem {
  title: string;
  link: URL;
  description: string;
  pubDate: DateString;
  author: string;
  categories: string[];
  guid: string;
  enclosure?: {
    url: URL;
    type: string;
    length: number;
  };
}
