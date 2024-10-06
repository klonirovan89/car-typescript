import React, { useMemo } from 'react'
import { useWindowSize } from 'react-use'
import { Element } from 'react-scroll'
import {servicesData} from "../../../../consts";
import {ServicesType} from "../../../../consts/types";
import {Icon} from "../../../../components";

import s from './index.module.scss'

export function Services() {
  const { width } = useWindowSize()
  const isMobile = useMemo(() => width <= 1020, [width])
  return (
    <Element name={'services'} className={s.services}>
      <div className={s.about_services}>
        <div className={s.about_services_container}>
          <div className={s.blue_text}>
            <p>Почему мы?</p>
            <div></div>
          </div>
          <h3>Удобные сервисы для покупки авто</h3>
        </div>
        {!isMobile &&
          <h4>Мы предоставляем не только всю необходимую информацию о ходе транспортировки авто к месту
            назначения, но и полное документальное сопровождение сделки и прозрачное ценообразование.</h4>
        }
      </div>
      <div className={s.services_group}>
        {servicesData.map((i: ServicesType) =>
          <div key={i.id} className={s.services_item}>
            <Icon iconId={i.iconId} height={'65'} width={'65'} viewBox={'0 0 65 65'} className={s.icon} />
            <h5>{i.value}</h5>
            <p>{i.description}</p>
            <a href="http://localhost:3000/" className={s.description_link}>
              <span>Читай больше</span>
              <Icon iconId={'arrow_up'} height={'16'} width={'16'} viewBox={'0 0 16 16'} />
            </a>
          </div>,
        )}
      </div>
      <div className={s.link_box}>
        <a href="http://localhost:3000/" className={s.link}>
          <span>Хочешь больше узнать о нас?</span>
          <span>Жми</span>
          <Icon iconId={'arrow_up'} height={'16'} width={'16'} viewBox={'0 0 16 16'} />
        </a>
      </div>
    </Element>
  )
}