interface ImageProps {
    className?: string
    src: string
    alt: string
    onClick?: () => void
}

export const Image = ({className, src, alt, onClick}: Readonly<ImageProps>) => {
    return (
        <button onClick={onClick}>
            <img className={className} src={src} alt={alt}/>
        </button>
    )
}
