/**
 * @file src/utils/dom.ts
 * @description Utilidades para manipulación del DOM
 */

/**
 * Scroll suave al inicio de la página
 */
export function scrollToTop(behavior: ScrollBehavior = 'smooth'): void {
  window.scrollTo({ top: 0, behavior });
}

/**
 * Scroll suave a un elemento
 */
export function scrollToElement(
  element: HTMLElement | string,
  options?: ScrollIntoViewOptions
): void {
  const el = typeof element === 'string' 
    ? document.querySelector(element) 
    : element;
  
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', ...options });
  }
}

/**
 * Obtiene la posición actual del scroll
 */
export function getScrollPosition(): { x: number; y: number } {
  return {
    x: window.pageXOffset || document.documentElement.scrollLeft,
    y: window.pageYOffset || document.documentElement.scrollTop,
  };
}

/**
 * Copia texto al portapapeles
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback para navegadores antiguos
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        document.execCommand('copy');
        textArea.remove();
        return true;
      } catch (error) {
        textArea.remove();
        return false;
      }
    }
  } catch (error) {
    return false;
  }
}

/**
 * Descarga un archivo
 */
export function downloadFile(
  data: string | Blob,
  filename: string,
  mimeType: string = 'text/plain'
): void {
  const blob = typeof data === 'string' 
    ? new Blob([data], { type: mimeType })
    : data;
  
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Obtiene el tamaño del viewport
 */
export function getViewportSize(): { width: number; height: number } {
  return {
    width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
    height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),
  };
}

/**
 * Verifica si un elemento está visible en el viewport
 */
export function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Agrega una clase a un elemento
 */
export function addClass(element: HTMLElement | string, className: string): void {
  const el = typeof element === 'string' 
    ? document.querySelector(element) 
    : element;
  
  if (el) {
    el.classList.add(className);
  }
}

/**
 * Remueve una clase de un elemento
 */
export function removeClass(element: HTMLElement | string, className: string): void {
  const el = typeof element === 'string' 
    ? document.querySelector(element) 
    : element;
  
  if (el) {
    el.classList.remove(className);
  }
}

/**
 * Toggle de una clase
 */
export function toggleClass(element: HTMLElement | string, className: string): void {
  const el = typeof element === 'string' 
    ? document.querySelector(element) 
    : element;
  
  if (el) {
    el.classList.toggle(className);
  }
}

/**
 * Verifica si un elemento tiene una clase
 */
export function hasClass(element: HTMLElement | string, className: string): boolean {
  const el = typeof element === 'string' 
    ? document.querySelector(element) 
    : element;
  
  return el ? el.classList.contains(className) : false;
}

/**
 * Obtiene el offset de un elemento respecto al documento
 */
export function getOffset(element: HTMLElement): { top: number; left: number } {
  const rect = element.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft,
  };
}

/**
 * Lockea el scroll de la página
 */
export function lockScroll(): void {
  document.body.style.overflow = 'hidden';
}

/**
 * Desbloquea el scroll de la página
 */
export function unlockScroll(): void {
  document.body.style.overflow = '';
}

/**
 * Obtiene todos los elementos padre
 */
export function getParents(element: HTMLElement): HTMLElement[] {
  const parents: HTMLElement[] = [];
  let current: HTMLElement | null = element.parentElement;
  
  while (current) {
    parents.push(current);
    current = current.parentElement;
  }
  
  return parents;
}

/**
 * Encuentra el elemento padre más cercano que coincida con un selector
 */
export function closest(element: HTMLElement, selector: string): HTMLElement | null {
  return element.closest(selector) as HTMLElement | null;
}

/**
 * Espera a que un elemento exista en el DOM
 */
export function waitForElement(
  selector: string,
  timeout: number = 5000
): Promise<Element> {
  return new Promise((resolve, reject) => {
    const element = document.querySelector(selector);
    
    if (element) {
      resolve(element);
      return;
    }
    
    const observer = new MutationObserver(() => {
      const element = document.querySelector(selector);
      if (element) {
        observer.disconnect();
        resolve(element);
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
    
    setTimeout(() => {
      observer.disconnect();
      reject(new Error(`Element ${selector} not found within ${timeout}ms`));
    }, timeout);
  });
}

/**
 * Observa cambios en un elemento
 */
export function observeElement(
  element: HTMLElement,
  callback: MutationCallback,
  options?: MutationObserverInit
): MutationObserver {
  const observer = new MutationObserver(callback);
  observer.observe(element, {
    childList: true,
    subtree: true,
    attributes: true,
    ...options,
  });
  return observer;
}

/**
 * Simula un click en un elemento
 */
export function simulateClick(element: HTMLElement): void {
  const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  element.dispatchEvent(event);
}

/**
 * Crea un elemento con atributos
 */
export function createElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attributes?: Record<string, string>,
  children?: (HTMLElement | string)[]
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tag);
  
  if (attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }
  
  if (children) {
    children.forEach(child => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else {
        element.appendChild(child);
      }
    });
  }
  
  return element;
}
