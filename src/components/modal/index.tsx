import {ReactNode} from 'react';
import clsx from "clsx";

import s from "./index.module.scss";

interface ModalProps {
    children: ReactNode;
    isOpen: boolean;
    onClick?: () => void;
    className?: string;
}

export function Modal ({children, isOpen, onClick, className}: Readonly<ModalProps>) {
    return (
        <button className={clsx(s.modal, className, isOpen && s.active)} onClick={onClick}>
        {children}
        </button>
);
}
