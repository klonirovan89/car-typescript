import { Element } from 'react-scroll'
import {aboutUsText} from "../../../../consts";
import {AboutUsTextType} from "../../../../consts/types";
import React from "react";
import {Icon, Image} from "../../../../components";

import s from './index.module.scss'

export function AboutUs() {
  return (
    <Element name={'aboutUs'} className={s.about_us}>
      <div className={s.pictures_about}>
        <Image className={s.about_us_img1} src="/img/image1.png" alt="Главная" />
        <Image className={s.about_us_img2} src="/img/image.png" alt="Главная" />
      </div>
      <div className={s.text_info}>
        <div className={s.blue_text}>
          <p>Добро пожаловать в DRIVE HUB</p>
          <div></div>
        </div>
        <h3>Мы Известны Своим Сервисом</h3>
        <div className={s.block_about}>
          <h4>Drive Hub - это самая привлекательная, креативная, современная компания премиум-класса
            автодилеров. </h4>
          <ul>
            {aboutUsText.map((i: AboutUsTextType) =>
              <li key={i.id}>
                <span><Icon iconId={'arrow'} height={'12'} width={'16'} viewBox={'0 0 16 12'} /></span>
                {i.value}
              </li>,
            )}
          </ul>
        </div>
        <a href="http://localhost:3000/" className={s.link}>
          <span>Хочешь больше узнать об этом?</span>
          <span>Жми</span>
          <Icon iconId={'arrow_up'} height={'16'} width={'16'} viewBox={'0 0 16 16'} />
        </a>
      </div>
    </Element>
  )
}