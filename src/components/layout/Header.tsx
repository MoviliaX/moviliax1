// src/components/layout/Header.tsx
import React from 'react';
import Link from 'next/link';
import { Logo } from '../common/Logo';
import { Navbar } from './Navbar';
import { SearchBar } from '../common/SearchBar';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`bg-white shadow-md sticky top-0 z-50 ${className}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <SearchBar placeholder="Buscar artículos, temas..." />
          </div>

          {/* Navigation */}
          <Navbar />
        </div>

        {/* Search Bar - Mobile */}
        <div className="md:hidden mt-4">
          <SearchBar placeholder="Buscar..." />
        </div>
      </div>
    </header>
  );
};
