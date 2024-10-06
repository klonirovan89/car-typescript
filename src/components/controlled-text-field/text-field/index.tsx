import React from 'react';
import clsx from "clsx";

import s from '../index.module.scss'

export interface TextFieldProps {
    variant?: string;
    placeholder?: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    error?: string;
    name?: string;
    rows?: number;
    isContact?: boolean;

    [key: string]: any;
}

export function TextField({
                              variant,
                              placeholder,
                              type = 'text',
                              value,
                              onChange,
                              error,
                              name,
                              rows,
                              isContact,
                              ...rest
                          }: Readonly<TextFieldProps>) {
    const CommonProps = {
        placeholder,
        value,
        onChange,
        name,
        ...rest
    };

    const classNames = clsx(isContact ? s.contact_input : s.input, variant && s[variant], error && s.input_error)

    return (
        <div className={s.textField}>
            {variant === 'textarea' ? (
                <textarea
                    className={isContact ? s.textarea_contact : s.textarea}
                    rows={rows ?? 4}
                    {...CommonProps}
                />
            ) : (
                <input
                    className={classNames}
                    type={type}
                    {...CommonProps}
                />
            )}
            <span className={s.error}>{error ?? ''}</span>
        </div>
    );
}
