import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import {z} from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {Icon} from '../icon';
import {Button} from "../button";
import {loginSchema} from "../../consts";
import {ControlledTextField} from "../controlled-text-field";
import {clsx} from "clsx";

import s from './index.module.scss';

export interface FeedbackFormProps {
    isOpen: boolean;
    handleContentClick?: (e: React.MouseEvent) => void;
    closeFormModal?: () => void;
    isContact?: boolean;
}

export interface FormSubmit {
    name: string,
    email?: string,
    phone: string,
    message?: string,
}

export type FormValues = z.infer<typeof loginSchema> ;
export interface ExtendedFormValues extends FormValues {
    email?: string;
    message?: string;
}
export function FeedbackForm({isOpen, handleContentClick, closeFormModal, isContact}: Readonly<FeedbackFormProps>) {
    const [submitted, setSubmitted] = useState(false);
    const form = useRef<HTMLFormElement>(null);

    const {
        control,
        formState: {errors},
        handleSubmit,
        reset,
        clearErrors,
    } = useForm<ExtendedFormValues>({
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            message: '',
        },
        resolver: zodResolver(loginSchema),
        mode: 'onChange',
    });

    const onSubmit = async (data: FormSubmit) => {
        setSubmitted(true);
        reset();
        try {
            await axios.post('/api/submit-form', data);
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
        } finally {
            setSubmitted(true);
        }
    };

    const closeModal = () => {
        closeFormModal && closeFormModal();
        setSubmitted(false);
    };

    useEffect(() => {
        if (isOpen) {
            clearErrors();
            reset();
        }
    }, [isOpen, clearErrors, reset]);
    return (
        <button className={clsx(isContact ? s.contact_login_box : s.login_box, isOpen && s.active, submitted && s.submitted)}
                onClick={handleContentClick}>
            {submitted ? (
                <div className={s.message_box}>
                    <Icon iconId={'ok'} height={'71'} width={'71'} viewBox={'0 0 80 80'}/>
                    <div className={s.message}>
                        <h1>Спасибо за обращение!</h1>
                        <span>Ваша заявка принята, мы вскоре с вами свяжемся</span>
                        <Button value={'Закрыть'} onClick={closeModal} variant={'primary2'} className={s.submit_btn}/>
                    </div>
                </div>
            ) : (
                <form ref={form} onSubmit={handleSubmit(onSubmit)} noValidate>
                    <button className={s.cross} onClick={closeModal}></button>
                    <div className={s.user_box}>
                        <h1 className={s.title_form}>Мы с вами свяжемся</h1>
                        <ControlledTextField
                            control={control}
                            errorMessage={errors.name?.message}
                            placeholder={'Ваше имя'}
                            name={'name'}
                            type={'text'}
                            isContact={isContact}
                        />
                        <ControlledTextField
                            control={control}
                            placeholder={'Email'}
                            name={'email'}
                            type={'email'}
                            isContact={isContact}
                        />
                        <ControlledTextField
                            control={control}
                            errorMessage={errors.phone?.message}
                            placeholder={'Ваш номер'}
                            name={'phone'}
                            type={'tel'}
                            isContact={isContact}
                        />
                        <ControlledTextField
                            control={control}
                            name={'message'}
                            placeholder={'Напишите сообщение...'}
                            variant={'textarea'}
                            isContact={isContact}
                        />
                        <Button value={'Отправить сообщение'} type="submit" variant={isContact ? 'dark' : 'primary2'} className={s.submit_btn}/>
                    </div>
                </form>
            )}
        </button>
    );
}
