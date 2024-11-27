'use client';

import { HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  container?: boolean;
  background?: 'white' | 'gray' | 'blue' | 'dark';
}

const Section = ({ 
  children, 
  container = true,
  background = 'white',
  className,
  ...props 
}: SectionProps) => {
  const baseStyles = 'py-16 md:py-24';
  
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50 border-y border-gray-100',
    blue: 'bg-blue-900 text-white',
    dark: 'bg-gray-900 text-white'
  };

  return (
    <section
      className={twMerge(
        baseStyles,
        backgrounds[background],
        className
      )}
      {...props}
    >
      {container ? (
        <div className="container mx-auto px-4">
          {children}
        </div>
      ) : children}
    </section>
  );
};

export default Section; 