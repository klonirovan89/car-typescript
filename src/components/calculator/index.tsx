import React, { useState } from 'react';
import axios from 'axios';

import s from "./index.module.scss"

interface RadioEngineProps {
    checked: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function RadioEngine ({ checked, onChange }: Readonly<RadioEngineProps>) {
    return (
        <ul>
            <div className={s.uk_form_label}>Тип двигателя</div>
    <li>
    <input
        id="f-option"
    className="uk-radio"
    type="radio"
    name="engine"
    value="0"
    checked={checked === '0'}
    onChange={onChange}
    />
    <label htmlFor="f-option">Топливо</label>
    </li>
    <li>
    <input
        id="s-option"
    className="uk-radio"
    type="radio"
    name="engine"
    value="1"
    checked={checked === '1'}
    onChange={onChange}
    />
    <label htmlFor="s-option">Электро</label>
        </li>
        </ul>
);
}

export function RadioFace ({ checked, onChange }: Readonly<RadioEngineProps>) {
    return (
        <ul>
            <div className="uk-form-label">Авто растамаживает</div>
    <li>
    <input
        id="b-option"
    className="uk-radio"
    type="radio"
    name="face"
    value="0"
    checked={checked === '0'}
    onChange={onChange}
    />
    <label htmlFor="b-option">Физ.лицо</label>
    </li>
    <li>
    <input
        id="a-option"
    className="uk-radio"
    type="radio"
    name="face"
    value="0"
    checked={checked === '1'}
    onChange={onChange}
    />
    <label htmlFor="a-option">Юр.лицо</label>
        </li>
        </ul>
);
}

export function Price ({ checked, onChange }: Readonly<RadioEngineProps>) {
    return (
        <>
            <label className="uk-form-label" htmlFor="price">
        Стоимость авто
    </label>
    <input
    placeholder="в евро"
    className={s.uk_input}
    type="number"
    min="1"
    name="price"
    id="price"
    required
    value={checked}
    onChange={onChange}
    />
    </>
);
}

export function RadioFuel ({ checked, onChange }: Readonly<RadioEngineProps>) {
    return (
        <ul>
            <div className="uk-form-label">Вид топлива</div>
    <li>
    <input
        id="q-option"
    className="uk-radio"
    type="radio"
    name="fuel"
    value="0"
    checked={checked === '0'}
    onChange={onChange}
    />
    <label htmlFor="q-option">Бензин</label>
    </li>
    <li>
    <input
        id="w-option"
    className="uk-radio"
    type="radio"
    name="fuel"
    value="1"
    checked={checked === '1'}
    onChange={onChange}
    />
    <label htmlFor="w-option">Дизель</label>
        </li>

        </ul>
);
}

export function Calculator () {
    const [data, setData] = useState<string | undefined>(undefined);
    const [formData, setFormData] = useState({
        year: '1',
        price: '',
        engine: '0',
        face: '0',
        volume: '',
        fuel: '0',
        discount: true,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const target = e.target as HTMLInputElement; // Утверждение типа для доступа к 'checked'
        const { name, value, type, checked } = target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData((prevData) => ({ ...prevData, [name]: newValue }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/calc-fee', formData);
            console.log('Данные успешно отправлены!');
            const carCards: string = response.data;
            console.log(carCards);
            setData(carCards);
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
        }
    };

    return (
        <section className={s.calc_section}>
            <div className={s.uk_card}>
                <div className={s.calc_uk_card}>
                    <h2 className="uk-text-center">Калькулятор на 2024 год</h2>
                    <form className={s.uk_form_stacked} onSubmit={handleSubmit}>
                        <div className={s.block_input}>
                            <label className="uk-form-label" htmlFor="year">
                                Возраст авто
                            </label>
                            <select className={s.uk_select} name="year" value={formData.year} onChange={handleChange}>
                                <option value="0">менее 3-х лет</option>
                                <option value="1">от 3-х до 5 лет</option>
                                <option value="2">более 5 лет</option>
                                <option value="3">более 7 лет</option>
                            </select>
                            <Price
                                checked={formData.price}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='block-radio'>
                            <RadioEngine
                                checked={formData.engine}
                                onChange={handleChange}
                            />
                            <RadioFace
                                checked={formData.face}
                                onChange={handleChange}
                            />
                            <RadioFuel
                                checked={formData.fuel}
                                onChange={handleChange}
                            />
                        </div>

                        {formData.engine === "0" && (
                            <>
                                <div className="uk-form-label">Объем, см³</div>
                                <input
                                    className={s.uk_input}
                                    type="number"
                                    min="1"
                                    name="volume"
                                    placeholder="напр. 2000"
                                    onChange={handleChange}/>
                            </>
                        )}
                        <div className="uk-margin uk-text-center">
                            <label>
                                <input
                                    id="calc_discount"
                                    className="uk-checkbox"
                                    name="discount"
                                    type="checkbox"
                                    checked={formData.discount}
                                    onChange={handleChange}/>
                                Таможенная льгота 50% (Указ №140)
                            </label>

                            <div className="uk-text-center">
                                <a href="#scroll_calc_rezult">
                                    <input
                                        id="calc_btn"
                                        title="Рассчитать таможенную пошлину на авто"
                                        className="uk-button"
                                        value="Рассчитать"
                                        type="submit"
                                    />
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
                <div className={s.calc_RB_info}>
                    <h4>Примечания:</h4>
                    <p>При итоговой калькуляции всех затрат применялся курс, установленный НБРБ на 03.27.2024 1 EUR =
                        2.9156 BYN и 1 USD = 2.7364 BYN.</p>
                    <p>Результаты расчетов в иностранных валютах указаны справочно, оплата производится в белорусских
                        рублях по курсу НБ РБ на день оплаты.</p>
                </div>
            </div>
            <div className={s.uk_resul_block}>
                {data === "Очень много платить придется я вам отвечаю" ? (
                    <div className={s.result_block}>
                        <h2>Результат расчета</h2>
                        <h3>РАСТАМОЖКА АВТО В БЕЛАРУСИ</h3>
                        <div className='result-table'>
                            <div>
                                <p>Стоимость авто</p>
                                <span>32</span>
                            </div>
                            <div>
                                <p>Таможенная пошлина</p>
                                <span>32</span>
                            </div>
                            <div>
                                <p>Утилизационный сбор</p>
                                <span>03</span>
                            </div>
                            <div>
                                <p>Таможенный сбор</p>
                                <span>03</span>
                            </div>
                        </div>
                        <div className='final-cost'>
                            <p>Итого</p>
                            <span>123</span>
                        </div>
                    </div>
                ) : (
                    <div className={s.result_block}>
                        <h2>Таможенный калькулятор авто</h2>
                        <h3>РАСТАМОЖКА АВТО В БЕЛАРУСИ</h3>
                        <div>
                            <span>01</span>
                            <p>Использует для расчетов только актуальные ставки таможенных пошлин на авто</p>
                        </div>
                        <div>
                            <span>02</span>
                            <p>Учитывает утилизационный сбор и другие обязательные госпошлины</p>
                        </div>
                        <div>
                            <span>03</span>
                            <p>Производит расчеты в иностранных валютах по актуальному курсу НБРБ</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
);
}

