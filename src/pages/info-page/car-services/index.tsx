import s from "./index.module.scss";
import {Icon} from "../../../components";
import React from "react";
import {carServicesData} from "../../../consts/consts";


export function CarServices() {

    return (
        <div className={s.car_services}>
            {carServicesData.map((service) => (
                <div key={service.id} className={s.car_service}>
                    <Icon iconId={service.icon.iconId} viewBox={service.icon.viewBox} width={service.icon.width} height={service.icon.height} className={s.car_services_icon}/>
                    <div className={s.car_service_text}>
                        <h3>{service.value}</h3>
                        <h5>{service.description}</h5>
                    </div>
                </div>
            ))}
        </div>
    );
}