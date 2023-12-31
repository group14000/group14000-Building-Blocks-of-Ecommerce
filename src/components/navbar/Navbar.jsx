import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-bold">
          E-Commerce
        </Link>
        <div className="hidden md:flex items-center space-x-4">
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
            to="/login"
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
        <div className="md:hidden">
          {/* Add an icon to trigger the mobile menu */}
          <ViewHeadlineIcon className="text-white cursor-pointer" />
          {/* Add your vertical menu here */}
          {/* This menu will be displayed on smaller screens */}
          <div className="hidden">
            <Link to="/" className="block text-white py-2">
              Home
            </Link>
            <Link to="/store" className="block text-white py-2">
              Store
            </Link>
            <Link to="/about" className="block text-white py-2">
              About
            </Link>
            <Link to="/login" className="block text-white py-2">
              Register
            </Link>
            <Link to="/cart" className="block text-white py-2">
              Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
