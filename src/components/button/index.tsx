import clsx from "clsx";

import s from './index.module.scss'

interface ButtonProps {
    value: string;
    className?: string;
    onClick?: () => void;
    type?: 'submit';
    fullWidth?: boolean;
    variant?: 'link' | 'primary' | 'primary2' | 'pure' | 'active' | 'dark' ;
}

export function Button ({value, className, onClick, type, variant, fullWidth}: Readonly<ButtonProps>) {
    const classNames = clsx(s.btn, variant && s[variant], fullWidth && s.fullWidth, className)

    return (
        <button className={classNames} onClick={onClick} type={type}>
        {value}
        </button>
);
}

   