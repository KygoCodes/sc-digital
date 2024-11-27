'use client';

import { HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'hover' | 'bordered';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card = ({ 
  children, 
  variant = 'default', 
  padding = 'md',
  className,
  ...props 
}: CardProps) => {
  const baseStyles = 'bg-white rounded-xl transition-all duration-200';
  
  const variants = {
    default: 'shadow-sm border border-gray-100',
    hover: 'shadow-sm hover:shadow-md border border-gray-100 hover:border-gray-200',
    bordered: 'border border-gray-200 hover:border-blue-900'
  };

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <div
      className={twMerge(
        baseStyles,
        variants[variant],
        paddings[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card; 