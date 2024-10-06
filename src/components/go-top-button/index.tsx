import React, {useEffect, useState} from 'react';
import {Icon} from "../icon";

import s from './index.module.scss'

export function GoTopButton() {
    const [showBtn, setShowBtn] = useState(false)

    const toggleVisibility = () => {
        if (window.scrollY > 200) {
            setShowBtn(true)
        } else {
            setShowBtn(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, [])

    return (
        <>
            {showBtn && (
                <button className={s.button}
                        onClick={scrollToTop}
                >
                    <Icon
                        className={s.arrow}
                        iconId={"arrow_top"}
                        width={'77'}
                        height={'77'}
                        viewBox={'0 0 77 77'}
                    />
                </button>
            )}
        </>
    )
}
