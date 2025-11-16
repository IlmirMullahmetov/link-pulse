'use client'

import { forwardRef } from 'react'
import { Input as BaseInput } from '@base-ui-components/react/input'

interface InputProps {
  placeholder: string
  className?: string
  id: string
  state?: 'error' | 'success'
  type?: string
  disabled?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, className, type = 'text', disabled, ...props }, ref) => {
    return (
      <BaseInput
        ref={ref}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={`h-8 w-full max-w-64 text-(--color-primary) global-border pl-1 focus:outline hover:bg-(--color-secondary) focus:bg-(--color-secondary) ${className ?? ''}`}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'