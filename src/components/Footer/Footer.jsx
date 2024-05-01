import '../Footer/Footer.css'
import logo from '../Images/Logo/logo.svg'
import mail from '../Images/UI/mail.svg'
import phone from '../Images/UI/phone.svg'

export default function Footer(){
    return(
        <>
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__logo">
                    <a href="/"><img src={logo} alt="" className="footer__logo-img" /></a>
                </div>
                <nav className="footer__menu">
                    <ul className="footer__menu-list">
                        <li className="footer__menu-item"><a href="delivery" className="footer__menu-link">Доставка</a></li>
                        <li className="footer__menu-item"><a href="legal" className="footer__menu-link">Юр. Лицам</a></li>
                        <li className="footer__menu-item"><a href="pay" className="footer__menu-link">Оплата</a></li>
                        <li className="footer__menu-item"><a href="safeguard" className="footer__menu-link">Гарантия</a></li>
                        <li className="footer__menu-item"><a href="about" className="footer__menu-link">О нас</a></li>
                        <li className="footer__menu-item"><a href="contacts" className="footer__menu-link">Контакты</a></li>
                    </ul>
                </nav>
                <div className="footer__contact">
                    <div className="footer__item">
                        <img src={mail} alt="" className="footer__item-img" />
                        <a href="mailto:1@techpo.ru" className="footer__item-link">1@techpo.ru</a>
                    </div>
                    <div className="footer__item">
                        <img src={phone} alt="" className="footer__item-img" />
                        <a href="tel:8-910-00-00" className="footer__item-link">8-910-00-00</a>
                    </div>
                </div>
                <div className="footer__adres">
                    <p className="footer__adres-title">Юридический адрес:</p>
                    <span className="footer__adres-text">
                        248010, Калужская обл, г Калуга, ул Высокая, д. 2а, кв. 114
                    </span>
                </div>
            </div>
        </footer>
        </>
    )
}