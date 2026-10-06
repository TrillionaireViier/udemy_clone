import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (course) => {
    if (!cart.find(item => item.id === course.id)) {
      setCart([...cart, course]);
    }
    setIsCartOpen(true); // Open cart automatically when adding
  };

  const removeFromCart = (courseId) => {
    setCart(cart.filter(item => item.id !== courseId));
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, isCartOpen, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
};
