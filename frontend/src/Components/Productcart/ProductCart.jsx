import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../store/cart-context';



const ProductCart = ({ title, price, imageUrl, quantity  }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const {  addToCart } = useCart();




  const handleCardHover = () => {
    setIsHovered(true);
  };

  const handleCardLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    position: 'relative',
    overflow: 'hidden',
    borderradius: '35px'
  
  };

  const imageStyle = {
    width: '100%',
    height: '250px',
    transform: isHovered ? 'scale(1.4)' : 'scale(1)',
    transition: 'transform 0.7s',
  };

  const bodyStyle = {
    position: 'relative',
    zIndex: 1, // Set a higher z-index to keep it above the image
  };


  const addItemToCart = () => {
    addToCart({ title, price, imageUrl, quantity });
  };

  const viewProduct = (title) => {
    // Replace 'product_name' with the actual product name or identifier
    navigate(`/products/${title}`);
  };
  //${product_name}
  return (
    <Col xs={4}>
      <Card
        className="w-75"
        style={cardStyle}
        onMouseEnter={handleCardHover}
        onMouseLeave={handleCardLeave}
      >
        <div style={{ position: 'relative' }}>
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
          <Button onClick={addItemToCart} >ADD TO CART</Button>
          <Button className='m-3' onClick={() => viewProduct(title)}>View</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCart;
