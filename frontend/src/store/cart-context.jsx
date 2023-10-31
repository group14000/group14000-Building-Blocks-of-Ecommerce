// CartContext.js

import React, { createContext, useContext, useState } from 'react';

// Create a new context
const CartContext = createContext();

// Create a CartProvider component to manage the cart state
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);


  // Function to add an item to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  // Function to clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access the cart context
export const useCart = () => {
  return useContext(CartContext);
};
