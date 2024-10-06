import {
    AboutServicesDataType,
    AboutUsTextType,
    CarCardsType, CarServicesDataType,
    InfoDataType,
    NewTestDataType, ReportDataType,
    ServicesType
} from './types'
import {z} from "zod";

export const testData: CarCardsType[] = [
    {
        id: 1,
        owner: 'Mark',
        brand: {car_cards_id: 1, car_name: 'Toyota Tacoma', link: 'toyota.png'},
        car_mileage: 12000,
        car_year: 2021,
        cost: 1231231,
        images: [{car_cards_id: 1, link: 'car1.png'}],
        car_condition: 'НОВАЯ',
        car_engine: 2.1,
        description: 'Хорошая машина как новая совсем, всем советую покупать на всю котлету',
        transmission: 'Робот',
    },
    {
        id: 2,
        owner: 'Mark',
        brand: {car_cards_id: 2, car_name: 'Audi Q3 2.0T Prestige', link: 'toyota.png'},
        car_mileage: 16000,
        car_year: 2021,
        cost: 45000,
        images: [{car_cards_id: 2, link: 'car2.png'}],
        car_condition: 'Б/У',
        car_engine: 1.6,
        description: 'Хорошая машина как новая совсем, всем советую покупать на всю котлету',
        transmission: 'Робот',
    },
    {
        id: 3,
        owner: 'Mark',
        brand: {car_cards_id: 3, car_name: 'Audi Q3 2.0T Prestige', link: 'toyota.png'},
        car_mileage: 12000,
        car_year: 2021,
        cost: 25000,
        images: [{car_cards_id: 3, link: 'car2.png'}],
        car_condition: 'НОВАЯ',
        car_engine: 2.1,
        description: 'Хорошая машина как новая совсем, всем советую покупать на всю котлету',
        transmission: 'Робот',
    },
    {
        id: 4,
        owner: 'Mark',
        brand: {car_cards_id: 1, car_name: 'Toyota Tacoma', link: 'toyota.png'},
        car_mileage: 12000,
        car_year: 2021,
        cost: 1231231,
        images: [{car_cards_id: 1, link: 'car1.png'}],
        car_condition: 'НОВАЯ',
        car_engine: 2.1,
        description: 'Хорошая машина как новая совсем, всем советую покупать на всю котлету',
        transmission: 'Робот',
    },
    {
        id: 5,
        owner: 'Mark',
        brand: {car_cards_id: 2, car_name: 'Audi Q3 2.0T Prestige', link: 'toyota.png'},
        car_mileage: 16000,
        car_year: 2021,
        cost: 45000,
        images: [{car_cards_id: 2, link: 'car2.png'}],
        car_condition: 'Б/У',
        car_engine: 1.6,
        description: 'Хорошая машина как новая совсем, всем советую покупать на всю котлету',
        transmission: 'Робот',
    },
    {
        id: 6,
        owner: 'Mark',
        brand: {car_cards_id: 3, car_name: 'Audi Q3 2.0T Prestige', link: 'toyota.png'},
        car_mileage: 12000,
        car_year: 2021,
        cost: 25000,
        images: [{car_cards_id: 3, link: 'car2.png'}],
        car_condition: 'НОВАЯ',
        car_engine: 2.1,
        description: 'Хорошая машина как новая совсем, всем советую покупать на всю котлету',
        transmission: 'Робот',
    },
]

export const navigateValue = [
    {value: 'Главная', path: 'home'},
    {value: 'Процесс покупки', path: 'aboutUs'},
    {value: 'Стоимость доставки', path: 'services'},
    {value: 'Авто', path: 'carBox'},
]

