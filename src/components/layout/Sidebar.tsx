// src/components/layout/Sidebar.tsx
import React from 'react';
import Link from 'next/link';
import { Card } from '../common/Card';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  const categories = [
    { name: 'Movilidad Urbana', slug: 'movilidad-urbana', count: 24 },
    { name: 'Logística', slug: 'logistica', count: 18 },
    { name: 'Tecnología', slug: 'tecnologia', count: 32 },
    { name: 'Sostenibilidad', slug: 'sostenibilidad', count: 15 },
    { name: 'Innovación', slug: 'innovacion', count: 21 },
  ];

  const popularPosts = [
    { title: 'El futuro de la movilidad eléctrica en América Latina', slug: 'futuro-movilidad-electrica' },
    { title: 'Optimización de rutas con IA', slug: 'optimizacion-rutas-ia' },
    { title: 'Last Mile Delivery: Retos y soluciones', slug: 'last-mile-delivery' },
  ];

  return (
    <aside className={`space-y-6 ${className}`}>
      {/* Categorías */}
      <Card>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Categorías</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link
                href={`/categorias/${category.slug}`}
                className="flex items-center justify-between py-2 text-gray-700 hover:text-blue-600 transition"
              >
                <span>{category.name}</span>
                <span className="text-sm text-gray-500">({category.count})</span>
              </Link>
            </li>
          ))}
        </ul>
      </Card>

      {/* Posts Populares */}
      <Card>
        <h3 className="text-lg font-bold text-gray-900 mb-4">🔥 Posts Populares</h3>
        <ul className="space-y-3">
          {popularPosts.map((post, index) => (
            <li key={post.slug}>
              <Link
                href={`/posts/${post.slug}`}
                className="block group"
              >
                <div className="flex items-start space-x-3">
                  <span className="text-2xl font-bold text-blue-600 opacity-50">
                    {index + 1}
                  </span>
                  <p className="text-sm text-gray-700 group-hover:text-blue-600 transition line-clamp-2">
                    {post.title}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Card>

      {/* Tags */}
      <Card>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Etiquetas</h3>
        <div className="flex flex-wrap gap-2">
          {['Transporte', 'IA', 'Supply Chain', 'Ciudades Inteligentes', 'EV', 'Drones'].map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag.toLowerCase().replace(' ', '-')}`}
              className="px-3 py-1 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 text-sm rounded-full transition"
            >
              {tag}
            </Link>
          ))}
        </div>
      </Card>
    </aside>
  );
};
