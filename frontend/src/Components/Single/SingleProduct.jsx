// Import the React library and specific components/hooks from 'react' and 'react-router-dom'.
import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

// Define a functional component named 'SingleProduct'.
const SingleProduct = () => {
  // Get the 'productId' from the URL parameters using the 'useParams' hook.
  const { productId } = useParams();

  // Return a container that centers its contents both vertically and horizontally.
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Row>
        <Col>
          <div className="text-center">
            {/* Display the product title using the 'productId' parameter. */}
            <h1 className="text-primary">Title: {productId}</h1>
            {/* You can add additional styling or content here as needed. */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

// Export the 'SingleProduct' component as the default export.
export default SingleProduct;
