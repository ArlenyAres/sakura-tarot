"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel2.module.css';

export default function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const NextArrow = () => (
    <div className={`${styles['arrow']} ${styles['arrowNext']}`} onClick={() => sliderRef.current.slickNext()}>
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
  );

  const PrevArrow = () => (
    <div className={`${styles['arrow']} ${styles['arrowPrev']}`} onClick={() => sliderRef.current.slickPrev()}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </div>
  );

  const settings = {
    dots: false,
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
      image: './card1.svg',
      text: '1. Concéntrate en tu pregunta o situación: Antes de sacar las cartas, concéntrate en lo que quieres saber o en la situación específica sobre la que te gustaría obtener orientación en un tema relaccionado al (Pasado, Presente, y Futuro).',
    },
    {
      image: './card2.svg',
      text: '2. En la pagina principal selecciona las cartas: Elige una carta para cada seccion (Pasado, Presente, y Futuro) en un total de 3 cartas por tirada. Para revelar su orden, haz clic en (Revelar).',
    },
    {
      image: './card3.svg',
      text: '3. Lee la interpretación: La interpretación de cada carta es según su sección y su significado general está en el contexto de tu pregunta o situación.',
    },
    {
      image: './card4.svg',
      text: '4. Reflexiona: Toma un momento para reflexionar sobre la interpretación proporcionada. A veces, las lecturas pueden ser simbólicas o requerir un análisis más profundo para aplicarlas a tu situación personal.'
    },
  ];
  const handleImageClick = (index) => {
    setActiveSlide(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className={styles['container']}>
      <div className={styles['carousel-container']}>
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${styles['carousel-slide']} ${index === activeSlide ? styles.active : ''}`}
              onClick={() => handleImageClick(index)}
            >
              <img src={slide.image} alt={`Slide ${index}`} className={styles['img']} />
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles['text-box-container']}>
        <p>{slides[activeSlide].text}</p>
      </div>
        <div className={styles['navigation-dots']}>
        {slides.map((_, index) => ( 
          <div
            key={index}
            className={`${styles['dot']} ${index === activeSlide ? styles.activeDot : ''}`}
            onClick={() => {
              if (index < slides.length) {
                setActiveSlide(index);
                sliderRef.current.slickGoTo(index);
              }
            }}
          ></div>
        ))}
      </div>
     
    </div>
  );
 }         