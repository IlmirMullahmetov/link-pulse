import { Button, ButtonVariant, TypeButton } from "./Button";

type ButtonProps = Omit<TypeButton, 'variant'>

export const PrimaryButton = (props: ButtonProps) => {
    return (<Button {...props} variant={ButtonVariant.Primary}>{props.children}</Button>)
}

export const SecondaryButton = (props: ButtonProps) => {
    return (<Button {...props} variant={ButtonVariant.Secondary}>{props.children}</Button>)
}

export const NegativeButton = (props: ButtonProps) => {
    return (<Button {...props} variant={ButtonVariant.Negative}>{props.children}</Button>)
}