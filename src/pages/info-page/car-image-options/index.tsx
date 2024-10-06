import {Icon} from "../../../components";

import s from "./index.module.scss";

export function CarImageOptions() {

    return (
        <div className={s.car_options_wrapper}>
            <div className={s.car_options_container}>
                <div className={s.car_option}>
                    <Icon iconId='car_arrows' width={'17'} height={'17'} viewBox={'0 0 17 17'}/>
                    <h3>Сравнить</h3>
                </div>
                <div className={s.car_option}>
                    <Icon iconId='car_print' width={'17'} height={'17'} viewBox={'0 0 14 14'}/>
                    <h3>Печать</h3>
                </div>
            </div>
            <div className={s.car_option}>
                <h3>Поделиться</h3>
                <Icon iconId='car_share' width={'16'} height={'17'} viewBox={'0 0 16 17'}/>
            </div>
        </div>
    );
}