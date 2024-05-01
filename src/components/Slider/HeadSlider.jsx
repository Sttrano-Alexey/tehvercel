
import slide1 from './headSlides/head-slide1.jpg'
import slide2 from './headSlides/head-slide2.jpg'
import slide3 from './headSlides/head-slide3.jpg'
import slide4 from './headSlides/head-slide4.jpg'
import slide5 from './headSlides/head-slide5.jpg'
import slide6 from './headSlides/head-slide6.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle'
import './slider.css'
export default function HeadSlider(){
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className} head-slider__pagination-bullet" style="width: 24px; height: 24px; border-radius: 50%; background-color: ${(this.swiper && this.swiper.activeIndex === index) ? '#FF0000' : '#28B4FE'};"></span>`;
        },
        renderMessage: function (index, message) {
          return `<div class="head-slider__pagination-message">${this.slides[index].dataset.caption}</div>`;
        },
      };
    return (
        <Swiper className='head-slider'
          // install Swiper modules
          modules={[Pagination]}
          pagination={pagination}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
        >
          <SwiperSlide data-caption='Что такое Notebook?'>{/* eslint-disable-line react/jsx-curly-newline */}
              <img src={slide1} alt='' />
          </SwiperSlide>
          <SwiperSlide data-caption='Преимущества Notebook?'>{/* eslint-disable-line react/jsx-curly-newline */}
              <img src={slide2} alt='' />
          </SwiperSlide>
          <SwiperSlide data-caption='Как выбрать Notebook?'>{/* eslint-disable-line react/jsx-curly-newline */}
              <img src={slide3} alt='' />
          </SwiperSlide>
          <SwiperSlide data-caption='Некоторые советы'>{/* eslint-disable-line react/jsx-curly-newline */}
              <img src={slide4} alt='' />
          </SwiperSlide>
          <SwiperSlide data-caption='Как сохранить деньги на Notebook?'>{/* eslint-disable-line react/jsx-curly-newline */}
              <img src={slide5} alt='' />
          </SwiperSlide>
          <SwiperSlide data-caption='Некоторые рекомендации'>{/* eslint-disable-line react/jsx-curly-newline */}
              <img src={slide6} alt='' />
          </SwiperSlide>
        </Swiper>

      )
}



