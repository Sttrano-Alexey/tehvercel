import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Delivery from './pages/Delivery'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import ProductsInfo from './pages/ProductsInfo'
import './styles/load.css'
import CatalogMain from './components/Catalog/CatalogMain'
import Legal from './pages/legal'
import Pay from './pages/Pay'
import Safeguard from './pages/Safeguard'
import About from './pages/About'
import Contacts from './pages/Contacts'
import { CartProvider } from './components/Catalog/CatalogContext'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/index.html" element={<Home/>}/>
        <Route path="/delivery" element={<Delivery/>}/>
        <Route path="/legal" element={<Legal/>}/>
        <Route path="/pay" element={<Pay/>}/>
        <Route path="/safeguard" element={<Safeguard/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/info_products/:productId" element={<ProductsInfo/>}/>
        {/* <Route path="*" element={<NoPage/>}/> */}
      </Routes>
    </BrowserRouter>
    <CatalogMain></CatalogMain>
</>
  )
}

export default App
