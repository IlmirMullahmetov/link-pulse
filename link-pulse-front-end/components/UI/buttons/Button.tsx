import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styles from './Button.module.css';
import { Loader } from '../Loader';

export enum ButtonVariant {
  Primary,
  Secondary,
  Negative,
}

export type TypeButton = ButtonHTMLAttributes<HTMLButtonElement> & { variant: ButtonVariant; isLoading?: boolean };

export function Button({ variant, disabled, children, isLoading = false, className, ...rest }: PropsWithChildren<TypeButton>) {
  const getButtonVariantClassName = (variant: ButtonVariant) => {
    switch (variant) {
      case ButtonVariant.Primary:
        return `${styles.button} ${styles['primary-button']}`;
      case ButtonVariant.Secondary:
        return `${styles.button} ${styles['secondary-button']}`;
      case ButtonVariant.Negative:
        return `${styles.button} ${styles['negative-button']}`;
    }
  };
  const buttonClassName =
    'flex cursor-pointer justify-center rounded-lg border-2 bg-(--background) relative px-6 py-2 font-bold uppercase transition-all duration-300';
  return (
    <button
      className={`${buttonClassName} ${getButtonVariantClassName(variant)} ${className}`}
      {...rest}
      onClick={!isLoading ? rest.onClick : undefined}
      disabled={isLoading}
    >
      {isLoading ? (
        //TODO: fix Loader sized
        <div className='flex h-7 items-center justify-center'>
          <Loader height={40} />
        </div>
      ) : (
        children
      )}
    </button>
  );
}
