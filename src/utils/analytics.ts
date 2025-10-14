/**
 * @file src/utils/analytics.ts
 * @description Utilidades para analytics y tracking
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export function trackPageView(url: string, title?: string): void {
  if (typeof window.gtag === 'function') {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
      page_title: title,
    });
  }
}

export function trackEvent(
  eventName: string,
  eventParams?: Record<string, any>
): void {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  }
}

export function trackError(error: Error, context?: Record<string, any>): void {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'exception', {
      description: error.message,
      fatal: false,
      ...context,
    });
  }
}

export function identifyUser(userId: string, userProperties?: Record<string, any>): void {
  if (typeof window.gtag === 'function') {
    window.gtag('set', 'user_properties', {
      user_id: userId,
      ...userProperties,
    });
  }
}
