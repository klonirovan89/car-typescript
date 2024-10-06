import {Icon} from '../icon';
import {clsx} from "clsx";

import s from './index.module.scss';
import React from "react";
import {reportData} from "../../consts/consts";


export interface ReportFormProps {
    isOpen: boolean;
    closeFormModal?: () => void;
}

export function ReportForm({isOpen, closeFormModal}: Readonly<ReportFormProps>) {
    return (
        <div className={s.wrapper}>
            <div className={clsx(s.report_box, isOpen && s.active)}>
                <div className={s.report_header}>
                    <div className={s.report_block}>
                        <Icon iconId={"ok_2"} viewBox={"0 0 52 52"} width={"52"} height={"52"}/>
                        <div className={s.report_block_1}>
                            <h4>ДТП не найдены</h4>
                            <h5>Нет подтверждённых аварий</h5>
                        </div>
                    </div>
                    <div className={s.report_block_2}>
                        <h5>Обновлено сегодня</h5>
                        <h5>По данным ГИБДД</h5>
                    </div>
                </div>
                <div className={s.report_body}>
                    <h3 className={s.report_title}>В полном отчете</h3>
                    <div className={s.report_car_services}>
                        {reportData.map((service) => (
                            <div key={service.id} className={s.report_car_service}>
                                <Icon iconId={service.icon.iconId} viewBox={service.icon.viewBox}
                                      width={service.icon.width} height={service.icon.height}
                                      className={s.report_car_services_icon}/>
                                <div className={s.report_car_service_text}>
                                    <h3>{service.value}</h3>
                                    {service.description && <h5>{service.description}</h5>}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className={s.report_btn} onClick={closeFormModal}>
                        Купить отчет от 78 ₽
                    </button>
                </div>
            </div>
            <Icon iconId={"cross"} viewBox={"0 0 18 18"} width={"18"} height={"18"} className={s.cross}/>
        </div>
    );
}
