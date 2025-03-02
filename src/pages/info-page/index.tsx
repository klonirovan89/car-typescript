import {useLocation, useParams} from 'react-router-dom';
import {newTestData, testData} from "../../consts";
import React, {useEffect, useState} from "react";
import {CarSlider} from "./car-slider";
import {CarInfoBox} from "./car-info-box";
import {GoTopButton, Modal} from "../../components";
import {CarServices} from "./car-services";
import {CardsCars} from "../home-page/sections/car-box/cards-cars";
import {CarCardsType} from "../../consts/types";
import {ReportForm} from "../../components/report-form";

import '../../styles/globalStyles.scss';
import s from "./index.module.scss";

export function InfoPage() {
    const {id} = useParams();
    const location = useLocation();
    const [data, setData] = useState<CarCardsType[] | undefined>(testData);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }, [location.pathname]);

    const car = newTestData.find(i => i.id === Number(id));

    return (
        <>
            <div className={s.container}>
                {car && (
                    <div className={s.info_page_wrapper}>
                        <div className={s.info_page}>
                            <CarSlider car={car}/>
                            <CarInfoBox car={car}/>
                        </div>
                        <CarServices/>
                        <button className={s.info_page_btn} onClick={() => setIsModalOpen(true)}>Купить отчет от 78 ₽
                        </button>
                        <div className={s.info_page_description}>
                            <h3>Комментарий продавца</h3>
                            <p>{car.description_1}</p>
                            <p>{car.description_2}</p>
                        </div>
                    </div>
                )}
                <div className={s.info_page_cars}>
                    <h3>Рекомендуем</h3>
                    <CardsCars data={data}/>
                </div>
            </div>
            <GoTopButton/>
            <Modal isOpen={isModalOpen} onClick={() => setIsModalOpen(false)} className={s.modal}>
                <ReportForm isOpen={isModalOpen} closeFormModal={() => setIsModalOpen(false)}/>
            </Modal>
        </>
    );
}
