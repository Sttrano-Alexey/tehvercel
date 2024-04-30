import './slider.css'
import slide1 from './headSlides/head-slide1.jpg'
import slide2 from './headSlides/head-slide2.jpg'
import slide3 from './headSlides/head-slide3.jpg'
import slide4 from './headSlides/head-slide4.jpg'
import slide5 from './headSlides/head-slide5.jpg'
import slide6 from './headSlides/head-slide6.jpg'

export default function HeadSlider(){
    return(
        <>
            <div className="head__slider">
                <img className='head__slide' src={slide1} alt="" />
            </div>
        </>
    )
}