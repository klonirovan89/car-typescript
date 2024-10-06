import React from "react";
import {Button, FeedbackForm, Icon} from "../../../../components";

import s from "./index.module.scss";

export function Contact() {

    return (
        <div className={s.contact_wrapper}>
            <div className={s.contact}>
                <div className={s.contact_container}>
                    <div className={s.blue_text}>
                        <p>Свяжитесь с нами</p>
                        <div></div>
                    </div>
                    <h3>Лучшие Автомобили На Рынке</h3>
                    <h4>Мы предоставляем не только всю необходимую информацию о ходе транспортировки авто к
                        месту...</h4>
                    <Button value={'Свяжитесь с нами сейчас'} variant={'dark'} className={s.contact_btn}/>
                    <div className={s.contact_us_block}>
                        <div className={s.phone}>
                            <Icon iconId={'phone'} height={'43'} width={'43'} viewBox={'0 0 43 43'}/>
                        </div>
                        <div className={s.contact_info}>
                            <p>Есть вопросы? Звоните!</p>
                            <a href="tel:+375291212117">+375 29 12 12 117</a>
                        </div>
                    </div>
                </div>
                <FeedbackForm isOpen={true} isContact={true}/>
            </div>
        </div>
    );
}
