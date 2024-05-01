import './Appliances.css'
import slide1 from './AppliancesSlides/aplSlide1.jpg'
import slide2 from './AppliancesSlides/aplSlide2.jpg'
import slide3 from './AppliancesSlides/aplSlide3.jpg'
import slide4 from './AppliancesSlides/aplSlide4.jpg'
import slide5 from './AppliancesSlides/aplSlide5.jpg'
import slide6 from './AppliancesSlides/aplSlide6.jpg'

import { useEffect, useState } from 'react'

export default function Appliances(){
    const [swiperInitialized, setSwiperInitialized] = useState(false);

    useEffect(() => {
        if (swiperInitialized) return;

        let apl_img = new Swiper('.appliances__slider', {
            loop: true,
            spaceBetween: 24,
            clickable: true,
            navigation: {
                prevEl: '.appliances__slider-prev',
                nextEl: '.appliances__slider-next'
            },
            // autoplay: {
            //   delay: 4000,
            //   speed: 5000,
            //   disableOnInteraction: true,
            // },
        });
        let apl_text = new Swiper('.appliances__subslider', {
            loop: true,
            spaceBetween: 24,
            pagination: {
                el: '.appliances__subslider-pagination',
                clickable: true
            },
        });

        apl_img.controller.control = apl_text;
        apl_text.controller.control = apl_img;

        setSwiperInitialized(true);
    }, [swiperInitialized]);


    return(
        <>
            <section className='appliances'>
                <div className="appliances__container container">
                    <h2 className='categories__title-main apl-title'>Бытовая техника</h2>
                </div>
                <div class="appliances__bg">
                    <div class="appliances__container container">
                        <div class="appliances__slider-container">
                            <div class="appliances__slider swiper">
                                <div class="appliances__slider-wrapper swiper-wrapper">
                                    <div class="appliances__slider-slide swiper-slide">
                                        <div class="appliances__slider-content">
                                            <img src={slide1} alt="" class="appliances__slider-img" />
                                        </div>
                                    </div>
                                    <div class="appliances__slider-slide swiper-slide">
                                        <div class="appliances__slider-content">
                                            <img src={slide2} alt="" class="appliances__slider-img" />
                                        </div>
                                    </div>
                                    <div class="appliances__slider-slide swiper-slide">
                                        <div class="appliances__slider-content">
                                            <img src={slide3} alt="" class="appliances__slider-img" />
                                        </div>
                                    </div>
                                    <div class="appliances__slider-slide swiper-slide">
                                        <div class="appliances__slider-content">
                                            <img src={slide4} alt="" class="appliances__slider-img" />
                                        </div>
                                    </div>
                                    <div class="appliances__slider-slide swiper-slide">
                                        <div class="appliances__slider-content">
                                            <img src={slide5} alt="" class="appliances__slider-img" />
                                        </div>
                                    </div>
                                    <div class="appliances__slider-slide swiper-slide">
                                        <div class="appliances__slider-content">
                                            <img src={slide6} alt="" class="appliances__slider-img" />
                                        </div>
                                    </div>
                                </div>
                                <svg className='appliances__slider-prev swiper-button-prev' width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="22" cy="22" r="22" fill="#A8B3C0" fillOpacity="0.5"/>
                                    <path d="M25 10L13 22L25 34" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                                </svg>
                                <svg className="appliances__slider-next swiper-button-next" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="22" cy="22" r="22" transform="rotate(-180 22 22)" fill="#A8B3C1" fillOpacity="0.5"/>
                                    <path d="M19 34L31 22L19 10" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                                </svg>
                            </div>
                        </div>
                        <div class="appliances__subslider swiper">
                            <div class="appliances__subslider-wrapper swiper-wrapper">
                                <div class="appliances__subslider-slide swiper-slide">
                                    <p class="appliances__subslider-text">
                                        Блендеры и измельчители
                                    </p>
                                </div>
                                <div class="appliances__subslider-slide swiper-slide">
                                    <p class="appliances__subslider-text">
                                        Варочные панели
                                    </p>
                                </div>
                                <div class="appliances__subslider-slide swiper-slide">
                                    <p class="appliances__subslider-text">
                                        Кофемолки <br />
                                        Кофемашины
                                    </p>
                                </div>
                                <div class="appliances__subslider-slide swiper-slide">
                                    <p class="appliances__subslider-text">
                                        Кухонные комбайны
                                    </p>
                                </div>
                                <div class="appliances__subslider-slide swiper-slide">
                                    <p class="appliances__subslider-text">
                                        Аерогрили электрогрили
                                    </p>
                                </div>
                                <div class="appliances__subslider-slide swiper-slide">
                                    <p class="appliances__subslider-text">
                                        Климатическая техника
                                    </p>
                                </div>
                            </div>
                            <div class="appliances__subslider-pagination swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}