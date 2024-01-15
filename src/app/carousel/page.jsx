"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './page.module.css';

export default function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const NextArrow = () => (
    <div className={`${styles.arrow} ${styles.arrowNext}`} onClick={() => sliderRef.current.slickNext()}>
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
  );

  const PrevArrow = () => (
    <div className={`${styles.arrow} ${styles.arrowPrev}`} onClick={() => sliderRef.current.slickPrev()}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </div>
  );

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_, next) => setActiveSlide(next),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const slides = [
    {
      image: './carousel-1.jpg',
      text: 'Texto para la tarjeta 1Texto para la tarjeta 1Texto para la tarjeta 1',
    },
    {
      image: './carousel-2.jpg',
      text: 'Texto para la tarjeta 2 Texto para la tarjeta 2Texto para la tarjeta 2 Texto para la tarjeta 2 Texto para la tarjeta 2Texto para la tarjeta 2',
    },
    {
      image: './carousel-3.jpg',
      text: 'Texto para la tarjeta 3 Texto para la tarjeta 3Texto para la tarjeta 3 Texto para la tarjeta 3Texto para la tarjeta 3',
    },
  ];

  const handleImageClick = (index) => {
    setActiveSlide(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className={styles['container-carousel']}>
      <div className={styles['carousel-row']}>
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${styles['carousel-slide']} ${index === activeSlide ? styles.active : ''}`}
              onClick={() => handleImageClick(index)}
            >
              <img src={slide.image} alt={`Slide ${index}`} className={styles.img} />
              <div className={styles['container-carousel-text']}>
                <div className={styles['text-row']}>
                  <div className={styles['text']}>{slides[activeSlide].text}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
