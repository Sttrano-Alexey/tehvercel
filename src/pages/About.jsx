import '../styles/descPage.css'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"
import legal from '../components/Images/img/legal.jpg'

export default function About(){
    return(
        <>
        <Header/>
        <section className="description">
            <div className="description__container container">
                <div className="description__column">
                    <h1 className="description__column-title">О компании</h1>
                    <div className="description__column-text">
                        <p className="description__column-p">Команда «ТехПо» успешно работает в сфере поставок IT оборудования <span>более 8 лет</span></p>
                        <p className="description__column-p">На рынке с 2015 года</p>
                        <p className="description__column-p">Приятная цена</p>
                        <p className="description__column-p">Широкий ассортимент товаров</p>
                        <p className="description__column-p">Удобная доставка</p>
                    </div> 
                </div>
                <div className="description__column">
                    <img src={legal} alt="" className="description__column-img"/>
                </div>
            </div>
        </section>
        <Footer></Footer>
        </>
    )
}