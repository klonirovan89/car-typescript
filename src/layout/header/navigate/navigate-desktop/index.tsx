import React from "react";
import {ButtonFlip} from "../../button-flip";
import {navigateValue} from "../../../../consts";

import s from "../../index.module.scss";

export function NavigateDesktop() {
    return (
        <div className={s.navigate}>
            {navigateValue.map(i =>
                <ButtonFlip key={i.value} value={i.value} path={i.path}/>
            )}
        </div>
    );
}