import './Advantages.css'
import advImg1 from './AdvantagesImage/diagram_adv.svg'
import advImg2 from './AdvantagesImage/like_adv.svg'
import advImg3 from './AdvantagesImage/money_adv.svg'
import advImg4 from './AdvantagesImage/support_adv.svg'
import advImg5 from './AdvantagesImage/trolley_adv.svg'
import advImg6 from './AdvantagesImage/truck_adv.svg'

export default function Advantages({ images, texts }) {
    return (
        <section className='advantages'>
            <div className="advantages__container container">
                {images.map((image, index) => (
                    <div className="advantages__item" key={index}>
                        <img src={image} alt="" />
                        <p>{texts[index]}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

Advantages.defaultProps = {
    images: [advImg3, advImg1, advImg2, advImg6, advImg4, advImg5],
    texts: [
        '2 способа оплаты QR-код выставленный счет',
        'Более 8 лет на рынке IT  оборудования',
        'Гарантия на товар и удобные условия возарата',
        'Доставка осуществляется компанией СДЭК',
        'Консультация и помощь от наших менеджеров',
        'Большой ассортимент товара'
    ]
}
