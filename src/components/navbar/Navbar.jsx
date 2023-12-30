import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-bold">
          E-Commerce
        </Link>
        <div className="flex items-center space-x-4 justify-center">
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/store"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Store
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/register"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Register
          </Link>
          <Link
            to="/cart"
            className="text-white hover:text-gray-300 transition duration-300 flex items-center"
          >
            <ShoppingCartIcon className="mr-1" />
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
