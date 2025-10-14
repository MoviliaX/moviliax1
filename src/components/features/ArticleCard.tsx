// src/components/features/ArticleCard.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '../common/Card';
import { Badge } from '../ui/Badge';

interface ArticleCardProps {
  slug: string;
  title: string;
  excerpt: string;
  image?: string;
  author: {
    name: string;
    avatar?: string;
  };
  date: string;
  category: string;
  readTime?: number;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  slug,
  title,
  excerpt,
  image,
  author,
  date,
  category,
  readTime = 5,
}) => {
  const formattedDate = new Date(date).toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/posts/${slug}`}>
      <Card hover padding="none" className="overflow-hidden h-full">
        {/* Imagen del artículo */}
        {image && (
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
            <div className="absolute top-3 left-3">
              <Badge variant="primary">{category}</Badge>
            </div>
          </div>
        )}

        <div className="p-6">
          {/* Título */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>

          {/* Metadata */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              {author.avatar && (
                <Image
                  src={author.avatar}
                  alt={author.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              )}
              <span>{author.name}</span>
            </div>
            <div className="flex items-center space-x-3">
              <span>{formattedDate}</span>
              <span>•</span>
              <span>{readTime} min</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};
