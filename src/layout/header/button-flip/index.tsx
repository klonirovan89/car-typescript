import React, {useEffect} from 'react';
import {Link as ScrollLink, scroller} from 'react-scroll';
import {Link as RouterLink, useLocation} from 'react-router-dom';
import s from './../index.module.scss';

interface ButtonFlipProps {
    value: string;
    path: string;
    onClick?: () => void;
}

export function ButtonFlip({value, path, onClick}: Readonly<ButtonFlipProps>) {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.replace('#', '');

            scroller.scrollTo(sectionId, {
                smooth: true,
                offset: -80,
                duration: 500,
            });
        }
    }, [location.hash]);

    const isHomePage = location.pathname === '/home';

    return isHomePage ? (
        <ScrollLink
            className={s.btn_flip}
            activeClass={s.active}
            to={path}
            spy={true}
            offset={-80}
            duration={500}
            onClick={onClick}
        >
            {value}
        </ScrollLink>
    ) : (
        <RouterLink
            className={s.btn_flip}
            to={`/home#${path}`}
            onClick={onClick}
        >
            {value}
        </RouterLink>
    );
}
