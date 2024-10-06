import s from './index.module.scss'

export function Logo () {
    return (
        <a href="https://drive-hub.online/">
            <div className={s.logo} id="logo">
                <h1>DRIVE<span>HUB</span></h1>
                <h4>ПОКУПКА И ДОСТАВКА АВТОМОБИЛЕЙ</h4>
            </div>
        </a>
);
}