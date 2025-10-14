/**
 * @file src/utils/index.ts
 * @description Exportaciones centralizadas de utilidades de MoviliaX
 */

// String utilities
export {
  truncateText,
  capitalizeFirst,
  toTitleCase,
  removeAccents,
  generateExcerpt,
  countWords,
  estimateReadTime,
  sanitizeFilename,
  generateRandomString,
} from './string';

// Array utilities
export {
  chunk,
  shuffle,
  unique,
  groupBy,
  sortBy,
  partition,
  intersection,
  difference,
  flatten,
  compact,
} from './array';

// Object utilities
export {
  deepClone,
  deepMerge,
  pick,
  omit,
  isEmpty,
  isEqual,
  flattenObject,
  unflattenObject,
} from './object';

// DOM utilities
export {
  scrollToTop,
  scrollToElement,
  getScrollPosition,
  copyToClipboard,
  downloadFile,
  getViewportSize,
  isInViewport,
  addClass,
  removeClass,
  toggleClass,
} from './dom';

// Storage utilities
export {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
  clearLocalStorage,
  setSessionStorage,
  getSessionStorage,
  removeSessionStorage,
  clearSessionStorage,
} from './storage';

// Cookie utilities
export {
  setCookie,
  getCookie,
  removeCookie,
  getAllCookies,
} from './cookies';

// File utilities
export {
  formatFileSize,
  getFileExtension,
  isValidFileType,
  readFileAsDataURL,
  readFileAsText,
  compressImage,
} from './file';

// Image utilities
export {
  loadImage,
  getImageDimensions,
  generatePlaceholder,
  optimizeImageUrl,
} from './image';

// Color utilities
export {
  hexToRgb,
  rgbToHex,
  isValidHexColor,
  adjustBrightness,
  getContrastColor,
} from './color';

// Analytics utilities
export {
  trackPageView,
  trackEvent,
  trackError,
  identifyUser,
} from './analytics';

// Error handling utilities
export {
  handleError,
  logError,
  ErrorBoundary,
} from './error';

// Performance utilities
export {
  debounce,
  throttle,
  measurePerformance,
  lazyLoad,
} from './performance';

// Device utilities
export {
  isMobile,
  isTablet,
  isDesktop,
  isTouchDevice,
  getDeviceType,
  getBrowserInfo,
  getOSInfo,
} from './device';

// Date utilities (complementarias a las de lib)
export {
  isWeekend,
  getDaysInMonth,
  getWeekNumber,
  addBusinessDays,
  isBusinessDay,
} from './date';

// URL utilities
export {
  buildUrl,
  parseQueryString,
  stringifyQueryParams,
  addQueryParams,
  removeQueryParams,
  isValidUrl,
} from './url';

// Math utilities
export {
  clamp,
  roundTo,
  randomInt,
  randomFloat,
  percentage,
  average,
} from './math';

// Validation utilities
export {
  isEmail,
  isUrl,
  isPhone,
  isCreditCard,
  isPostalCode,
} from './validation';
