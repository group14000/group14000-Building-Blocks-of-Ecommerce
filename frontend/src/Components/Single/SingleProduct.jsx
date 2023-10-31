import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const SingleProduct = () => {
  const { productId } = useParams();

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Row>
        <Col>
          <div className="text-center">
            <h1 className="text-primary">Title: {productId}</h1>
            {/* Add additional styling here if needed */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleProduct;
