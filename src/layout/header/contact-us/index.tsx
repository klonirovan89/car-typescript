import React from "react";
import {Button} from "../../../components";
import {Question} from "../question";
import clsx from "clsx";

import s from '../index.module.scss'

interface ContactUsProps {
    onClick: () => void;
    className?: string;
    closeNavModal?: () => void;
}
export const ContactUs = ({onClick, className}: Readonly<ContactUsProps>) => {
    return (
        <div className={clsx(s.contact_us, className)}>
            <Button value="Связаться" onClick={onClick} variant={'primary'}/>
            <Question/>
        </div>
);
}
