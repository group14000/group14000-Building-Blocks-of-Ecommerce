// Import the React library for creating React components.
import React from "react";

// Import the 'Nav' component from the 'react-bootstrap' library.
import Nav from "react-bootstrap/Nav";

// Import the 'useCart' hook from a custom context named 'cart-context'.
import { useCart } from "../../store/cart-context";

// Define a functional component named 'CartIcon' that takes a prop 'onTap'.
function CartIcon({ onTap }) {
  // Use the 'useCart' hook to access the 'cartItems' from the custom context.
  const { cartItems } = useCart();

  // Calculate the number of items in the shopping cart.
  const itemCount = cartItems.length;

  // Define a function 'handleClick' to be executed when the link is clicked.
  const handleClick = () => {
    onTap(); // Call the 'onTap' function passed as a prop.
  };

  // Return a JSX element representing a shopping cart icon in the navigation bar.
  return (
    <Nav.Link onClick={handleClick}>
      {/* Display a shopping cart icon using a Font Awesome class. */}
      <i className="fa fa-shopping-cart fa-lg"></i>

      {/* Display a badge with the item count, using a Bootstrap badge class. */}
      <span className="badge badge-pill badge-danger">{itemCount}</span>
    </Nav.Link>
  );
}

// Export the 'CartIcon' component as the default export.
export default CartIcon;
