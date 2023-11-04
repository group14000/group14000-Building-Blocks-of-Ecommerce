// Import necessary modules and components.
import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Pagenavbar from "./Components/Navbar/Navbar"; // Import the navigation bar component.
import Product from "./Components/Productcart/Product"; // Import the product component.
import CartModal from "./Components/Modal/Modal"; // Import the cart modal component.
import About from "./pages/About/About"; // Import the about page.
import Home from "./pages/Home/Home"; // Import the home page.
import SingleProduct from "./Components/Single/SingleProduct"; // Import the single product component.
import { CartProvider } from "./store/cart-context.jsx"; // Import the cart context provider.
import RegisterForm from "./Components/Registration/Registration"; // Import the registration form.
import LoginForm from "./Components/Registration/Login"; // Import the login form.
import PrivateRoute from "./store/PrivateRoute"; // Import the private route component.

function App() {
  const [cartCount, setCartCount] = useState(0); // Create state for the cart item count.
  const [showCartModal, setShowCartModal] = useState(false); // Create state to control the cart modal visibility.

  const addToCart = () => {
    setCartCount(cartCount + 1); // Function to add an item to the cart.
  };

  const openCartModal = () => {
    setShowCartModal(true); // Function to open the cart modal.
  };

  const closeCartModal = () => {
    setShowCartModal(false); // Function to close the cart modal.
  };

  return (
    <CartProvider>
      {" "}
      {/* Wrap the entire application with the 'CartProvider' for cart state management. */}
      <BrowserRouter>
        {" "}
        {/* Set up the router for navigation. */}
        {/* Conditionally render the navigation bar based on the current route. */}
        {location.pathname !== "/login" &&
          location.pathname !== "/register" && (
            <Pagenavbar openCartModal={openCartModal} />
          )}
        {/* Render the cart modal component with show/hide controls. */}
        <CartModal show={showCartModal} handleClose={closeCartModal} />
        <Routes>
          {" "}
          {/* Define the routes and their associated components. */}
          <Route path="/register" element={<RegisterForm />} />{" "}
          {/* Registration form route. */}
          <Route path="/login" element={<LoginForm />} />{" "}
          {/* Login form route. */}
          <Route
            path="/about"
            element={<PrivateRoute element={<About />} />} // About page protected by 'PrivateRoute'.
          />
          <Route
            path="/"
            element={<PrivateRoute element={<Home />} />} // Home page protected by 'PrivateRoute'.
          />
          <Route
            path="/products"
            element={
              <PrivateRoute element={<Product addToCart={addToCart} />} />
            } // Product page protected by 'PrivateRoute'.
          />
          <Route
            path="/products/:productId"
            element={<PrivateRoute element={<SingleProduct />} />} // Single product page protected by 'PrivateRoute'.
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App; // Export the 'App' component as the default export.