export const aboutUsText: AboutUsTextType[] = [
    {id: 1, value: 'В каком техническом обслуживании нуждается автомобиль?'},
    {id: 2, value: 'Система контроля доступа зарядила электромобиль.'},
    {id: 3, value: 'Система контроля доступа заряда.'},
    {id: 4, value: 'Система контроля доступа заряда электромобиля.'},
    {id: 5, value: 'Система контроля доступа заряда электро.'},
]
export const servicesData: ServicesType[] = [
    {
        id: 1,
        iconId: 'price',
        value: 'Самые низкие цены',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 2,
        iconId: 'agreement',
        value: 'Работа по договору',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 3,
        iconId: 'cargo',
        value: 'Отслеживание груза',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 4,
        iconId: 'check',
        value: 'Отслеживание груза',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
]

export const infoData: InfoDataType[] = [
    {
        id: 1,
        title: 'Audi 2021 E-Tron 1',
        description: 'Мы предоставляем не только всю необходимую информацию о ходе транспортировки авто 1.',
        className: 'button1',
    },
    {
        id: 2,
        title: 'Audi 2021 E-Tron 2',
        description: 'Мы предоставляем не только всю необходимую информацию о ходе транспортировки авто 2.',
        className: 'button2',
    },
    {
        id: 3,
        title: 'Audi 2021 E-Tron 3',
        description: 'Мы предоставляем не только всю необходимую информацию о ходе транспортировки авто 3.',
        className: 'button3',
    },
    {
        id: 4,
        title: 'Audi 2021 E-Tron 4',
        description: 'Мы предоставляем не только всю необходимую информацию о ходе транспортировки авто 4.',
        className: 'button4',
    },
    {
        id: 5,
        title: 'Audi 2021 E-Tron 5',
        description: 'Мы предоставляем не только всю необходимую информацию о ходе транспортировки авто 5.',
        className: 'button5',
    },
]

export const aboutServicesData: AboutServicesDataType[] = [
    {
        id: 1,
        iconSrc: 'service1.png',
        alt: 'Сервис 1',
        value: 'Таможенный калькулятор',
        description:
            'Сделано многофункциональным',
    },
    {
        id: 2,
        iconSrc: 'service2.png',
        alt: 'Сервис 2',
        value: 'Таможенный калькулятор',
        description:
            'Сделано многофункциональным',
    },
    {
        id: 3,
        iconSrc: 'service3.png',
        alt: 'Сервис 3',
        value: 'Таможенный калькулятор',
        description:
            'Сделано многофункциональным',
    }
]

export const loginSchema = z.object({
    name: z.string().min(3).max(30),
    phone: z.string()
        .min(10, 'Phone number should have at least 10 digits')
        .max(15, 'Phone number should have at most 15 digits')
        .regex(/^\+?\d{10,15}$/, 'Invalid phone number format'),
});

export const newTestData: NewTestDataType[] = [
    {
        id: 1,
        car_year: 2017,
        brand: 'Audi',
        name: 'audiQ3',
        model: 'Q3 2.0T Prestige',
        car_mileage: 96300,
        cost: 29567,
        color: 'Синий',
        images: [
            {car_cards_id: 1, link: 'audiQ3_1.png'},
            {car_cards_id: 2, link: 'audiQ3_2.png'},
            {car_cards_id: 3, link: 'audiQ3_3.png'},
            {car_cards_id: 4, link: 'audiQ3_4.png'},
            {car_cards_id: 5, link: 'audiQ3_5.png'}
        ],
        transmission: 'Автоматическая',
        wheel_drive: 'Передний',
        engine: '1.5л / 131 л.с. / Дизель',
        tax: '4 585 ₽ / год',
        custom: 'Растаможен, нет ПТС',
        condition: 'Не требует ремонта',
        body: 'Внедорожник 5 дв.',
        description_1: 'Продается Citroen C5 Aircross в красивом белом перламутре. Машина пригнана с Германии. 2019 года выпуска, с пробегом 96 300 километров и 1 собственником в ПТС. Машина в богатой комплектации и с легендарным дизельным мотором с оригинальным пробегом по Европе.',
        description_2: 'Уважаемые покупатели, в связи с отменой льготного утиль.сбора остается совсем не много времени купить хороший автомобиль за хорошие деньги. Указ подписан, а это значит что машины станут дороже на 900 000 рублей. Кто не в курсе, почитайте новости, к сожалению это так.',
        shortDescription: 'The Audi Q3 subcompact crossover SUV debuted as a 2015 model, slotting below the compact Q5.',
    },
    {
        id: 2,
        car_year: 2017,
        brand: 'Audi',
        name: 'audiQ3',
        model: 'Q3 2.0T Prestige',
        car_mileage: 96300,
        cost: 29567,
        color: 'Синий',
        images: [
            {car_cards_id: 1, link: 'audiQ3_1.png'},
            {car_cards_id: 2, link: 'audiQ3_2.png'},
            {car_cards_id: 3, link: 'audiQ3_3.png'},
            {car_cards_id: 4, link: 'audiQ3_4.png'},
            {car_cards_id: 5, link: 'audiQ3_5.png'}
        ],
        transmission: 'Автоматическая',
        wheel_drive: 'Передний',
        engine: '1.5л / 131 л.с. / Дизель',
        tax: '4 585 ₽ / год',
        custom: 'Растаможен, нет ПТС',
        condition: 'Не требует ремонта',
        body: 'Внедорожник 5 дв.',
        description_1: 'Продается Citroen C5 Aircross в красивом белом перламутре. Машина пригнана с Германии. 2019 года выпуска, с пробегом 96 300 километров и 1 собственником в ПТС. Машина в богатой комплектации и с легендарным дизельным мотором с оригинальным пробегом по Европе.',
        description_2: 'Уважаемые покупатели, в связи с отменой льготного утиль.сбора остается совсем не много времени купить хороший автомобиль за хорошие деньги. Указ подписан, а это значит что машины станут дороже на 900 000 рублей. Кто не в курсе, почитайте новости, к сожалению это так.',
        shortDescription: 'The Audi Q3 subcompact crossover SUV debuted as a 2015 model, slotting below the compact Q5.',
    },
    {
        id: 3,
        car_year: 2017,
        brand: 'Audi',
        name: 'audiQ3',
        model: 'Q3 2.0T Prestige',
        car_mileage: 96300,
        cost: 29567,
        color: 'Синий',
        images: [
            {car_cards_id: 1, link: 'audiQ3_1.png'},
            {car_cards_id: 2, link: 'audiQ3_2.png'},
            {car_cards_id: 3, link: 'audiQ3_3.png'},
            {car_cards_id: 4, link: 'audiQ3_4.png'},
            {car_cards_id: 5, link: 'audiQ3_5.png'}
        ],
        transmission: 'Автоматическая',
        wheel_drive: 'Передний',
        engine: '1.5л / 131 л.с. / Дизель',
        tax: '4 585 ₽ / год',
        custom: 'Растаможен, нет ПТС',
        condition: 'Не требует ремонта',
        body: 'Внедорожник 5 дв.',
        description_1: 'Продается Citroen C5 Aircross в красивом белом перламутре. Машина пригнана с Германии. 2019 года выпуска, с пробегом 96 300 километров и 1 собственником в ПТС. Машина в богатой комплектации и с легендарным дизельным мотором с оригинальным пробегом по Европе.',
        description_2: 'Уважаемые покупатели, в связи с отменой льготного утиль.сбора остается совсем не много времени купить хороший автомобиль за хорошие деньги. Указ подписан, а это значит что машины станут дороже на 900 000 рублей. Кто не в курсе, почитайте новости, к сожалению это так.',
        shortDescription: 'The Audi Q3 subcompact crossover SUV debuted as a 2015 model, slotting below the compact Q5.',
    },
    {
        id: 4,
        car_year: 2017,
        brand: 'Audi',
        name: 'audiQ3',
        model: 'Q3 2.0T Prestige',
        car_mileage: 96300,
        cost: 29567,
        color: 'Синий',
        images: [
            {car_cards_id: 1, link: 'audiQ3_1.png'},
            {car_cards_id: 2, link: 'audiQ3_2.png'},
            {car_cards_id: 3, link: 'audiQ3_3.png'},
            {car_cards_id: 4, link: 'audiQ3_4.png'},
            {car_cards_id: 5, link: 'audiQ3_5.png'}
        ],
        transmission: 'Автоматическая',
        wheel_drive: 'Передний',
        engine: '1.5л / 131 л.с. / Дизель',
        tax: '4 585 ₽ / год',
        custom: 'Растаможен, нет ПТС',
        condition: 'Не требует ремонта',
        body: 'Внедорожник 5 дв.',
        description_1: 'Продается Citroen C5 Aircross в красивом белом перламутре. Машина пригнана с Германии. 2019 года выпуска, с пробегом 96 300 километров и 1 собственником в ПТС. Машина в богатой комплектации и с легендарным дизельным мотором с оригинальным пробегом по Европе.',
        description_2: 'Уважаемые покупатели, в связи с отменой льготного утиль.сбора остается совсем не много времени купить хороший автомобиль за хорошие деньги. Указ подписан, а это значит что машины станут дороже на 900 000 рублей. Кто не в курсе, почитайте новости, к сожалению это так.',
        shortDescription: 'The Audi Q3 subcompact crossover SUV debuted as a 2015 model, slotting below the compact Q5.',
    },
    {
        id: 5,
        car_year: 2017,
        brand: 'Audi',
        name: 'audiQ3',
        model: 'Q3 2.0T Prestige',
        car_mileage: 96300,
        cost: 29567,
        color: 'Синий',
        images: [
            {car_cards_id: 1, link: 'audiQ3_1.png'},
            {car_cards_id: 2, link: 'audiQ3_2.png'},
            {car_cards_id: 3, link: 'audiQ3_3.png'},
            {car_cards_id: 4, link: 'audiQ3_4.png'},
            {car_cards_id: 5, link: 'audiQ3_5.png'}
        ],
        transmission: 'Автоматическая',
        wheel_drive: 'Передний',
        engine: '1.5л / 131 л.с. / Дизель',
        tax: '4 585 ₽ / год',
        custom: 'Растаможен, нет ПТС',
        condition: 'Не требует ремонта',
        body: 'Внедорожник 5 дв.',
        description_1: 'Продается Citroen C5 Aircross в красивом белом перламутре. Машина пригнана с Германии. 2019 года выпуска, с пробегом 96 300 километров и 1 собственником в ПТС. Машина в богатой комплектации и с легендарным дизельным мотором с оригинальным пробегом по Европе.',
        description_2: 'Уважаемые покупатели, в связи с отменой льготного утиль.сбора остается совсем не много времени купить хороший автомобиль за хорошие деньги. Указ подписан, а это значит что машины станут дороже на 900 000 рублей. Кто не в курсе, почитайте новости, к сожалению это так.',
        shortDescription: 'The Audi Q3 subcompact crossover SUV debuted as a 2015 model, slotting below the compact Q5.',
    },
    {
        id: 6,
        car_year: 2017,
        brand: 'Audi',
        name: 'audiQ3',
        model: 'Q3 2.0T Prestige',
        car_mileage: 96300,
        cost: 29567,
        color: 'Синий',
        images: [
            {car_cards_id: 1, link: 'audiQ3_1.png'},
            {car_cards_id: 2, link: 'audiQ3_2.png'},
            {car_cards_id: 3, link: 'audiQ3_3.png'},
            {car_cards_id: 4, link: 'audiQ3_4.png'},
            {car_cards_id: 5, link: 'audiQ3_5.png'}
        ],
        transmission: 'Автоматическая',
        wheel_drive: 'Передний',
        engine: '1.5л / 131 л.с. / Дизель',
        tax: '4 585 ₽ / год',
        custom: 'Растаможен, нет ПТС',
        condition: 'Не требует ремонта',
        body: 'Внедорожник 5 дв.',
        description_1: 'Продается Citroen C5 Aircross в красивом белом перламутре. Машина пригнана с Германии. 2019 года выпуска, с пробегом 96 300 километров и 1 собственником в ПТС. Машина в богатой комплектации и с легендарным дизельным мотором с оригинальным пробегом по Европе.',
        description_2: 'Уважаемые покупатели, в связи с отменой льготного утиль.сбора остается совсем не много времени купить хороший автомобиль за хорошие деньги. Указ подписан, а это значит что машины станут дороже на 900 000 рублей. Кто не в курсе, почитайте новости, к сожалению это так.',
        shortDescription: 'The Audi Q3 subcompact crossover SUV debuted as a 2015 model, slotting below the compact Q5.',
    },
]


export const carServicesData: CarServicesDataType [] = [
    {
        id: 1,
        icon: {
            iconId: 'car_incident',
            viewBox: '0 0 20 19',
            width: '20',
            height: '19',
        },
        value: 'Проверка на ДТП',
        description: 'ДТП не найдены',
    },
    {
        id: 2,
        icon: {
            iconId: 'car_legal_check',
            viewBox: '0 0 20 18',
            width: '20',
            height: '18',
        },
        value: 'Юридическая проверка',
        description: 'Можно регистрировать, не в розыске',
    },
    {
        id: 3,
        icon: {
            iconId: 'car_check',
            viewBox: '0 0 20 20',
            width: '20',
            height: '20',
        },
        value: 'Техосмотры',
        description: 'Покажем ТО с описанием работ',
    },
    {
        id: 4,
        icon: {
            iconId: 'car_auction',
            viewBox: '0 0 21 21',
            width: '21',
            height: '21',
        },
        value: 'Участие в зарубежных аукционах',
        description: 'Проверим, участвовал ли автомобиль в зарубежных аукционах битых автомобилей',
    },
    {
        id: 5,
        icon: {
            iconId: 'car_mileage',
            viewBox: '0 0 20 20',
            width: '20',
            height: '20',
        },
        value: 'История пробега',
        description: 'Покажем историю пробегов автомобиля',
    },
    {
        id: 6,
        icon: {
            iconId: 'car_repair',
            viewBox: '0 0 18 20',
            width: '18',
            height: '20',
        },
        value: 'Расчет стоимости ремонта',
        description: 'Проверим наличие расчетов стоимости ремонта',
    }
]

export const reportData: ReportDataType[] = [
    {
        id: 1,
        icon: {
            iconId: 'commercial',
            viewBox: '0 0 31 27',
            width: '31',
            height: '27',
        },
        value: 'Коммерческое использование',
        description: 'Проверка на работу в такси и каршеринге',
    },
    {
        id: 2,
        icon: {
            iconId: 'announcement',
            viewBox: '0 0 32 30',
            width: '32',
            height: '30',
        },
        value: 'Объявления о продаже',
        description: 'Прошлые объявления о продаже автомобиля',
    },
    {
        id: 3,
        icon: {
            iconId: 'service_car',
            viewBox: '0 0 27 29',
            width: '27',
            height: '29',
        },
        value: 'Визиты в автосервис',
        description: 'Проверка на наличие ремонтных работ',
    },
    {
        id: 4,
        icon: {
            iconId: 'fines',
            viewBox: '0 0 24 30',
            width: '24',
            height: '30',
        },
        value: 'Штрафы',
        description: 'Все штрафы, в том числе, неоплаченные',
    },
    {
        id: 5,
        icon: {
            iconId: 'mileage_history',
            viewBox: '0 0 25 29',
            width: '25',
            height: '29',
        },
        value: 'История пробега',
        description: 'Покажем историю пробегов автомобиля',
    },
    {
        id: 6,
        icon: {
            iconId: 'dots',
            viewBox: '0 0 22 6',
            width: '22',
            height: '6',
        },
        value: 'И еще более 10 пунктов проверки',
    }
]