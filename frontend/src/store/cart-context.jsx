// CartContext.js

// Import necessary modules from the 'react' library.
import React, { createContext, useContext, useState } from "react";

// Create a new context called 'CartContext' for managing the shopping cart state.
const CartContext = createContext();

// Create a 'CartProvider' component to manage the cart state and provide it to children components.
export const CartProvider = ({ children }) => {
  // Create a state variable 'cartItems' using 'useState' to store the items in the cart.
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart.
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Function to remove an item from the cart based on its index.
  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  // Function to clear the entire cart by setting 'cartItems' to an empty array.
  const clearCart = () => {
    setCartItems([]);
  };

  // Render the 'CartContext.Provider' component with the provided 'value'.
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}{" "}
      {/* Render children components wrapped in the 'CartProvider'. */}
    </CartContext.Provider>
  );
};

// Create a custom hook called 'useCart' to easily access the cart context within components.
export const useCart = () => {
  return useContext(CartContext);
};
