// src/lib/seo.ts
/**
 * Utilidades de SEO para MoviliaX
 */

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

/**
 * Genera metadatos completos de SEO
 */
export function generateSEOMetadata(data: SEOMetadata) {
  const {
    title,
    description,
    keywords = [],
    image = '/og-image.jpg',
    url = '',
    type = 'website',
    author,
    publishedTime,
    modifiedTime,
    section,
    tags = [],
  } = data;

  const siteName = 'MoviliaX';
  const fullTitle = `${title} | ${siteName}`;
  const fullUrl = url ? `https://moviliax.com${url}` : 'https://moviliax.com';
  const fullImage = image.startsWith('http') ? image : `https://moviliax.com${image}`;

  return {
    // Metadatos básicos
    title: fullTitle,
    description,
    keywords: keywords.join(', '),

    // Open Graph
    openGraph: {
      type,
      title: fullTitle,
      description,
      url: fullUrl,
      siteName,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'es_MX',
      ...(type === 'article' && {
        article: {
          publishedTime,
          modifiedTime,
          author,
          section,
          tags,
        },
      }),
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImage],
      site: '@moviliax',
      creator: '@moviliax',
    },

    // Metadatos adicionales
    alternates: {
      canonical: fullUrl,
    },

    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Genera metadatos para un artículo
 */
export function generateArticleSEO(article: {
  title: string;
  excerpt: string;
  slug: string;
  image?: string;
  author: string;
  date: string;
  category: string;
  tags?: string[];
}) {
  return generateSEOMetadata({
    title: article.title,
    description: article.excerpt,
    url: `/posts/${article.slug}`,
    image: article.image,
    type: 'article',
    author: article.author,
    publishedTime: new Date(article.date).toISOString(),
    section: article.category,
    tags: article.tags,
  });
}

/**
 * Genera metadatos para la página de inicio
 */
export function generateHomeSEO() {
  return generateSEOMetadata({
    title: 'MoviliaX - Plataforma de Movilidad y Logística Digital',
    description:
      'Conocimiento experto sobre movilidad urbana, logística y tecnología de transporte en América Latina. Artículos, guías y análisis para profesionales del sector.',
    keywords: [
      'movilidad urbana',
      'logística',
      'transporte',
      'tecnología',
      'América Latina',
      'México',
      'supply chain',
    ],
    type: 'website',
  });
}

/**
 * Genera metadatos para página de categoría
 */
export function generateCategorySEO(category: {
  name: string;
  description: string;
  slug: string;
}) {
  return generateSEOMetadata({
    title: `${category.name} - MoviliaX`,
    description: category.description,
    url: `/categorias/${category.slug}`,
    type: 'website',
  });
}

/**
 * Genera metadatos para perfil de autor
 */
export function generateAuthorSEO(author: {
  name: string;
  bio: string;
  slug: string;
  avatar?: string;
}) {
  return generateSEOMetadata({
    title: `${author.name} - Autor en MoviliaX`,
    description: author.bio,
    url: `/autores/${author.slug}`,
    image: author.avatar,
    type: 'profile',
  });
}

/**
 * Genera JSON-LD para artículos (Structured Data)
 */
export function generateArticleJsonLd(article: {
  title: string;
  excerpt: string;
  slug: string;
  image?: string;
  author: {
    name: string;
    url?: string;
  };
  date: string;
  modifiedDate?: string;
  category: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.image
      ? `https://moviliax.com${article.image}`
      : 'https://moviliax.com/og-image.jpg',
    datePublished: new Date(article.date).toISOString(),
    dateModified: article.modifiedDate
      ? new Date(article.modifiedDate).toISOString()
      : new Date(article.date).toISOString(),
    author: {
      '@type': 'Person',
      name: article.author.name,
      url: article.author.url || `https://moviliax.com/autores/${article.author.name}`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'MoviliaX',
      logo: {
        '@type': 'ImageObject',
        url: 'https://moviliax.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://moviliax.com/posts/${article.slug}`,
    },
  };
}

/**
 * Genera JSON-LD para breadcrumbs
 */
export function generateBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://moviliax.com${item.url}`,
    })),
  };
}

/**
 * Genera JSON-LD para la organización
 */
export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MoviliaX',
    url: 'https://moviliax.com',
    logo: 'https://moviliax.com/logo.png',
    description:
      'Plataforma de conocimiento sobre movilidad y logística digital en América Latina',
    sameAs: [
      'https://twitter.com/moviliax',
      'https://linkedin.com/company/moviliax',
      'https://github.com/moviliax',
    ],
  };
}
