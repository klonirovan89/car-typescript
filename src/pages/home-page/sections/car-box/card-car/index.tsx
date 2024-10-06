import React from "react";
import clsx from "clsx";
import { Link } from 'react-router-dom';
import {CardType} from "../../../../../consts/types";
import {Icon, Image} from "../../../../../components";

import s from "../index.module.scss";


interface CardCarProps {
    data: CardType
}

export function CardCar({data}: Readonly<CardCarProps>) {
    const carData = data.carCards

    const formatNumber = (number: number) => {
        return number.toLocaleString('en-US');
    };

    return (
        <Link to={`/info/${carData.id}`} className={s.card}>
            <div className={s.car_img_card}>
                <Image className={s.img}
                       src={`/img/${carData.images[0].link}`}
                       alt={carData.images[0].link.split(".")[0]}/>

                <div className={clsx(s.condition, carData.car_condition === "НОВАЯ" ? s.new : s.pre_owned)}>
                    {carData.car_condition}
                </div>
                <div className={s.engine}>{carData.car_engine} л</div>
                <div className={s.cost}>$ {formatNumber(carData.cost)}</div>
            </div>
            <div className={s.info_box}>
                <div className={s.brand}>
                    <h2>
                        {carData.car_year + "  "}
                        {carData.brand.car_name}
                    </h2>
                    <Image className={s.logo_brand}
                           src={`/img/brand/${carData.brand.link}`}
                           alt={carData.brand.link.split(".")[0]}/>

                </div>
                <div className={s.description}>
                    {carData.description}
                </div>
                <div className={s.data}>
                    <div className={s.data_icon}>
                        <Icon iconId={'calendar'} height={'18'} width={'18'} viewBox={'0 0 18 18'}/>
                        {carData.car_year}
                    </div>
                    <div className={s.data_icon}>
                        <Icon iconId={'gear'} height={'17'} width={'17'} viewBox={'0 0 17 17'}/>
                        {carData.transmission}
                    </div>
                    <div className={s.data_icon}>
                        <Icon iconId={'speedometer'} height={'16'} width={'16'} viewBox={'0 0 16 16'}/>
                        {formatNumber(carData.car_mileage)}
                    </div>
                </div>
            </div>
        </Link>
    );
}