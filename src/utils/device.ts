/**
 * @file src/utils/device.ts
 * @description Utilidades para detección de dispositivos
 */

export function isMobile(): boolean {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export function isTablet(): boolean {
  if (typeof window === 'undefined') return false;
  return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(navigator.userAgent);
}

export function isDesktop(): boolean {
  return !isMobile() && !isTablet();
}

export function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

export function getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  if (isMobile()) return 'mobile';
  if (isTablet()) return 'tablet';
  return 'desktop';
}

export function getBrowserInfo(): { name: string; version: string } {
  if (typeof window === 'undefined') return { name: 'Unknown', version: '0' };
  
  const ua = navigator.userAgent;
  let name = 'Unknown';
  let version = '0';
  
  if (ua.indexOf('Firefox') > -1) {
    name = 'Firefox';
    version = ua.match(/Firefox\/(\d+\.\d+)/)?.[1] || '0';
  } else if (ua.indexOf('Chrome') > -1) {
    name = 'Chrome';
    version = ua.match(/Chrome\/(\d+\.\d+)/)?.[1] || '0';
  } else if (ua.indexOf('Safari') > -1) {
    name = 'Safari';
    version = ua.match(/Version\/(\d+\.\d+)/)?.[1] || '0';
  } else if (ua.indexOf('Edge') > -1) {
    name = 'Edge';
    version = ua.match(/Edge\/(\d+\.\d+)/)?.[1] || '0';
  }
  
  return { name, version };
}

export function getOSInfo(): { name: string; version: string } {
  if (typeof window === 'undefined') return { name: 'Unknown', version: '0' };
  
  const ua = navigator.userAgent;
  let name = 'Unknown';
  let version = '0';
  
  if (ua.indexOf('Win') > -1) name = 'Windows';
  if (ua.indexOf('Mac') > -1) name = 'macOS';
  if (ua.indexOf('Linux') > -1) name = 'Linux';
  if (ua.indexOf('Android') > -1) name = 'Android';
  if (ua.indexOf('iOS') > -1 || ua.indexOf('iPhone') > -1) name = 'iOS';
  
  return { name, version };
}
