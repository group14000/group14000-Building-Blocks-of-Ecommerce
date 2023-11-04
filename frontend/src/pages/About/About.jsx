// Import the React library and necessary components from 'react' and 'react-bootstrap'.
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Define a functional component named 'About'.
function About() {
  // Return the JSX for the About page.
  return (
    <Container>
      <Row>
        <Col>
          <h1>About Us</h1>
          <p>
            {/* Provide a description of the about section with placeholder text. */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            justo sit amet leo elementum vulputate. Sed ac nisl at dolor euismod
            tristique. Nullam at turpis in odio congue dapibus at ac arcu. Sed a
            sapien nec augue semper mollis. Vivamus nec efficitur elit. Sed
            auctor, dolor et aliquam consectetur, lectus libero varius tortor,
            in viverra nunc ligula vel tellus.
          </p>
          {/* You can add more content as needed within the 'Col' component. */}
        </Col>
      </Row>
    </Container>
  );
}

// Export the 'About' component as the default export.
export default About;
