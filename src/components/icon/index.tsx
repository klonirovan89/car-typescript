import React from 'react'
import iconSprite from './../../assets/img/icons-sprite.svg'

interface IconProps {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    className?: string
}

export function Icon({iconId, width, height, viewBox, className}: Readonly<IconProps>) {
    return (
        <svg
            className={className}
            width={width ?? '50'}
            height={height ?? '50'}
            viewBox={viewBox ?? '0 0 50 50'}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <use xlinkHref={`${iconSprite}#${iconId}`}/>
        </svg>
    )
}
