/** @type {import('next').NextConfig} */
const nextConfig = {
  // ==================================
  // MOVILIAX - Next.js Configuration
  // ==================================

  // Modo de compilación
  reactStrictMode: true,
  swcMinify: true,

  // Output standalone para Docker
  output: 'standalone',

  // Imágenes optimizadas
  images: {
    domains: [
      'moviliax.lat',
      'pub-*.r2.dev', // Cloudflare R2
      'images.unsplash.com', // Si usas Unsplash
      'cdn.sanity.io', // Si usas Sanity
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Internacionalización
  i18n: {
    locales: ['es', 'es-MX', 'es-CO', 'es-AR', 'es-CL', 'pt-BR'],
    defaultLocale: 'es-MX',
    localeDetection: false,
  },

  // Headers de seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/articulos',
        permanent: true,
      },
      {
        source: '/articles',
        destination: '/articulos',
        permanent: true,
      },
    ];
  },

  // Rewrites (para API proxy si es necesario)
  async rewrites() {
    return [
      {
        source: '/api/cms/:path*',
        destination: `${process.env.STRAPI_URL || 'http://localhost:1337'}/api/:path*`,
      },
    ];
  },

  // Variables de entorno públicas
  env: {
    NEXT_PUBLIC_SITE_NAME: 'MoviliaX',
    NEXT_PUBLIC_SITE_DESCRIPTION: 'Movilidad y Logística Digital en América Latina',
  },

 // Webpack customization
  webpack: (config, { dev, isServer }) => {
    // SVG como componentes React
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Optimizaciones
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          commons: {
            name: 'commons',
            chunks: 'all',
            minChunks: 2,
          },
          lib: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // Validar que module.context existe
              if (!module.context) return 'npm.unknown';
              
              const match = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              );
              
              // Validar que el match fue exitoso
              if (!match || !match[1]) return 'npm.unknown';
              
              const packageName = match[1];
              return `npm.${packageName.replace('@', '')}`;
            },
          },
        },
      };
    }

    return config;
  },
    // Optimizaciones
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          commons: {
            name: 'commons',
            chunks: 'all',
            minChunks: 2,
          },
          lib: {
  test: /[\\/]node_modules[\\/]/,
  name(module) {
    // Validar que module.context existe
    if (!module.context) return 'npm.unknown';
    
    const match = module.context.match(
      /[\\/]node_modules[\\/](.*?)([\\/]|$)/
    );
    
    // Validar que el match fue exitoso
    if (!match || !match[1]) return 'npm.unknown';
    
    const packageName = match[1];
    return `npm.${packageName.replace('@', '')}`;
  },
},

    return config;
  },

  // Configuración experimental
  experimental: {
    // Optimistic client cache
    optimisticClientCache: true,
    // Server Actions
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },

  // Compilador
  compiler: {
    // Remover console.log en producción
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // PoweredByHeader
  poweredByHeader: false,

  // Compresión
  compress: true,

  // Generación de source maps
  productionBrowserSourceMaps: false,

  // ESLint durante build
  eslint: {
    ignoreDuringBuilds: false,
  },

  // TypeScript
  typescript: {
    ignoreBuildErrors: false,
  },
};

// Bundle analyzer (solo si ANALYZE=true)
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
