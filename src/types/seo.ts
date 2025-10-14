/**
 * @file src/types/seo.ts
 * @description Tipos TypeScript para SEO y metadatos de MoviliaX
 */

import { URL, DateString, Language, Nullable } from './common';

/**
 * SEOMetadata - Metadatos SEO completos
 */
export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  canonical?: URL;
  robots?: RobotsContent;
  openGraph?: OpenGraphData;
  twitter?: TwitterCardData;
  alternates?: AlternateLanguages;
  jsonLd?: JsonLd[];
}

/**
 * RobotsContent - Directivas para robots
 */
export interface RobotsContent {
  index?: boolean;
  follow?: boolean;
  noarchive?: boolean;
  nosnippet?: boolean;
  noimageindex?: boolean;
  maxSnippet?: number;
  maxImagePreview?: 'none' | 'standard' | 'large';
  maxVideoPreview?: number;
}

/**
 * OpenGraphData - Metadatos Open Graph
 */
export interface OpenGraphData {
  type: OpenGraphType;
  title: string;
  description: string;
  url: URL;
  siteName: string;
  locale: string;
  images: OpenGraphImage[];
  videos?: OpenGraphVideo[];
  audio?: OpenGraphAudio[];
  determiner?: 'a' | 'an' | 'the' | 'auto' | '';
  alternateLocale?: string[];
}

/**
 * OpenGraphType - Tipos de contenido Open Graph
 */
export type OpenGraphType =
  | 'website'
  | 'article'
  | 'blog'
  | 'book'
  | 'profile'
  | 'music.song'
  | 'music.album'
  | 'video.movie'
  | 'video.episode';

/**
 * OpenGraphImage - Imagen de Open Graph
 */
export interface OpenGraphImage {
  url: URL;
  secureUrl?: URL;
  alt?: string;
  type?: string;
  width?: number;
  height?: number;
}

/**
 * OpenGraphVideo - Video de Open Graph
 */
export interface OpenGraphVideo {
  url: URL;
  secureUrl?: URL;
  type?: string;
  width?: number;
  height?: number;
}

/**
 * OpenGraphAudio - Audio de Open Graph
 */
export interface OpenGraphAudio {
  url: URL;
  secureUrl?: URL;
  type?: string;
}

/**
 * OpenGraphArticle - Metadatos específicos de artículo
 */
export interface OpenGraphArticle extends OpenGraphData {
  type: 'article';
  article: {
    publishedTime?: DateString;
    modifiedTime?: DateString;
    expirationTime?: DateString;
    author?: URL[];
    section?: string;
    tag?: string[];
  };
}

/**
 * TwitterCardData - Metadatos Twitter Card
 */
export interface TwitterCardData {
  card: TwitterCardType;
  site?: string; // @username del sitio
  creator?: string; // @username del creador
  title: string;
  description: string;
  images: TwitterImage[];
  app?: TwitterApp;
}

/**
 * TwitterCardType - Tipos de Twitter Card
 */
export type TwitterCardType = 'summary' | 'summary_large_image' | 'app' | 'player';

/**
 * TwitterImage - Imagen de Twitter Card
 */
export interface TwitterImage {
  url: URL;
  alt?: string;
}

/**
 * TwitterApp - Datos de app para Twitter Card
 */
export interface TwitterApp {
  name?: {
    iphone?: string;
    ipad?: string;
    googleplay?: string;
  };
  id?: {
    iphone?: string;
    ipad?: string;
    googleplay?: string;
  };
  url?: {
    iphone?: string;
    ipad?: string;
    googleplay?: string;
  };
}

/**
 * AlternateLanguages - Idiomas alternativos
 */
export interface AlternateLanguages {
  canonical?: URL;
  languages: Record<Language, URL>;
}

/**
 * JsonLd - Structured Data (JSON-LD)
 */
export type JsonLd =
  | ArticleJsonLd
  | OrganizationJsonLd
  | PersonJsonLd
  | WebSiteJsonLd
  | BreadcrumbListJsonLd
  | FAQPageJsonLd
  | NewsArticleJsonLd
  | BlogPostingJsonLd;

/**
 * Base para todos los tipos JSON-LD
 */
interface BaseJsonLd {
  '@context': 'https://schema.org';
  '@type': string;
}

/**
 * ArticleJsonLd - Structured Data para artículos
 */
export interface ArticleJsonLd extends BaseJsonLd {
  '@type': 'Article' | 'NewsArticle' | 'BlogPosting';
  headline: string;
  description: string;
  image: string | string[];
  datePublished: DateString;
  dateModified?: DateString;
  author: PersonOrOrganization;
  publisher: OrganizationJsonLd;
  mainEntityOfPage?: {
    '@type': 'WebPage';
    '@id': URL;
  };
  keywords?: string[];
  articleSection?: string;
  wordCount?: number;
  articleBody?: string;
}

