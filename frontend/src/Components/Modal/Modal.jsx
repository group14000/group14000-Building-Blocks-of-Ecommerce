import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useCart } from '../../store/cart-context';

function CartModal({ show, handleClose }) {
  const { cartItems, removeFromCart } = useCart();


  const totalCartPrice = cartItems.reduce((total, currentItem) => {
    return total + currentItem.price * currentItem.quantity;
  }, 0);


  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>

       {cartItems.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center mb-2">
              <span>
                Item: <strong>{item.title}</strong>
              </span>
              <span>
                Price: <strong>${item.price}</strong>
              </span>
            
             
              <button className="btn btn-danger" onClick={() => removeFromCart(item)}>
                Remove
              </button>
            </li>
          ))} 

</Modal.Body>
      <Modal.Footer>
        <div>Total Price: {totalCartPrice}</div>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">
          Proceed to Checkout
        </Button>
      </Modal.Footer>
    </Modal>
  );
}


export default CartModal;
