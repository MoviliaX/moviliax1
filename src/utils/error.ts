/**
 * @file src/utils/error.ts
 * @description Utilidades para manejo de errores
 */

import { Component, ReactNode } from 'react';

export function handleError(error: Error, context?: string): void {
  console.error(`Error${context ? ` in ${context}` : ''}:`, error);
  
  // Aquí puedes integrar con un servicio de error tracking como Sentry
  if (typeof window !== 'undefined' && (window as any).Sentry) {
    (window as any).Sentry.captureException(error);
  }
}

export function logError(message: string, error?: Error): void {
  console.error(message, error);
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any): void {
    handleError(error, 'ErrorBoundary');
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div>Algo salió mal. Por favor, recarga la página.</div>;
    }

    return this.props.children;
  }
}
