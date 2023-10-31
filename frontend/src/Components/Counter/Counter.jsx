import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useState } from 'react'

const Counter = () => {

    const [state, setState] = useState({
        count: 0,
    }); 

    const increment = ()=>{
        setState({
            count: state.count + 1
        })
    }

    const decrement = ()=>{
        setState({
            count: state.count - 1
        })
    }
  return (
    <div>
        <Container className='mt-3'>
            <Row >
                <Col xs={4}>
                    <Card>
                        <Card.Body>
                            <p className='display-2'>{state.count}</p>
                            <Button variant="success" onClick={increment} className='m-1'>Increment</Button>
                            <Button variant="warning" onClick={decrement} className='m-1'>Decrement</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Counter