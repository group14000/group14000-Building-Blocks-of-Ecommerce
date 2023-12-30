import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./components/store/Store";
import Cart from "./components/cart/Cart";
import Home from "./components/home/Home";
import Footer from "./components/footer/footer";
import TheGenericsBanner from "./TheGenericsBanner";
import SignUpPage from "./components/registration/SignUpPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="font-sans">
        {/* Navbar */}
        <Navbar />

        {/* Banner */}
        <TheGenericsBanner />

        {/* Content */}
        <div className="container mx-auto">
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<SignUpPage />} />
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
