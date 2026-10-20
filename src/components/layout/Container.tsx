import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

/**
 * Global Container Component
 * Follows the layout standard: 11/12 of display size, horizontally centered.
 */
export default function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={cn('w-11/12 mx-auto', className)} {...props}>
      {children}
    </div>
  );
}

