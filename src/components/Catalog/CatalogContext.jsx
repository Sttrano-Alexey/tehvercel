import React, { createContext, useState } from 'react';

export const CatalogContext = createContext();

export const CatalogProvider = ({ children }) => {

  const [isCatalogOpen, setCatalogOpen] = useState(false);
  if (isCatalogOpen) document.querySelector('body').classList.add('lock');
  else document.querySelector('body').classList.remove('lock');

  return (
    <CatalogContext.Provider value={{ isCatalogOpen, setCatalogOpen }}>
      {children}
    </CatalogContext.Provider>
  );
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartLength, setCartLength] = useState(JSON.parse(localStorage.getItem('cart') || '[]').length);

  const updateCartLength = (newCartLength) => {
    setCartLength(newCartLength);
  };

  return (
    <CartContext.Provider value={{ cartLength, updateCartLength }}>
      {children}
    </CartContext.Provider>
  );
};