import React from "react";
import {AboutServicesDataType} from "../../../../consts/types";
import {Button, Image} from "../../../../components";
import {aboutServicesData} from "../../../../consts/consts";

import s from "./index.module.scss"

export function AboutServices() {
    return (
        <div className={s.about_services_wrapper}>
            <div className={s.services}>
                <div className={s.about_services}>
                    <div className={s.blue_text}>
                        <p>О наших услугах</p>
                        <div></div>
                    </div>
                    <h3>Лучшие Автомобили На Рынке</h3>
                    <h4>Мы предоставляем не только всю необходимую информацию о ходе транспортировки авто к
                        месту...</h4>
                    <Button value={'Больше наших сервисов'} variant={'dark'} className={s.about_services_btn}/>
                </div>
                {aboutServicesData.map((i: AboutServicesDataType) =>
                    <a href="http://localhost:3000/" key={i.id} className={s.about_services_item}>
                        <div className={s.service_img}>
                            <Image className={s.img} src={"/img/" + i.iconSrc} alt={i.alt}/>
                        </div>
                        <h5>{i.value}</h5>
                        <p>{i.description}</p>
                    </a>
                )}
            </div>
        </div>
    );
}