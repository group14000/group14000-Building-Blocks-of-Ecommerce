// Import React and necessary components and hooks.
import React, { useEffect } from "react";
import { useState } from "react";
import { UserService } from "../../Services/userService";
import { Container, Row, Col, Table } from "react-bootstrap";

// Define a functional component named 'Userlist'.
const Userlist = () => {
  // Create a state variable 'state' to hold user data.
  const [state, setState] = useState({
    users: [],
  });

  // Use the 'useEffect' hook to fetch user data when the component mounts.
  useEffect(() => {
    // Call the 'getAllusers' method from the 'UserService'.
    UserService.getAllusers()
      .then((res) => {
        // Update the 'state' with user data from the response.
        setState({
          ...state,
          users: res.data,
        });
      })
      .catch((err) => {
        console.log(err); // Log any errors that occur during the fetch.
      });
  }, []); // Empty dependency array ensures the effect runs once on mount.

  // Return the JSX for rendering the user list.
  return (
    <div>
      <Container className="mt-3">
        <Row>
          <Col>
            <h3 className="text-primary">User List</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              laudantium?
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover className="shadow-lg text-center">
              <thead>
                <tr>
                  <th>SNO</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Website</th>
                  <th>Company</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {
                  // Map through 'state.users' and render user data in the table rows.
                  state.users.length > 0 &&
                    state.users.map((user) => {
                      return (
                        <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.website}</td>
                          <td>{user.company.name}</td>
                          <td>{user.address.city}</td>
                        </tr>
                      );
                    })
                }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// Export the 'Userlist' component as the default export.
export default Userlist;
