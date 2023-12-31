import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Store from "./components/store/Store";
import Cart from "./components/cart/Cart";
import Home from "./components/home/Home";
import Footer from "./components/footer/footer";
import TheGenericsBanner from "./TheGenericsBanner";
import SignUpPage from "./components/registration/SignUpPage";
import Login from "./components/registration/Login";

const App = () => {
  // State to track whether the user has logged in before
  const [firstLogin, setFirstLogin] = useState(true);

  // Effect to check if the user has logged in before
  useEffect(() => {
    const hasLoggedIn = localStorage.getItem("hasLoggedIn");
    if (hasLoggedIn) {
      setFirstLogin(false);
    } else {
      // Set the flag in local storage to indicate that the user has logged in
      localStorage.setItem("hasLoggedIn", "true");
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="font-sans min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Banner */}
        <TheGenericsBanner />

        {/* Content */}
        <div className="container mx-auto flex-1">
          <Routes>
            {/* Redirect to sign-up page for first login */}
            {firstLogin && <Route element={<Navigate to="/sign-up" />} />}

            <Route path="*" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
