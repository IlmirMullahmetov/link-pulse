import { ButtonHTMLAttributes, PropsWithChildren } from "react"
import styles from './Button.module.css';

export enum ButtonVariant {
	Primary,
	Secondary,
	Negative,
}

export type TypeButton = ButtonHTMLAttributes<HTMLButtonElement> & { variant: ButtonVariant }
export function Button({
	variant,
	disabled,
	children,
	className,
	...rest
}: PropsWithChildren<TypeButton>) {
	
	const getButtonVariantClassName = (variant: ButtonVariant) => {
    switch (variant) {
      case ButtonVariant.Primary: return `${styles.button} ${styles['primary-button']}`;
      case ButtonVariant.Secondary: return `${styles.button} ${styles['secondary-button']}`;
      case ButtonVariant.Negative: return `${styles.button} ${styles['negative-button']}`;
    }
  }

	return (
		<button

			className={`cursor-pointer bg-(--background) flex justify-center px-6 py-2 font-bold uppercase border-2 rounded-lg transition-colors duration-300 ${getButtonVariantClassName(variant)} ${className}`}
			{...rest}
		>
			{children}
		</button>)
}

