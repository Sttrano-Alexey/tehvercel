import '../styles/descPage.css'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"
import contacts from '../components/Images/img/contacts.jpg'
import mail from '../components/Images/UI/mail.svg'
import phone from '../components/Images/UI/phone.svg'

export default function Contacts(){
    return(
        <>
        <Header/>
        <section className="description">
            <div className="description__container container">
                <div className="description__column">
                    <h1 className="description__column-title">Контактная информация</h1>
                    <div className="description__column-text">
                        <div>
                            <img src={phone} alt="" />
                            <a href="tel:8-910-00-00" className="description__column-a">8-910-00-00</a>
                        </div>
                        <div className='mb'>
                            <img src={mail} alt="" />
                            <a href="mailto:1@techpo.ru" className="description__column-a">1@techpo.ru</a>
                        </div>
                        <p className="description__column-p"><strong>Реквизиты:</strong></p>
                        <div className='desc-rec mb'>
                            <span>ООО "АРМАДА"</span>
                            <span>ИНН: 4028073447</span>
                            <span>КПП: 402801001</span>
                            <span>ОГРН: 1224000008957</span>
                            <span>Расчетный счет:</span>
                            <span>40702810822240010228</span>
                            <span>Банк:</span>
                            <span>КАЛУЖСКОЕ ОТДЕЛЕНИЕ N8608 ПАО СБЕРБАНК</span>
                            <span>БИК: 042908612</span>
                            <span>Корр. счет: 30101810100000000612</span>
                        </div>
                        <p className="description__column-p"><strong>Юридический адрес</strong></p>
                        <p className="description__column-p adres">248010, Калужская обл, г Калуга, ул Высокая, д. 2а, кв. 114</p>
                    </div> 
                </div>
                <div className="description__column">
                    <img src={contacts} alt="" className="description__column-img"/>
                </div>
            </div>
        </section>
        <Footer></Footer>
        </>
    )
}