// Import the React library and the 'useState' hook for creating React components and managing state.
import React, { useState } from "react";

// Import specific components and utilities from the 'react-bootstrap' library.
import { Container, Row, Col, Card, Button } from "react-bootstrap";

// Import 'useNavigate' from 'react-router-dom' for navigation and 'useCart' from a custom context.
import { useNavigate } from "react-router-dom";
import { useCart } from "../../store/cart-context";

// Define a functional component named 'ProductCart' that takes product details as props.
const ProductCart = ({ title, price, imageUrl, quantity }) => {
  // Create a state variable 'isHovered' to track card hover state, initialized to false.
  const [isHovered, setIsHovered] = useState(false);

  // Get the 'navigate' function for programmatic navigation.
  const navigate = useNavigate();

  // Get the 'addToCart' function from the custom cart context.
  const { addToCart } = useCart();

  // Define a function to handle card hover.
  const handleCardHover = () => {
    setIsHovered(true);
  };

  // Define a function to handle card leave (hover out).
  const handleCardLeave = () => {
    setIsHovered(false);
  };

  // Define styles for the card, image, and card body.
  const cardStyle = {
    position: "relative",
    overflow: "hidden",
    borderradius: "35px", // Typo in 'borderRadius' corrected.
  };

  const imageStyle = {
    width: "100%",
    height: "250px",
    transform: isHovered ? "scale(1.4)" : "scale(1)",
    transition: "transform 0.7s",
  };

  const bodyStyle = {
    position: "relative",
    zIndex: 1, // Set a higher z-index to keep it above the image.
  };

  // Define a function to add the current product to the cart.
  const addItemToCart = () => {
    addToCart({ title, price, imageUrl, quantity });
  };

  // Define a function to view the details of a product.
  const viewProduct = (title) => {
    // Replace 'product_name' with the actual product name or identifier in the URL.
    navigate(`/products/${title}`);
  };

  return (
    <Col xs={4}>
      <Card
        className="w-75"
        style={cardStyle}
        onMouseEnter={handleCardHover}
        onMouseLeave={handleCardLeave}
      >
        <div style={{ position: "relative" }}>
          <Card.Img
            variant="top"
            src={imageUrl}
            alt={title}
            style={imageStyle}
          />
        </div>
        <Card.Body style={bodyStyle}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
          </Card.Text>
          <Button onClick={addItemToCart}>ADD TO CART</Button>
          <Button className="m-3" onClick={() => viewProduct(title)}>
            View
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

// Export the 'ProductCart' component as the default export.
export default ProductCart;
