import '../styles/descPage.css'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"
import legal from '../components/Images/img/legal.jpg'

export default function Legal(){
    return(
        <>
        <Header/>
        <section class="description">
            <div class="description__container container">
                <div class="description__column">
                    <h1 class="description__column-title">Юридическим лицам</h1>
                    <div class="description__column-text">
                        <p class="description__column-p"><strong>Условия сотрудничества</strong></p>
                        <p class="description__column-p">Все цены на товары включают НДС 20%. </p>
                        <p class="description__column-p">Документы на товар можно получить <br />
                                                         по ЭДО («Контур Диадок»), почтой или вместе с товаром.</p>
                        <p class="description__column-p">При оформлении заказа выберите способ оплаты «Счёт на оплату». <br />Укажите ваши реквизиты и выберите способ доставки. 
                                                         Отправка товара ТК осуществляется после получения оплаты.</p>
                        <p class="description__column-p">Если вам нужен договор поставки, то вы можете обратиться по телефону или на почту <a className='legal-href' href="mailto:1@techpo.ru.">1@techpo.ru.</a></p>
                    </div> 
                </div>
                <div class="description__column">
                    <img src={legal} alt="" class="description__column-img"/>
                </div>
            </div>
        </section>
        <Footer></Footer>
        </>
    )
}