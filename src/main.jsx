import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CatalogProvider, CartProvider } from './components/Catalog/CatalogContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
    <CatalogProvider>
      <App />
    </CatalogProvider>
    </CartProvider>
  </React.StrictMode>
)
