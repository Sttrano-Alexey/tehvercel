import { useNavigate } from 'react-router-dom';

import laptop1 from '../Images/img/laptop1.png'
import laptop2 from '../Images/img/laptop2.png'
import laptop3 from '../Images/img/laptop3.png'
import laptop4 from '../Images/img/laptop4.png'
import laptop5 from '../Images/img/laptop5.png'
import laptop6 from '../Images/img/laptop6.png'
import laptop7 from '../Images/img/laptop7.png'
import laptop8 from '../Images/img/laptop8.png'

import HeadSlider from '../Slider/HeadSlider'
import Brand from './Brands/Brands'
import './head.css'
import { useEffect, useContext } from 'react';
import { CatalogContext } from '../../components/Catalog/CatalogContext';

const mobileImages = [
  laptop1,
  laptop2,
  laptop3,
  laptop4,
  laptop5,
  laptop6,
  laptop7,
  laptop8
];


export default function Head(props) {
    const navigate = useNavigate();
    const catalogItems = [
        'Компьютеры, ноутбуки, планшеты',
        'Серверы и хранение',
        'Портативная электроника',
        'Оргтехника, пeриферия',
        'Расходные материалы',
        'Комплектующие',
        'Носители информации',
        'Сетевое оборудование'
    ];

    const {isCatalogOpen, setCatalogOpen} = useContext(CatalogContext);

    const openCatalog = (item) => {
      setCatalogOpen(!isCatalogOpen);
    }
    
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isCatalogOpen) {
        setCatalogOpen(!isCatalogOpen);
      }
    };
    useEffect(() => {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, []);


    return (
<>
        <section className='head'>
            <div className="head__container container">
                <div className="head__catalog">
                    <ul>
                        {catalogItems.map((item, index) => <li key={index} onMouseMove={() => openCatalog(item)}>{item}</li>)}
                        <button onClick={openCatalog}><span>Открыть полный каталог</span></button>
                    </ul>
                </div>
                {window.innerWidth < 758 && (
                    <div className="head__catalog-mobile">
                        {Array.from({ length: 8 }, (_, i) => <div key={i} className="head__catalog-mobile-item" onClick={() => navigate(`/products?category=${['Телевизоры', 'Смартфоны', 'Ноутбуки', 'Компьютеры', 'Бытовая техника', 'Сетевое оборудование', 'Офисное оборудование', 'Ручной инструмент'][i % 8]}`)}>
                            <img src={mobileImages[i]} alt="" />
                            <span>{['Телевизоры', 'Смартфоны', 'Ноутбуки', 'Компьютеры', 'Бытовая техника', 'Сетевое оборудование', 'Офисное оборудование', 'Ручной инструмент'][i % 8]}</span>
                        </div>)}
                        <button onClick={() => openCatalog('Компьютеры, ноутбуки, планшеты')}>
                            Перейти в каталог
                        </button>
                    </div>
                )}
                {window.innerWidth > 758 && <> 
                    <HeadSlider />
                </>}
            </div>
        </section>
        <Brand />
</>

    )
}


