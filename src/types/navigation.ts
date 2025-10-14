/**
 * @file src/types/navigation.ts
 * @description Tipos TypeScript para navegación y rutas de MoviliaX
 */

import { ReactNode } from 'react';
import { URL, Nullable } from './common';

/**
 * NavItem - Item de navegación
 */
export interface NavItem {
  id: string;
  label: string;
  href: URL;
  icon?: ReactNode;
  badge?: NavBadge;
  children?: NavItem[];
  external?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  requiredAuth?: boolean;
  roles?: string[];
  order?: number;
}

/**
 * NavBadge - Badge en item de navegación
 */
export interface NavBadge {
  label: string;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  count?: number;
}

/**
 * NavLink - Link de navegación simple
 */
export interface NavLink {
  label: string;
  href: URL;
  icon?: ReactNode;
  external?: boolean;
  active?: boolean;
}

/**
 * MenuGroup - Grupo de menú
 */
export interface MenuGroup {
  id: string;
  label: string;
  icon?: ReactNode;
  items: NavItem[];
  collapsed?: boolean;
  order?: number;
}

/**
 * BreadcrumbItem - Item de breadcrumb
 */
export interface BreadcrumbItem {
  label: string;
  href?: URL;
  icon?: ReactNode;
  current?: boolean;
}

/**
 * Route - Definición de ruta
 */
export interface Route {
  path: string;
  name: string;
  component?: ReactNode;
  layout?: string;
  meta?: RouteMeta;
  children?: Route[];
  redirect?: string;
}

/**
 * RouteMeta - Metadatos de ruta
 */
export interface RouteMeta {
  title?: string;
  description?: string;
  keywords?: string[];
  requiresAuth?: boolean;
  roles?: string[];
  layout?: string;
  breadcrumb?: BreadcrumbItem[];
  icon?: ReactNode;
  public?: boolean;
  hiddenInNav?: boolean;
}

/**
 * RouteConfig - Configuración de rutas
 */
export interface RouteConfig {
  base?: string;
  routes: Route[];
  notFound?: Route;
  unauthorized?: Route;
  redirects?: RouteRedirect[];
}

/**
 * RouteRedirect - Redirección de ruta
 */
export interface RouteRedirect {
  from: string;
  to: string;
  permanent?: boolean;
}

/**
 * NavigationContext - Contexto de navegación
 */
export interface NavigationContext {
  currentPath: string;
  previousPath?: string;
  breadcrumbs: BreadcrumbItem[];
  isNavigating: boolean;
}

/**
 * TabItem - Item de tab
 */
export interface TabItem {
  id: string;
  label: string;
  icon?: ReactNode;
  content?: ReactNode;
  disabled?: boolean;
  badge?: NavBadge;
  href?: URL;
}

/**
 * SidebarSection - Sección de sidebar
 */
export interface SidebarSection {
  id: string;
  title?: string;
  items: NavItem[];
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  order?: number;
}

/**
 * FooterColumn - Columna de footer
 */
export interface FooterColumn {
  id: string;
  title: string;
  links: NavLink[];
  order?: number;
}

/**
 * MobileMenuItem - Item de menú mobile
 */
export interface MobileMenuItem extends NavItem {
  showInMobile?: boolean;
  mobileOrder?: number;
}

/**
 * Pagination - Paginación
 */
export interface Pagination {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  nextPageUrl?: URL;
  previousPageUrl?: URL;
}

/**
 * PaginationLink - Link de paginación
 */
export interface PaginationLink {
  page: number;
  url: URL;
  label: string;
  active: boolean;
  disabled?: boolean;
}

/**
 * NavigationHistory - Historial de navegación
 */
export interface NavigationHistory {
  entries: HistoryEntry[];
  currentIndex: number;
  length: number;
}

/**
 * HistoryEntry - Entrada de historial
 */
export interface HistoryEntry {
  path: string;
  title?: string;
  timestamp: number;
  state?: any;
}

/**
 * ScrollPosition - Posición de scroll
 */
export interface ScrollPosition {
  x: number;
  y: number;
  behavior?: ScrollBehavior;
}

/**
 * LinkProps - Props para componente de link
 */
export interface LinkProps {
  href: URL;
  children: ReactNode;
  external?: boolean;
  prefetch?: boolean;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  passHref?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}

/**
 * NavigationMenu - Menú de navegación completo
 */
export interface NavigationMenu {
  primary: NavItem[];
  secondary?: NavItem[];
  mobile?: MobileMenuItem[];
  footer?: FooterColumn[];
}

/**
 * RouteParams - Parámetros de ruta
 */
export type RouteParams<T extends string = string> = {
  [key in T]: string;
};

/**
 * QueryParams - Parámetros de query string
 */
export type QueryParams = Record<string, string | string[] | undefined>;

/**
 * NavigationGuard - Guard de navegación
 */
export interface NavigationGuard {
  name: string;
  fn: (to: Route, from: Route) => boolean | Promise<boolean>;
}

/**
 * RouterState - Estado del router
 */
export interface RouterState {
  currentRoute: Route;
  previousRoute?: Route;
  isNavigating: boolean;
  error?: Error;
}
