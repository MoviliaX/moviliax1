// src/components/features/CategoryFilter.tsx
'use client';

import React from 'react';
import { Badge } from '../ui/Badge';

interface Category {
  slug: string;
  name: string;
  count?: number;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory?: string;
  onCategoryChange: (slug: string) => void;
  showAll?: boolean;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory = 'all',
  onCategoryChange,
  showAll = true,
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {showAll && (
        <button
          onClick={() => onCategoryChange('all')}
          className={`
            px-4 py-2 rounded-full text-sm font-medium transition
            ${selectedCategory === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }
          `}
        >
          Todas {categories.reduce((acc, cat) => acc + (cat.count || 0), 0) > 0 && 
            `(${categories.reduce((acc, cat) => acc + (cat.count || 0), 0)})`
          }
        </button>
      )}

      {categories.map((category) => (
        <button
          key={category.slug}
          onClick={() => onCategoryChange(category.slug)}
          className={`
            px-4 py-2 rounded-full text-sm font-medium transition
            ${selectedCategory === category.slug
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }
          `}
        >
          {category.name}
          {category.count !== undefined && category.count > 0 && (
            <span className="ml-1.5 opacity-75">({category.count})</span>
          )}
        </button>
      ))}
    </div>
  );
};
