import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartIcon from '../Cart/CartIcon';
import { Link, useLocation } from 'react-router-dom';

const Pagenavbar = ({ openCartModal }) => {
  const location = useLocation();

  const activeLinkStyle = {
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">ShopingCart</Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/" style={location.pathname === '/' ? activeLinkStyle : {}}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/products" style={location.pathname.startsWith('/products') ? activeLinkStyle : {}}>
            Products
          </Nav.Link>
          <Nav.Link as={Link} to="/about" style={location.pathname === '/about' ? activeLinkStyle : {}}>
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/register" style={location.pathname === '/register' ? activeLinkStyle : {}}>
            Register
          </Nav.Link>
        </Nav>
        <Nav>
          <CartIcon onTap={openCartModal} />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Pagenavbar;
