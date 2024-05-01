
import slide1 from './headSlides/head-slide1.jpg'
import slide2 from './headSlides/head-slide2.jpg'
import slide3 from './headSlides/head-slide3.jpg'
import slide4 from './headSlides/head-slide4.jpg'
import slide5 from './headSlides/head-slide5.jpg'
import slide6 from './headSlides/head-slide6.jpg'
// import Swiper core and required modules
import { useEffect } from 'react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle'
import './slider.css'
export default function HeadSlider(){
  useEffect(() => {
    let head__img = new Swiper('.head__slider', {
      loop: true,
      navigation: {
        prevEl: '.head__slider-prev',
        nextEl: '.head__slider-next'
      },
      pagination: {
        el: '.head__subslider-pagination',
        clickable: true
      },
      autoplay: {
        delay: 1500,
        speed: 5000,
        disableOnInteraction: true,
      },
    });
    if (head__img) console.log('head__img slider initialized')


    let head__text = new Swiper('.head__subslider', {
      loop: true,
      spaceBetween: 24,
      // navigation: {
      //     prevEl: '.categories__slider-prev',
      //     nextEl: '.categories__slider-next'
      // },
    });
    if (head__text) console.log('head__text slider initialized')


    head__img.controller.control = head__text;
    head__text.controller.control = head__img;
  }, []);

  return (
    <div className="head__sliders">
      <div className="head__slider swiper-container">
        <div className="head__slider-wrapper swiper-wrapper">
          <div className="head__slider-slide swiper-slide">
            <div className="head__slider-content">
              <div className="head__slider-overlay"></div>
              <img src={slide1} alt="" className="head__slider-img" />
            </div>
          </div>
          <div className="head__slider-slide swiper-slide">
            <div className="head__slider-content">
              <div className="head__slider-overlay"></div>
              <img src={slide2} alt="" className="head__slider-img" />
            </div>
          </div>
          <div className="head__slider-slide swiper-slide">
            <div className="head__slider-content">
              <div className="head__slider-overlay"></div>
              <img src={slide3} alt="" className="head__slider-img" />
            </div>
          </div>
          <div className="head__slider-slide swiper-slide">
            <div className="head__slider-content">
              <div className="head__slider-overlay"></div>
              <img src={slide4} alt="" className="head__slider-img" />
            </div>
          </div>
          <div className="head__slider-slide swiper-slide">
            <div className="head__slider-content">
              <div className="head__slider-overlay"></div>
              <img src={slide5} alt="" className="head__slider-img" />
            </div>
          </div>
          <div className="head__slider-slide swiper-slide">
            <div className="head__slider-content">
              <div className="head__slider-overlay"></div>
              <img src={slide6} alt="" className="head__slider-img" />
            </div>
          </div>
        </div>
        <svg className='head__slider-prev' width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="22" cy="22" r="22" fill="#A8B3C0" fillOpacity="0.5"/>
          <path d="M25 10L13 22L25 34" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        </svg>
        <svg className="head__slider-next" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="22" cy="22" r="22" transform="rotate(-180 22 22)" fill="#A8B3C1" fillOpacity="0.5"/>
          <path d="M19 34L31 22L19 10" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="head__subslider swiper-container">
        <div className="head__subslider-wrapper swiper-wrapper">
          <div className="head__subslider-slide swiper-slide">
            <div className="head__subslider-content">
              <p className="head__subslider-text">Ноутбуки</p>
            </div>
          </div>
          <div className="head__subslider-slide swiper-slide">
            <div className="head__subslider-content">
              <p className="head__subslider-text">Процессоры</p>
            </div>
          </div>
          <div className="head__subslider-slide swiper-slide">
            <div className="head__subslider-content">
              <p className="head__subslider-text">Телевизоры</p>
            </div>
          </div>
          <div className="head__subslider-slide swiper-slide">
            <div className="head__subslider-content">
              <p className="head__subslider-text">SSD</p>
            </div>
          </div>
          <div className="head__subslider-slide swiper-slide">
            <div className="head__subslider-content">
              <p className="head__subslider-text">Смартфоны</p>
            </div>
          </div>
          <div className="head__subslider-slide swiper-slide">
            <div className="head__subslider-content">
              <p className="head__subslider-text">Картриджи</p>
            </div>
          </div>
        </div>
        <div className="head__subslider-pagination swiper-pagination"></div>
      </div>
    </div>
  );
}



