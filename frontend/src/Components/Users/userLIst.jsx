import React, { useEffect } from "react";
import { useState } from "react";
import { UserService } from "../../Services/userService";
import { Container, Row, Col, Table } from "react-bootstrap";
const Userlist = () => {
  const [state, setState] = useState({
    users: [],
  });

  useEffect(() => {
    UserService.getAllusers()
      .then((res) => {
        setState({
          ...state,
          users: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
                     state.users.length > 0 &&
                    state.users.map((user) =>{
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.website}</td>
                                <td>{user.company.name}</td>
                                <td>{user.address.city}</td>
                            </tr>
                        )
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

export default Userlist;
