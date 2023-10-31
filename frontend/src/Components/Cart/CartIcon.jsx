import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { useCart } from '../../store/cart-context';

function CartIcon({ onTap}) {
  const { cartItems } = useCart()
  const itemCount = cartItems.length;
  


  const handleClick=()=>{
    onTap()
  }
  return (
    <Nav.Link onClick={handleClick} >
    <i className="fa fa-shopping-cart fa-lg"></i>
   <span className="badge badge-pill badge-danger">{itemCount}</span>
  </Nav.Link>
  );
}

export default CartIcon;  
