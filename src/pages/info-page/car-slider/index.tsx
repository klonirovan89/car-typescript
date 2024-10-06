import React, { useRef, useState } from 'react';
import { NewTestDataType } from '../../../consts/types';
import { Icon, Image } from '../../../components';
import Slider from 'react-slick';
import { clsx } from 'clsx';
import { CarImageOptions } from '../car-image-options';

import s from './index.module.scss';
interface PropsType {
    car: NewTestDataType;
}

export function CarSlider({ car }: Readonly<PropsType>) {
    const mainSliderRef = useRef<Slider>(null);
    const thumbnailsRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const mainSliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        autoplay: false,
        infinite: true,
        speed: 500,
        pauseOnHover: true,
    };

    const handleThumbnailClick = (index: number) => {
        if (mainSliderRef.current) {
            mainSliderRef.current.slickGoTo(index);
        }
        setActiveIndex(index);
    };

    const nextSlide = () => {
        if (mainSliderRef.current) {
            mainSliderRef.current.slickNext();
        }
    };

    const prevSlide = () => {
        if (mainSliderRef.current) {
            mainSliderRef.current.slickPrev();
        }
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setStartX(e.pageX - thumbnailsRef.current!.offsetLeft);
        setScrollLeft(thumbnailsRef.current!.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - thumbnailsRef.current!.offsetLeft;
        const walk = (x - startX) * 2;
        thumbnailsRef.current!.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (thumbnailsRef.current) {

            const thumbnailElements = thumbnailsRef.current.children;
            const thumbnailWidth = thumbnailElements[0].clientWidth;
            const scrollLeft = thumbnailsRef.current.scrollLeft;
            const index = Math.round(scrollLeft / thumbnailWidth);
            const targetScrollLeft = index * thumbnailWidth;

            thumbnailsRef.current.scrollTo({
                left: targetScrollLeft,
                behavior: 'smooth',
            });

            setActiveIndex(index);
        }
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    return (
        <div className={s.carPage}>
            <Slider {...mainSliderSettings} ref={mainSliderRef}>
                {car?.images?.map((image) => (
                    <div key={image.car_cards_id}>
                        <Image
                            className={s.img}
                            src={`/img/car-data/${car?.name}/${image.link}`}
                            alt={`photo-${image.car_cards_id}`}
                        />
                    </div>
                ))}
            </Slider>
            <div className={s.controls}>
                <button onClick={prevSlide} className={clsx(s.arrow, s.arrow_left)}>
                    <Icon iconId="arrow_left" viewBox={'0 0 9 17'} width={'9'} height={'17'} />
                </button>
                <button onClick={nextSlide} className={clsx(s.arrow, s.arrow_right)}>
                    <Icon iconId="arrow_right" viewBox={'0 0 9 17'} width={'9'} height={'17'} />
                </button>
            </div>

            <div
                className={s.thumbnails}
                ref={thumbnailsRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
            >
                {car?.images?.map((image, index) => {
                    const thumbSrc = `/img/car-data/${car?.name}/${image.link}`;
                    return (
                        <div
                            key={image.car_cards_id}
                            onClick={() => handleThumbnailClick(index)}
                            draggable
                            onDragStart={(e) => e.preventDefault()}
                        >
                            <Image
                                className={clsx(s.thumbnail, activeIndex === index && s.active_thumbnail)}
                                src={thumbSrc}
                                alt={`thumbnail-${index}`}
                            />
                        </div>
                    );
                })}
            </div>
            <CarImageOptions />
        </div>
    );
}
