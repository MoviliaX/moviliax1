// src/components/common/Logo.tsx
import React from 'react';
import Image from 'next/image';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'dark', 
  size = 'md',
  className = '' 
}) => {
  const sizeMap = {
    sm: { width: 120, height: 30 },
    md: { width: 160, height: 40 },
    lg: { width: 200, height: 50 },
  };

  const dimensions = sizeMap[size];

  return (
    <div className={`flex items-center ${className}`}>
      {/* Si tienes un logo en /public/logo.svg o logo.png */}
      {/* <Image 
        src={variant === 'light' ? '/logo-light.svg' : '/logo-dark.svg'}
        alt="MoviliaX"
        width={dimensions.width}
        height={dimensions.height}
        priority
      /> */}
      
      {/* Logo temporal de texto */}
      <div className="flex items-center space-x-2">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
          variant === 'light' ? 'bg-blue-400' : 'bg-blue-600'
        }`}>
          <span className="text-white font-bold text-xl">M</span>
        </div>
        <span className={`font-bold text-xl ${
          variant === 'light' ? 'text-white' : 'text-gray-900'
        }`}>
          MoviliaX
        </span>
      </div>
    </div>
  );
};
