import './Categories.css'
import slide_c1 from '../Images/img/laptop1.png'
import slide_c2 from '../Images/img/laptop2.png'
import slide_c3 from '../Images/img/laptop3.png'
import slide_c4 from '../Images/img/laptop4.png'
import slide_c5 from '../Images/img/laptop5.png'
import slide_c6 from '../Images/img/laptop6.png'
import slide_c7 from '../Images/img/laptop7.png'
import slide_c8 from '../Images/img/laptop8.png'
import { useNavigate } from 'react-router-dom';


import { useEffect } from 'react';

export default function Categories(){
    const navigate = useNavigate();

    useEffect(() => {
        var categories__slider = new Swiper('.categories__slider-container', {
            loop: true,
            breakpoints: {
                765: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                800: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
            },
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
                <div className="categories__container container-long">
                    <h2 className="categories__title-main">Популярные категории</h2>
                    <div className="categories__slider-container container swiper">
                        <div className="categories__slider-wrapper swiper-wrapper">
                            <div className="categories-slider-slide swiper-slide"  onClick={() => navigate(`/products?category=${'Телевизоры'}`)}>
                                <div className="categories-slider-slide-container">
                                    <img src={slide_c1} alt="" />
                                    <p>Телевизоры</p>
                                    <div className='bg'></div>
                                </div>
                            </div>
                            <div className="categories-slider-slide swiper-slide" onClick={() => navigate(`/products?category=${'Смартфоны'}`)}>
                                <div className="categories-slider-slide-container">
                                    <img src={slide_c2} alt="" />
                                    <p>Смартфоны</p>
                                    <div className='bg'></div>
                                </div>
                            </div>
                            <div className="categories-slider-slide swiper-slide" onClick={() => navigate(`/products?category=${'Ноутбуки'}`)}>
                                <div className="categories-slider-slide-container">
                                    <img src={slide_c3} alt="" />
                                    <p>Ноутбуки</p>
                                    <div className='bg'></div>
                                </div>
                            </div>
                            <div className="categories-slider-slide swiper-slide" onClick={() => navigate(`/products?category=${'Компьютеры'}`)}>
                                <div className="categories-slider-slide-container">
                                    <img src={slide_c4} alt="" />
                                    <p>Компьютеры</p>
                                    <div className='bg'></div>
                                </div>
                            </div>
                            <div className="categories-slider-slide swiper-slide" onClick={() => navigate(`/products?category=${'Бытовая техника'}`)}>
                                <div className="categories-slider-slide-container">
                                    <img src={slide_c5} alt="" />
                                    <p>Бытовая техника</p>
                                    <div className='bg'></div>
                                </div>
                            </div>
                            <div className="categories-slider-slide swiper-slide" onClick={() => navigate(`/products?category=${'Сетевое оборудование'}`)}>
                                <div className="categories-slider-slide-container">
                                    <img src={slide_c6} alt="" />
                                    <p>Сетевое оборудование</p>
                                    <div className='bg'></div>
                                </div>
                            </div>
                            <div className="categories-slider-slide swiper-slide" onClick={() => navigate(`/products?category=${'Офисное оборудование'}`)}>
                                <div className="categories-slider-slide-container">
                                    <img src={slide_c7} alt="" />
                                    <p>Офисное оборудование</p>
                                    <div className='bg'></div>
                                </div>
                            </div>
                            <div className="categories-slider-slide swiper-slide" onClick={() => navigate(`/products?category=${'Ручной инструмент'}`)}>
                                <div className="categories-slider-slide-container">
                                    <img src={slide_c8} alt="" />
                                    <p>Ручной инструмент</p>
                                    <div className='bg'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="categories-slider-nav">
                        <svg className='categories__slider-prev' width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="22" cy="22" r="22" fill="#A8B3C0" fillOpacity="0.5"/>
                            <path d="M25 10L13 22L25 34" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                        </svg>
                        <svg className="categories__slider-next" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="22" cy="22" r="22" transform="rotate(-180 22 22)" fill="#A8B3C1" fillOpacity="0.5"/>
                            <path d="M19 34L31 22L19 10" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                        </svg>
                    </div>
                </div>
            </section>
        </>
    )
}