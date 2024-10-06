import React from "react";
import { Element } from "react-scroll";
import {Button} from "../../../../components";

import s from './index.module.scss'


export function Home () {
    return (
        <Element name={'home'} className={s.home}>
            <div className={s.home_data}>
                <h1>Покупка и доставка автомобилей</h1>
                <p>Поможем подобрать и купить авто из США, Европы, Южной Кореи и Китая на аукционе без посредников и
                    переплат</p>
                <div className={s.home_button}>
                    <Button value="Купить сейчас" variant={'active'}/>
                    <Button value="Подробнее" variant={'pure'}/>
                </div>
            </div>
        </Element>
);
}