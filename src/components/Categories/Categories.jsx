import './Categories.css'
import slide_c1 from '../Images/img/laptop1.png'
import slide_c2 from '../Images/img/laptop2.png'
import slide_c3 from '../Images/img/laptop3.png'
import slide_c4 from '../Images/img/laptop4.png'
import slide_c5 from '../Images/img/laptop5.png'
import slide_c6 from '../Images/img/laptop6.png'
import slide_c7 from '../Images/img/laptop7.png'
import slide_c8 from '../Images/img/laptop8.png'

import { useEffect } from 'react';

export default function Categories(){
    useEffect(() => {
        var categories__slider = new Swiper('.categories__slider-container', {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 24,
            navigation: {
                prevEl: '.categories__slider-prev',
                nextEl: '.categories__slider-next'
            },
            // autoplay: {
            //   delay: 2000,
            //   speed: 5000,
            //   disableOnInteraction: true,
            // },
        });
    }, []); // [] - для инициализации только при первом рендере


    return(
        <>
            <section className='categories'>
                <div className="categories__container container">
                    <h2 className="categories__title-main">Популярные категории</h2>
                    <div className="categories__slider-container swiper">
                        <div className="categories__slider-wrapper swiper-wrapper">
                            <div className="categories-slider-slide swiper-slide">
                                <div className="categories-slider-slide-container">
                                    <img src={slide_c1} alt="" />
                                    <p>Телевизоры</p>
                                    <div className='bg'></div>
                                </div>
                            </div>
                            <div className="categories-slider-slide swiper-slide">
                                <div className="categories-slider-slide-container">
                                    <img src={slide_c2} alt="" />
                                    <p>Смартфоны</p>
                                    <div className='bg'></div>
                                </div>
                            </div>
                            <div className="categories-slider-slide swiper-slide">
                                <div className="categories-slider-slide-container">
                                    <img src={slide_c3} alt="" />
                                    <p>Ноутбуки</p>
                                    <div className='bg'></div>
                                </div>
                            </div>
                            <div className="categories-slider-slide swiper-slide">
                                <div className="categories-slider-slide-container">
                                    <img src={slide_c4} alt="" />
                                    <p>Компьютеры</p>
                                    <div className='bg'></div>
                                </div>
                            </div>
                            <div className="categories-slider-slide swiper-slide">
                                <div className="categories-slider-slide-container">
                                    <img src={slide_c5} alt="" />
                                    <p>Бытовая техника</p>
                                    <div className='bg'></div>
                                </div>
                            </div>
                            <div className="categories-slider-slide swiper-slide">
                                <div className="categories-slider-slide-container">
                                    <img src={slide_c6} alt="" />
                                    <p>Сетевое оборудование</p>
                                    <div className='bg'></div>
                                </div>
                            </div>
                            <div className="categories-slider-slide swiper-slide">
                                <div className="categories-slider-slide-container">
                                    <img src={slide_c7} alt="" />
                                    <p>Офисное оборудование</p>
                                    <div className='bg'></div>
                                </div>
                            </div>
                            <div className="categories-slider-slide swiper-slide">
                                <div className="categories-slider-slide-container">
                                    <img src={slide_c8} alt="" />
                                    <p>Ручной инструмент</p>
                                    <div className='bg'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}