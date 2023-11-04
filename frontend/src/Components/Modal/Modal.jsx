// Import the React library for creating React components.
import React from 'react';

// Import the 'Modal' and 'Button' components from the 'react-bootstrap' library.
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// Import the 'useCart' hook from a custom context named 'cart-context'.
import { useCart } from '../../store/cart-context';

// Define a functional component named 'CartModal' that takes 'show' and 'handleClose' as props.
function CartModal({ show, handleClose }) {
  // Use the 'useCart' hook to access 'cartItems' and 'removeFromCart' from the custom context.
  const { cartItems, removeFromCart } = useCart();

  // Calculate the total price of items in the cart using 'reduce'.
  const totalCartPrice = cartItems.reduce((total, currentItem) => {
    return total + currentItem.price * currentItem.quantity;
  }, 0);

  // Return a modal dialog for the shopping cart.
  return (
    <Modal show={show} onHide={handleClose}>
      {/* Create a modal header with a close button and title. */}
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Map through 'cartItems' to display a list of items in the cart. */}
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
        {/* Display the total price of the items in the cart. */}
        <div>Total Price: {totalCartPrice}</div>
        {/* Create buttons for closing the modal and proceeding to checkout. */}
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

// Export the 'CartModal' component as the default export.
export default CartModal;
