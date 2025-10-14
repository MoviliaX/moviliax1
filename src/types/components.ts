/**
 * @file src/types/components.ts
 * @description Tipos TypeScript para componentes de MoviliaX
 */

import { ReactNode, HTMLAttributes, ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import { Post, Author, Category, Tag } from './content';
import { Size, Variant, Color } from './common';

/**
 * ButtonProps - Props del componente Button
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: Size;
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  asChild?: boolean;
}

/**
 * CardProps - Props del componente Card
 */
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined' | 'ghost';
  padding?: Size;
  hoverable?: boolean;
  clickable?: boolean;
  header?: ReactNode;
  footer?: ReactNode;
}

/**
 * InputProps - Props del componente Input
 */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

/**
 * BadgeProps - Props del componente Badge
 */
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
  size?: Size;
  color?: Color;
  removable?: boolean;
  onRemove?: () => void;
}

/**
 * SearchBarProps - Props del componente SearchBar
 */
export interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  onClear?: () => void;
  autoFocus?: boolean;
  debounceMs?: number;
  suggestions?: string[];
  loading?: boolean;
}

/**
 * NavbarProps - Props del componente Navbar
 */
export interface NavbarProps {
  items: NavItem[];
  logo?: ReactNode;
  actions?: ReactNode;
  fixed?: boolean;
  transparent?: boolean;
  currentPath?: string;
}

/**
 * NavItem - Item de navegación
 */
export interface NavItem {
  label: string;
  href: string;
  icon?: ReactNode;
  badge?: string;
  children?: NavItem[];
  external?: boolean;
}

/**
 * FooterProps - Props del componente Footer
 */
export interface FooterProps {
  sections?: FooterSection[];
  socialLinks?: SocialLink[];
  copyright?: string;
  logo?: ReactNode;
}

/**
 * FooterSection - Sección del footer
 */
export interface FooterSection {
  title: string;
  links: FooterLink[];
}

/**
 * FooterLink - Link del footer
 */
export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

/**
 * SocialLink - Link de red social
 */
export interface SocialLink {
  platform: 'twitter' | 'linkedin' | 'github' | 'instagram' | 'facebook' | 'youtube';
  href: string;
  icon?: ReactNode;
}

/**
 * SidebarProps - Props del componente Sidebar
 */
export interface SidebarProps {
  categories?: Category[];
  popularPosts?: Post[];
  recentPosts?: Post[];
  tags?: Tag[];
  newsletter?: boolean;
  sticky?: boolean;
  className?: string;
}

/**
 * ArticleCardProps - Props del componente ArticleCard
 */
export interface ArticleCardProps {
  post: Post;
  variant?: 'default' | 'horizontal' | 'minimal' | 'featured';
  showExcerpt?: boolean;
  showAuthor?: boolean;
  showDate?: boolean;
  showCategory?: boolean;
  showTags?: boolean;
  showReadTime?: boolean;
  imageAspect?: 'square' | 'video' | 'wide';
  onClick?: (post: Post) => void;
}

/**
 * AuthorCardProps - Props del componente AuthorCard
 */
export interface AuthorCardProps {
  author: Author;
  variant?: 'default' | 'minimal' | 'detailed';
  showBio?: boolean;
  showSocial?: boolean;
  showStats?: boolean;
  onClick?: (author: Author) => void;
}

/**
 * NewsletterProps - Props del componente Newsletter
 */
export interface NewsletterProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  variant?: 'default' | 'inline' | 'sidebar';
  onSubmit?: (email: string) => Promise<void>;
  successMessage?: string;
  errorMessage?: string;
}

/**
 * CategoryFilterProps - Props del componente CategoryFilter
 */
export interface CategoryFilterProps {
  categories: Category[];
  selected?: string | string[];
  multiSelect?: boolean;
  showAll?: boolean;
  allLabel?: string;
  onChange?: (selected: string | string[]) => void;
  variant?: 'buttons' | 'dropdown' | 'pills';
}

/**
 * PaginationProps - Props del componente Pagination
 */
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  maxVisible?: number;
  size?: Size;
}

/**
 * ModalProps - Props del componente Modal
 */
export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  size?: Size;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  footer?: ReactNode;
}

/**
 * ToastProps - Props del componente Toast
 */
export interface ToastProps {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  description?: string;
  duration?: number;
  onClose?: () => void;
  action?: {
    label: string;
    onClick: () => void;
  };
}

/**
 * BreadcrumbProps - Props del componente Breadcrumb
 */
export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: ReactNode;
  maxItems?: number;
  className?: string;
}

/**
 * BreadcrumbItem - Item del breadcrumb
 */
export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: ReactNode;
  current?: boolean;
}

/**
 * TabsProps - Props del componente Tabs
 */
export interface TabsProps {
  items: TabItem[];
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  variant?: 'default' | 'pills' | 'underline';
  fullWidth?: boolean;
}

/**
 * TabItem - Item de tab
 */
export interface TabItem {
  value: string;
  label: string;
  icon?: ReactNode;
  content: ReactNode;
  disabled?: boolean;
  badge?: string | number;
}

/**
 * SkeletonProps - Props del componente Skeleton
 */
export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  circle?: boolean;
  count?: number;
  baseColor?: string;
  highlightColor?: string;
}

/**
 * LoaderProps - Props del componente Loader
 */
export interface LoaderProps {
  size?: Size;
  color?: Color;
  variant?: 'spinner' | 'dots' | 'pulse';
  fullScreen?: boolean;
  text?: string;
}

/**
 * EmptyStateProps - Props del componente EmptyState
 */
export interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
  illustration?: ReactNode;
}
