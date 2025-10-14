/**
 * @file src/utils/cookies.ts
 * @description Utilidades para manejo de cookies
 */

export interface CookieOptions {
  expires?: number | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'Strict' | 'Lax' | 'None';
}

export function setCookie(name: string, value: string, options: CookieOptions = {}): void {
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  
  if (options.expires) {
    const expires = options.expires instanceof Date
      ? options.expires
      : new Date(Date.now() + options.expires * 24 * 60 * 60 * 1000);
    cookieString += `; expires=${expires.toUTCString()}`;
  }
  
  if (options.path) cookieString += `; path=${options.path}`;
  if (options.domain) cookieString += `; domain=${options.domain}`;
  if (options.secure) cookieString += '; secure';
  if (options.sameSite) cookieString += `; samesite=${options.sameSite}`;
  
  document.cookie = cookieString;
}

export function getCookie(name: string): string | null {
  const matches = document.cookie.match(
    new RegExp(`(?:^|; )${encodeURIComponent(name)}=([^;]*)`)
  );
  return matches ? decodeURIComponent(matches[1]) : null;
}

export function removeCookie(name: string, options: Pick<CookieOptions, 'path' | 'domain'> = {}): void {
  setCookie(name, '', { ...options, expires: new Date(0) });
}

export function getAllCookies(): Record<string, string> {
  return document.cookie.split('; ').reduce((cookies, cookie) => {
    const [name, value] = cookie.split('=');
    cookies[decodeURIComponent(name)] = decodeURIComponent(value);
    return cookies;
  }, {} as Record<string, string>);
}
