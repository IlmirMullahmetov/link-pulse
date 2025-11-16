interface HeadingProps {
    title: string;
    className?: string;
}
export const Heading = ({title, className}: HeadingProps) => {
    return (
        <h1 className={`text-3xl font-medium ${className}`}>{title}</h1>
    )
}