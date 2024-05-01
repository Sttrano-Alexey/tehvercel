import '../styles/descPage.css'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"
import safe from '../components/Images/img/safe.jpg'

export default function Safeguard(){
    return(
        <>
        <Header/>
        <section class="description">
            <div class="description__container container">
                <div class="description__column">
                    <h1 class="description__column-title">Гарантия</h1>
                    <div class="description__column-text">
                        <p class="description__column-p">Все товары в интернет магазине новые и имеют свой срок гарантийного обслуживания.</p>
                        <p class="description__column-p">Гарантия и обслуживание устанавливается производителем. </p>
                        <p class="description__column-p">Гарантийное обслуживание товаров выполняется производителем.</p>
                        <p class="description__column-p"><strong>Как воспользоваться гарантией?</strong></p>
                        <p class="description__column-p">Обратиться напрямую в авторизованный сервисный центр.</p>
                        <p class="description__column-p">Обратиться в наш магазин.</p>
                        <p class="description__column-p">Обязательно иметь при себе чек или накладную.</p>
                        <span>В случае невозможности поставки товара денежные средства возвращаются покупателю по заявлению в течении срока, установленного законами РФ.</span>
                    </div> 
                </div>
                <div class="description__column">
                    <img src={safe} alt="" class="description__column-img"/>
                </div>
            </div>
        </section>
        <Footer></Footer>
        </>
    )
}