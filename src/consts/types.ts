export interface CarCardsType {
  id: number
  owner: string
  brand: BrandType
  car_mileage: number
  car_year: number
  cost: number
  car_condition: string
  car_engine: number
  description: string
  transmission: string
  images: ImgCarType[]
}

export interface ImgCarType {
  car_cards_id: number
  link: string
}

export interface BrandType {
  car_cards_id: number
  car_name: string
  link: string
}

export interface CardType {
  index: number
  carCards: CarCardsType
}

export interface AboutUsTextType {
  id: number
  value: string
}

export interface ServicesType {
  id: number
  iconId: string
  value: string
  description: string
}

export interface InfoDataType {
  id: number
  title: string
  description: string
  className: string
}

export interface AboutServicesDataType {
  id: number
  iconSrc: string
  alt: string
  value: string
  description: string
}

export interface NewTestDataType {
  id: number
  car_year: number
  brand: string
  name: string
  model: string
  car_mileage: number
  cost: number
  color: string
  images: ImgCarType[]
  transmission: string
  wheel_drive: string
  engine: string
  tax: string
  custom: string
  condition: string
  body: string
  description_1: string
  description_2: string
  shortDescription: string
}

export interface CarServicesDataType {
  id: number
  icon: {
    iconId: string,
    viewBox: string,
    width: string,
    height: string,
  },
  value: string
  description: string
}

export interface ReportDataType {
  id: number
  icon: {
    iconId: string,
    viewBox: string,
    width: string,
    height: string,
  },
  value: string
  description?: string
}