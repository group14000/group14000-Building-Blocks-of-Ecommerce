import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Pagenavbar from "./Components/Navbar/Navbar";
import Product from "./Components/Productcart/Product";
import CartModal from "./Components/Modal/Modal";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import SingleProduct from "./Components/Single/SingleProduct";
import { CartProvider } from "./store/cart-context.jsx";
import RegisterForm  from './Components/Registration/Registration'
import LoginForm from "./Components/Registration/Login";
import PrivateRoute from "./store/PrivateRoute";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [showCartModal, setShowCartModal] = useState(false);


  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const openCartModal = () => {
    setShowCartModal(true);
  };

  const closeCartModal = () => {
    setShowCartModal(false);
  };

  return (
    <CartProvider>
      <BrowserRouter>
        {/* <Pagenavbar openCartModal={openCartModal} /> */}
        {location.pathname !== "/login" && location.pathname !== "/register" && (
          <Pagenavbar openCartModal={openCartModal} />
        )}
        <CartModal show={showCartModal} handleClose={closeCartModal} />

        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/about"
            element={<PrivateRoute element={<About />} />}
          />
          <Route
            path="/"
            element={<PrivateRoute element={<Home />} />}
          />
          <Route
            path="/products"
            element={<PrivateRoute element={<Product addToCart={addToCart} />} />}
          />
          <Route
            path="/products/:productId"
            element={<PrivateRoute element={<SingleProduct />} />}
          />
        </Routes>
      </BrowserRouter>
      </CartProvider>
  );
}

export default App;