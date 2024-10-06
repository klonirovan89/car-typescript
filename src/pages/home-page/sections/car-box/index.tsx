import React, {useEffect, useState} from 'react';
import {CardsCars} from "./cards-cars";
import axios from "axios";
import { Element } from 'react-scroll'
import {CarCardsType} from "../../../../consts/types";
import {testData} from "../../../../consts";

import s from "./index.module.scss"

export function CarBox () {
    const [data, setData] = useState<CarCardsType[] | undefined>(testData);
    return (
        <Element name={'carBox'} className={s.car_box}>
            <div className={s.car_box_text}>
                <h4>Посмотрите наши автомобили в наличии</h4>
                <h3>Лучшие Автомобили На Рынке</h3>
                <h5>Мы предоставляем не только всю необходимую информацию о ходе транспортировки авто к месту
                    назначения, но и полное документальное сопровождение сделки и прозрачное ценообразование.</h5>
            </div>
            <CardsCars data={data}/>
        </Element>
);
}




