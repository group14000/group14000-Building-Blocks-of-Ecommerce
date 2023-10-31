// About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            vitae justo sit amet leo elementum vulputate. Sed ac nisl at dolor
            euismod tristique. Nullam at turpis in odio congue dapibus at ac
            arcu. Sed a sapien nec augue semper mollis. Vivamus nec efficitur
            elit. Sed auctor, dolor et aliquam consectetur, lectus libero
            varius tortor, in viverra nunc ligula vel tellus.
          </p>
          {/* Add more content as needed */}
        </Col>
      </Row>
    </Container>
  );
}

export default About;
