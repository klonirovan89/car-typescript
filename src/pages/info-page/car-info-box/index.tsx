import {NewTestDataType} from "../../../consts/types";
import React from "react";
import {Icon} from "../../../components";

import s from "./index.module.scss";

interface PropsType {
    car: NewTestDataType
}

export function CarInfoBox({car}: Readonly<PropsType>) {
    const formattedNumber = car.cost
        .toLocaleString('en-US', { style: 'currency', currency: 'USD' })
        .replace('$', '$ ');

    return (
        <div className={s.car_info_box_wrapper}>
            <div className={s.car_info_box_text}>
                <h3>{car.car_year + " " + car.brand + " " + car.model}</h3>
                <h5>{car.shortDescription}</h5>
                <h3 className={s.cost}>{formattedNumber}</h3>
            </div>
            <button className={s.car_info_box_btn}>
                <Icon iconId="question" viewBox={"0 0 17 17"} width={"17"} height={"17"}/>
                Подробнее в отчете
            </button>
            <div className={s.table}>
                <h3>Описание</h3>
                <div></div>
                <table>
                    <tbody>
                    <tr>
                        <th>Год</th>
                        <td>{car.car_year}</td>
                    </tr>
                    <tr>
                        <th>Марка</th>
                        <td>{car.brand}</td>
                    </tr>
                    <tr>
                        <th>Модель</th>
                        <td>{car.model}</td>
                    </tr>
                    <tr>
                        <th>Пробег</th>
                        <td>{car.car_mileage}</td>
                    </tr>
                    <tr>
                        <th>Цвет</th>
                        <td>{car.color}</td>
                    </tr>
                    <tr>
                        <th>Коробка</th>
                        <td>{car.transmission}</td>
                    </tr>
                    <tr>
                        <th>Привод</th>
                        <td>{car.wheel_drive}</td>
                    </tr>
                    <tr>
                        <th>Двигатель</th>
                        <td>{car.engine}</td>
                    </tr>
                    <tr>
                        <th>Налог</th>
                        <td>{car.tax}</td>
                    </tr>
                    <tr>
                        <th>Таможня</th>
                        <td>{car.custom}</td>
                    </tr>
                    <tr>
                        <th>Состояние</th>
                        <td>{car.condition}</td>
                    </tr>
                    <tr>
                        <th>Кузов</th>
                        <td>{car.body}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}