// src/components/features/AuthorCard.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '../common/Card';

interface AuthorCardProps {
  slug: string;
  name: string;
  bio: string;
  avatar?: string;
  role?: string;
  articlesCount?: number;
  social?: {
    twitter?: string;
    linkedin?: string;
  };
}

export const AuthorCard: React.FC<AuthorCardProps> = ({
  slug,
  name,
  bio,
  avatar,
  role,
  articlesCount = 0,
  social,
}) => {
  return (
    <Card hover className="text-center">
      <Link href={`/autores/${slug}`}>
        {/* Avatar */}
        <div className="flex justify-center mb-4">
          {avatar ? (
            <Image
              src={avatar}
              alt={name}
              width={96}
              height={96}
              className="rounded-full object-cover"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-3xl font-bold text-blue-600">
                {name.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
        </div>

        {/* Nombre y Role */}
        <h3 className="text-xl font-bold text-gray-900 mb-1 hover:text-blue-600 transition">
          {name}
        </h3>
        {role && <p className="text-sm text-gray-500 mb-3">{role}</p>}

        {/* Bio */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{bio}</p>

        {/* Estadísticas */}
        <div className="border-t pt-4 mb-4">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-blue-600">{articlesCount}</span> artículos
          </p>
        </div>

        {/* Social Links */}
        {social && (Object.keys(social).length > 0) && (
          <div className="flex justify-center space-x-3">
            {social.twitter && (
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-gray-400 hover:text-blue-600 transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            )}
          </div>
        )}
      </Link>
    </Card>
  );
};
