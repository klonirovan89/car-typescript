import React, {useEffect, useState} from 'react';
import {CardsCars} from "./cards-cars";
import axios from "axios";
import { Element } from 'react-scroll'
import {CarCardsType} from "../../../../consts/types";
import {testData} from "../../../../consts";

import s from "./index.module.scss"

export function CarBox () {
    const [data, setData] = useState<CarCardsType[] | undefined>(undefined);


    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await axios.get("/api/car-cards");
            const carCards: CarCardsType[] = response.data;
            const shuffled = [...carCards].sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, 6);

            setData(selected);
        } catch (error) {
            setData(testData);
            console.error("Ошибка при получении данных: сервер недоступен", error);
        }
    }

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




