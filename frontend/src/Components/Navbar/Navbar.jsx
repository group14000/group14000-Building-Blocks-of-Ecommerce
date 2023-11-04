// Import the React library for creating React components.
import React from "react";

// Import specific components from the 'react-bootstrap' library.
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// Import the 'CartIcon' component from the 'Cart' directory.
import CartIcon from "../Cart/CartIcon";

// Import 'Link' and 'useLocation' from 'react-router-dom' for navigation.
import { Link, useLocation } from "react-router-dom";

// Define a functional component named 'Pagenavbar' that takes 'openCartModal' as a prop.
const Pagenavbar = ({ openCartModal }) => {
  // Get the current location using the 'useLocation' hook from 'react-router-dom'.
  const location = useLocation();

  // Define a style object for active navigation links.
  const activeLinkStyle = {
    color: "white",
    fontWeight: "bold",
  };

  // Return a navigation bar using the 'Navbar' component from 'react-bootstrap'.
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        {/* Display a brand logo as a link to the home page. */}
        <Navbar.Brand as={Link} to="/">
          ShopingCart
        </Navbar.Brand>
        <Nav className="mx-auto">
          {/* Create navigation links with conditional styling based on the current location. */}
          <Nav.Link
            as={Link}
            to="/"
            style={location.pathname === "/" ? activeLinkStyle : {}}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/products"
            style={
              location.pathname.startsWith("/products") ? activeLinkStyle : {}
            }
          >
            Products
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/about"
            style={location.pathname === "/about" ? activeLinkStyle : {}}
          >
            About
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/register"
            style={location.pathname === "/register" ? activeLinkStyle : {}}
          >
            Register
          </Nav.Link>
        </Nav>
        <Nav>
          {/* Include the 'CartIcon' component, passing the 'openCartModal' function as a prop. */}
          <CartIcon onTap={openCartModal} />
        </Nav>
      </Container>
    </Navbar>
  );
};

// Export the 'Pagenavbar' component as the default export.
export default Pagenavbar;
