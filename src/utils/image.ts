/**
 * @file src/utils/image.ts
 * @description Utilidades para manejo de imágenes
 */

export function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

export async function getImageDimensions(src: string): Promise<{ width: number; height: number }> {
  const img = await loadImage(src);
  return { width: img.width, height: img.height };
}

export function generatePlaceholder(width: number, height: number, color: string = '#f0f0f0'): string {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'%3E%3Crect width='${width}' height='${height}' fill='${encodeURIComponent(color)}'/%3E%3C/svg%3E`;
}

export function optimizeImageUrl(url: string, width?: number, quality?: number): string {
  // Para Cloudinary, Imgix u otros servicios CDN
  // Ajustar según el servicio que uses
  try {
    const urlObj = new URL(url);
    if (width) urlObj.searchParams.set('w', width.toString());
    if (quality) urlObj.searchParams.set('q', quality.toString());
    return urlObj.toString();
  } catch {
    return url;
  }
}
