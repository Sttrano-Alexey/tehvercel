import '../styles/descPage.css'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"
import pay from '../components/Images/img/pay.jpg'

export default function Pay(){
    return(
        <>
        <Header/>
        <section class="description">
            <div class="description__container container">
                <div class="description__column">
                    <h1 class="description__column-title">Оплата</h1>
                    <div class="description__column-text">
                        <p class="description__column-p">Оплата товара производится предварительно и полностью одним из доступных способов:</p>
                        <p class="description__column-p">Система быстрых платежей</p>
                        <p class="description__column-p">По выставленному счету</p>
                        <p class="description__column-p">Условия оплаты могут быть изменены менеджером по согласованию с клиентом.</p>
                    </div> 
                </div>
                <div class="description__column">
                    <img src={pay} alt="" class="description__column-img"/>
                </div>
            </div>
        </section>
        <Footer></Footer>
        </>
    )
}