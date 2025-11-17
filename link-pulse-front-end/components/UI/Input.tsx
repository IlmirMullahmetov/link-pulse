'use client';

import { forwardRef } from 'react';
import { Input as BaseInput } from '@base-ui-components/react/input';

interface InputProps {
  placeholder: string;
  className?: string;
  id: string;
  state?: 'error' | 'success';
  type?: string;
  disabled?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, className, type = 'text', disabled, ...props }, ref) => {
    return (
      <BaseInput
        ref={ref}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={`global-border h-8 w-full max-w-64 pl-1 text-(--color-primary) hover:bg-(--color-secondary) focus:bg-(--color-secondary) focus:outline ${className ?? ''}`}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
