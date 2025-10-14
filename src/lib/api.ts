// src/lib/api.ts
/**
 * Utilidades de API para MoviliaX
 */

import type { ApiResponse } from './types';

/**
 * Configuración base de la API
 */
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

/**
 * Cliente HTTP genérico
 */
async function fetcher<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.message || 'Error en la solicitud',
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error('API Error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Error desconocido',
    };
  }
}

/**
 * GET request
 */
export async function get<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  return fetcher<T>(endpoint, {
    method: 'GET',
    ...options,
  });
}

/**
 * POST request
 */
export async function post<T>(
  endpoint: string,
  data?: any,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  return fetcher<T>(endpoint, {
    method: 'POST',
    body: data ? JSON.stringify(data) : undefined,
    ...options,
  });
}

/**
 * PUT request
 */
export async function put<T>(
  endpoint: string,
  data?: any,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  return fetcher<T>(endpoint, {
    method: 'PUT',
    body: data ? JSON.stringify(data) : undefined,
    ...options,
  });
}

/**
 * DELETE request
 */
export async function del<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  return fetcher<T>(endpoint, {
    method: 'DELETE',
    ...options,
  });
}

/**
 * Suscripción a newsletter
 */
export async function subscribeToNewsletter(email: string): Promise<ApiResponse> {
  return post('/api/newsletter', { email });
}

/**
 * Enviar formulario de contacto
 */
export async function sendContactForm(data: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}): Promise<ApiResponse> {
  return post('/api/contact', data);
}

/**
 * Buscar posts
 */
export async function searchPosts(query: string): Promise<ApiResponse> {
  return get(`/api/search?q=${encodeURIComponent(query)}`);
}

/**
 * Obtener posts con paginación
 */
export async function getPosts(params?: {
  page?: number;
  pageSize?: number;
  category?: string;
  tag?: string;
  author?: string;
}): Promise<ApiResponse> {
  const searchParams = new URLSearchParams();
  
  if (params?.page) searchParams.set('page', params.page.toString());
  if (params?.pageSize) searchParams.set('pageSize', params.pageSize.toString());
  if (params?.category) searchParams.set('category', params.category);
  if (params?.tag) searchParams.set('tag', params.tag);
  if (params?.author) searchParams.set('author', params.author);

  const queryString = searchParams.toString();
  const endpoint = queryString ? `/api/posts?${queryString}` : '/api/posts';

  return get(endpoint);
}

/**
 * Obtener un post específico
 */
export async function getPost(slug: string): Promise<ApiResponse> {
  return get(`/api/posts/${slug}`);
}

/**
 * Incrementar vistas de un post
 */
export async function incrementPostViews(slug: string): Promise<ApiResponse> {
  return post(`/api/posts/${slug}/views`);
}

/**
 * Obtener posts relacionados
 */
export async function getRelatedPosts(slug: string, limit = 3): Promise<ApiResponse> {
  return get(`/api/posts/${slug}/related?limit=${limit}`);
}

/**
 * Manejo de errores de API
 */
export function handleApiError(error: any): string {
  if (error?.response?.data?.message) {
    return error.response.data.message;
  }
  if (error?.message) {
    return error.message;
  }
  return 'Ocurrió un error. Por favor intenta de nuevo.';
}

/**
 * Verificar si hay conexión a internet
 */
export function isOnline(): boolean {
  return typeof navigator !== 'undefined' ? navigator.onLine : true;
}

/**
 * Reintentar petición con backoff exponencial
 */
export async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxRetries = 3,
  delay = 1000
): Promise<T> {
  let lastError: any;

  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      if (i < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, i)));
      }
    }
  }

  throw lastError;
}