/**
 * OrganizationJsonLd - Structured Data para organización
 */
export interface OrganizationJsonLd extends BaseJsonLd {
  '@type': 'Organization';
  name: string;
  url: URL;
  logo?: {
    '@type': 'ImageObject';
    url: URL;
    width?: number;
    height?: number;
  };
  description?: string;
  email?: string;
  telephone?: string;
  address?: AddressJsonLd;
  sameAs?: URL[];
  founder?: PersonOrOrganization;
  foundingDate?: DateString;
}

/**
 * PersonJsonLd - Structured Data para persona
 */
export interface PersonJsonLd extends BaseJsonLd {
  '@type': 'Person';
  name: string;
  url?: URL;
  image?: URL;
  description?: string;
  email?: string;
  jobTitle?: string;
  worksFor?: OrganizationJsonLd;
  sameAs?: URL[];
}

/**
 * WebSiteJsonLd - Structured Data para sitio web
 */
export interface WebSiteJsonLd extends BaseJsonLd {
  '@type': 'WebSite';
  name: string;
  url: URL;
  description?: string;
  publisher?: OrganizationJsonLd;
  potentialAction?: SearchActionJsonLd;
  inLanguage?: Language;
}

/**
 * SearchActionJsonLd - Acción de búsqueda
 */
export interface SearchActionJsonLd {
  '@type': 'SearchAction';
  target: {
    '@type': 'EntryPoint';
    urlTemplate: string;
  };
  'query-input': string;
}

/**
 * BreadcrumbListJsonLd - Lista de breadcrumbs
 */
export interface BreadcrumbListJsonLd extends BaseJsonLd {
  '@type': 'BreadcrumbList';
  itemListElement: BreadcrumbItemJsonLd[];
}

/**
 * BreadcrumbItemJsonLd - Item de breadcrumb
 */
export interface BreadcrumbItemJsonLd {
  '@type': 'ListItem';
  position: number;
  name: string;
  item?: URL;
}

/**
 * FAQPageJsonLd - Página de preguntas frecuentes
 */
export interface FAQPageJsonLd extends BaseJsonLd {
  '@type': 'FAQPage';
  mainEntity: FAQItemJsonLd[];
}

/**
 * FAQItemJsonLd - Item de FAQ
 */
export interface FAQItemJsonLd {
  '@type': 'Question';
  name: string;
  acceptedAnswer: {
    '@type': 'Answer';
    text: string;
  };
}

/**
 * NewsArticleJsonLd - Artículo de noticias
 */
export interface NewsArticleJsonLd extends ArticleJsonLd {
  '@type': 'NewsArticle';
  dateline?: string;
}

/**
 * BlogPostingJsonLd - Post de blog
 */
export interface BlogPostingJsonLd extends ArticleJsonLd {
  '@type': 'BlogPosting';
}

/**
 * AddressJsonLd - Dirección
 */
export interface AddressJsonLd {
  '@type': 'PostalAddress';
  streetAddress?: string;
  addressLocality: string;
  addressRegion: string;
  postalCode?: string;
  addressCountry: string;
}

/**
 * PersonOrOrganization - Puede ser persona u organización
 */
export type PersonOrOrganization = PersonJsonLd | OrganizationJsonLd;

/**
 * SiteVerification - Verificación de sitio
 */
export interface SiteVerification {
  google?: string;
  bing?: string;
  yandex?: string;
  pinterest?: string;
}

/**
 * ManifestIcons - Iconos para manifest
 */
export interface ManifestIcon {
  src: URL;
  sizes: string;
  type: string;
  purpose?: 'any' | 'maskable' | 'monochrome';
}

/**
 * WebAppManifest - Manifest de aplicación web
 */
export interface WebAppManifest {
  name: string;
  short_name: string;
  description: string;
  start_url: string;
  display: 'standalone' | 'fullscreen' | 'minimal-ui' | 'browser';
  background_color: string;
  theme_color: string;
  orientation?: 'any' | 'natural' | 'portrait' | 'landscape';
  icons: ManifestIcon[];
  scope?: string;
  categories?: string[];
  lang?: Language;
  dir?: 'ltr' | 'rtl' | 'auto';
}

/**
 * Sitemap - Entrada de sitemap
 */
export interface SitemapEntry {
  url: URL;
  lastmod?: DateString;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
  images?: SitemapImage[];
  news?: SitemapNews;
}

/**
 * SitemapImage - Imagen en sitemap
 */
export interface SitemapImage {
  url: URL;
  caption?: string;
  title?: string;
  geoLocation?: string;
  license?: URL;
}

/**
 * SitemapNews - Noticia en sitemap
 */
export interface SitemapNews {
  publication: {
    name: string;
    language: Language;
  };
  publicationDate: DateString;
  title: string;
  keywords?: string;
}
