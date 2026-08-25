import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  textColor = 'text-[#2D3A33]',
  className = '',
}) => {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  const textMap = {
    sm: { title: 'text-base', sub: 'text-[9px]' },
    md: { title: 'text-xl', sub: 'text-[11px]' },
    lg: { title: 'text-2xl', sub: 'text-xs' },
    xl: { title: 'text-3xl', sub: 'text-sm' },
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* SVG Emblem mirroring Silen Kids logo with #9DB9A7 */}
      <div className={`relative ${sizeMap[size]} shrink-0 transition-transform duration-300 hover:rotate-12`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Circular frame background */}
          <circle cx="50" cy="50" r="48" fill="#ffffff" stroke="#9DB9A7" strokeWidth="2" />
          
          {/* Shutter Blade 1 - Primary Logo Color (#9DB9A7) */}
          <path
            d="M 50 4 C 74 4 94 23 96 47 C 82 43 68 45 57 53 C 54 36 60 18 50 4 Z"
            fill="#9DB9A7"
          />
          {/* Shutter Blade 2 - Deep Forest Sage (#3E604F) */}
          <path
            d="M 96 47 C 96 73 77 94 53 96 C 57 82 55 68 47 57 C 64 54 82 60 96 47 Z"
            fill="#3E604F"
          />
          {/* Shutter Blade 3 - Warm Sand Complementary (#D4A373) */}
          <path
            d="M 53 96 C 27 96 6 77 4 53 C 18 57 32 55 43 47 C 46 64 40 82 53 96 Z"
            fill="#D4A373"
          />
          {/* Shutter Blade 4 - Soft Sage (#9DB9A7) */}
          <path
            d="M 4 53 C 4 27 23 6 47 4 C 43 18 45 32 53 43 C 36 46 18 40 4 53 Z"
            fill="#8EA997"
          />
          
          {/* Central Stylized 'S' Ribbon */}
          <path
            d="M 42 22 C 55 14 66 22 66 32 C 66 42 46 45 42 55 C 38 65 48 76 60 72 C 48 82 34 76 34 65 C 34 54 54 50 58 42 C 62 34 52 26 42 22 Z"
            fill="#2D3A33"
          />
          
          {/* Center tiny dot */}
          <circle cx="50" cy="50" r="3.5" fill="#FFFFFF" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1.5 leading-none">
            <span className={`font-black tracking-wider uppercase font-sans ${textMap[size].title} ${textColor}`}>
              SILEN
            </span>
            <span className={`font-bold text-[#3E604F] uppercase font-sans ${textMap[size].title}`}>
              KIDS
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#9DB9A7] animate-pulse"></span>
          </div>
          <span className={`text-[#5A7366] font-medium tracking-tight mt-0.5 ${textMap[size].sub}`}>
            آتلیه تخصصی کودک، نوزاد و بارداری
          </span>
        </div>
      )}
    </div>
  );
};

