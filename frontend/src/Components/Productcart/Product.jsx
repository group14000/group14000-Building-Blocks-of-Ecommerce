import React from 'react'
import ProductCart from './ProductCart'
import { Container, Row, Col, Card } from 'react-bootstrap';

const Product = ({addToCart}) => { 

    const cartElements = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        quantity: 2,
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        quantity: 3,
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1,
        
        }
        
        ]
  return (
    <Container className='mt-3'>
    <Row>
      {cartElements.map((product, index) => (
        <ProductCart  addToCart={addToCart}  key={index} {...product} />
      ))}
    </Row>
  </Container>
  )
}

export default Product