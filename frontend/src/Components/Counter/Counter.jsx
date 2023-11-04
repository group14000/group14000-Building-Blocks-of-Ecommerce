// Import the React library for creating React components.
import React from "react";

// Import specific components and utilities from the 'react-bootstrap' library.
import { Container, Row, Col, Card, Button } from "react-bootstrap";

// Import the 'useState' hook from React for managing component state.
import { useState } from "react";

// Define a functional component named 'Counter'.
const Counter = () => {
  // Use the 'useState' hook to create a state variable 'state' with an initial count of 0.
  const [state, setState] = useState({
    count: 0,
  });

  // Define a function 'increment' to increase the count by 1.
  const increment = () => {
    setState({
      count: state.count + 1,
    });
  };

  // Define a function 'decrement' to decrease the count by 1.
  const decrement = () => {
    setState({
      count: state.count - 1,
    });
  };

  // Return a JSX element representing a counter component.
  return (
    <div>
      {/* Create a Bootstrap container with top margin. */}
      <Container className="mt-3">
        <Row>
          <Col xs={4}>
            {/* Create a Bootstrap card within a column. */}
            <Card>
              <Card.Body>
                {/* Display the current count using a large text size. */}
                <p className="display-2">{state.count}</p>
                {/* Create buttons for incrementing and decrementing the count. */}
                <Button variant="success" onClick={increment} className="m-1">
                  Increment
                </Button>
                <Button variant="warning" onClick={decrement} className="m-1">
                  Decrement
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// Export the 'Counter' component as the default export.
export default Counter;
