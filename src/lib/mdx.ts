// src/lib/mdx.ts
/**
 * Utilidades para MDX y Markdown en MoviliaX
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { calculateReadTime } from './format';

export interface PostMetadata {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image?: string;
  category: string;
  tags?: string[];
  draft?: boolean;
  slug: string;
  readTime?: number;
}

export interface Post extends PostMetadata {
  content: string;
}

/**
 * Obtiene todos los posts de una carpeta
 */
export function getAllPosts(directory = 'content/posts'): Post[] {
  const postsDirectory = path.join(process.cwd(), directory);
  
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx?$/, '');
      return getPostBySlug(slug, directory);
    })
    .filter((post): post is Post => post !== null && !post.draft);

  // Ordenar por fecha (más recientes primero)
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

/**
 * Obtiene un post por su slug
 */
export function getPostBySlug(
  slug: string, 
  directory = 'content/posts'
): Post | null {
  try {
    const postsDirectory = path.join(process.cwd(), directory);
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    // Intentar con .md primero, luego con .mdx
    let fileContents: string;
    try {
      fileContents = fs.readFileSync(fullPath, 'utf8');
    } catch {
      const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
      fileContents = fs.readFileSync(mdxPath, 'utf8');
    }

    const { data, content } = matter(fileContents);
    
    const readTime = calculateReadTime(content);

    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      author: data.author || '',
      excerpt: data.excerpt || '',
      image: data.image,
      category: data.category || '',
      tags: data.tags || [],
      draft: data.draft || false,
      content,
      readTime,
    };
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}

/**
 * Obtiene posts por categoría
 */
export function getPostsByCategory(category: string): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter(
    post => post.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Obtiene posts por tag
 */
export function getPostsByTag(tag: string): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter(
    post => post.tags?.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Obtiene posts por autor
 */
export function getPostsByAuthor(author: string): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter(
    post => post.author.toLowerCase() === author.toLowerCase()
  );
}

/**
 * Obtiene todas las categorías únicas
 */
export function getAllCategories(): { name: string; count: number }[] {
  const allPosts = getAllPosts();
  const categoryMap = new Map<string, number>();

  allPosts.forEach(post => {
    const count = categoryMap.get(post.category) || 0;
    categoryMap.set(post.category, count + 1);
  });

  return Array.from(categoryMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

/**
 * Obtiene todos los tags únicos
 */
export function getAllTags(): { name: string; count: number }[] {
  const allPosts = getAllPosts();
  const tagMap = new Map<string, number>();

  allPosts.forEach(post => {
    post.tags?.forEach(tag => {
      const count = tagMap.get(tag) || 0;
      tagMap.set(tag, count + 1);
    });
  });

  return Array.from(tagMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

/**
 * Obtiene posts relacionados basados en tags y categoría
 */
export function getRelatedPosts(post: Post, limit = 3): Post[] {
  const allPosts = getAllPosts().filter(p => p.slug !== post.slug);

  // Calcular score de similitud
  const postsWithScore = allPosts.map(p => {
    let score = 0;

    // Misma categoría = +3 puntos
    if (p.category === post.category) score += 3;

    // Tags en común = +1 punto por tag
    const commonTags = p.tags?.filter(tag => post.tags?.includes(tag)) || [];
    score += commonTags.length;

    return { post: p, score };
  });

  // Ordenar por score y tomar los primeros
  return postsWithScore
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);
}

/**
 * Busca posts por texto
 */
export function searchPosts(query: string): Post[] {
  const allPosts = getAllPosts();
  const lowerQuery = query.toLowerCase();

  return allPosts.filter(post => {
    const searchableText = `
      ${post.title} 
      ${post.excerpt} 
      ${post.category} 
      ${post.tags?.join(' ')} 
      ${post.content}
    `.toLowerCase();

    return searchableText.includes(lowerQuery);
  });
}

/**
 * Obtiene los posts más recientes
 */
export function getRecentPosts(limit = 5): Post[] {
  const allPosts = getAllPosts();
  return allPosts.slice(0, limit);
}

/**
 * Obtiene estadísticas del blog
 */
export function getBlogStats() {
  const allPosts = getAllPosts();
  const categories = getAllCategories();
  const tags = getAllTags();

  return {
    totalPosts: allPosts.length,
    totalCategories: categories.length,
    totalTags: tags.length,
    totalWords: allPosts.reduce(
      (acc, post) => acc + post.content.split(/\s+/).length,
      0
    ),
    averageReadTime: Math.round(
      allPosts.reduce((acc, post) => acc + (post.readTime || 0), 0) / allPosts.length
    ),
  };
}
