import '../ProductsHeader/ProductsHeader.css'
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function ProductHeader(){

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');


  const toLineView = () => {
    document.querySelector('.products').classList.add('line')
  }

  const toBlockView = () => {
    document.querySelector('.products').classList.remove('line')
  }

    return(
        <>
            <div className="products__header">
              <button
                className="products-close"
                onClick={() => window.history.back()}
              >
                <svg
                  width="17"
                  height="20"
                  viewBox="0 0 17 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-4.80825e-07 10L16.5 0.47372L16.5 19.5263L-4.80825e-07 10Z"
                    fill="#D9D9D9"
                  />
                </svg>
                назад
              </button>

              <div className="products__way">
                Каталог/Компьютеры/{category}
              </div>
              <div className="products__title">
                <h3 style={{
                  'maxWidth': window.innerWidth < 750 ? '75ch' : 'none'
                }}>{category ? (category.length > 15 && window.innerWidth < 750 ? category.slice(0, 15) + '...' : category) : 'Категория'}</h3>
                <span>19 товаров</span>
              </div>
              <div className="view__buttons">
                <button className="viewBtn" onClick={toLineView}>
                  <svg width="32" height="27" viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="32" height="7" rx="3" fill="#D9D9D9" />
                      <rect y="20" width="32" height="7" rx="3" fill="#D9D9D9" />
                      <rect y="10" width="32" height="7" rx="3" fill="#D9D9D9" />
                  </svg>
                </button>
                <button className="viewBtn" onClick={toBlockView}>
                  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="12" height="12" fill="#D9D9D9" fillOpacity="1" />
                    <rect y="15" width="12" height="12" fill="#D9D9D9" fillOpacity="1" />
                    <rect x="15" y="15" width="12" height="12" fill="#D9D9D9" fillOpacity="1" />
                    <rect x="15" width="12" height="12" fill="#D9D9D9" fillOpacity="1" />
                  </svg>
                </button>
              </div>
            </div>
        </>
    )
}
