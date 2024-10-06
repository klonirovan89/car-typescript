import {useMemo} from "react";
import {useWindowSize} from "react-use";
import {Icon, Logo} from "../../components";

import s from './index.module.scss'

export function Footer() {
    const {width} = useWindowSize()
    const isMobile = useMemo(() => width > 582, [width])

    return (
        <footer className={s.footer}>
            <div className={s.footer_wrapper}>
                <Logo/>
                {isMobile &&
                    <div className={s.icons}>
                        <a href="https://www.youtube.com/" target={'_blank'}  rel="noreferrer">
                            <Icon iconId={'youtube'} height={'24'} width={'24'} viewBox={'0 0 24 24'}/>
                        </a>
                        <a href="https://www.telegram.org/" target={'_blank'}  rel="noreferrer">
                            <Icon iconId={'telegram'} height={'24'} width={'24'} viewBox={'0 0 24 24'}/>
                        </a>
                        <a href="https://www.vk.com/" target={'_blank'}  rel="noreferrer">
                            <Icon iconId={'vk'} height={'24'} width={'24'} viewBox={'0 0 24 24'}/>
                        </a>
                    </div>}
            </div>
        </footer>
    )
}
