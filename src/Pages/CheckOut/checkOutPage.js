import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Cart } from '../../Component/Cart/Cart';
import ShippingDetails from '../../Component/CHECKOUT/ShippingDetails';
import CartDetails from '../../Component/Cart/CartDetails';

const CheckOutPage = () => {
  return (
    <Container >
       <Row>
        <Col>
        <CartDetails/>
        </Col>
        
        <ShippingDetails/>
        
       </Row>
    </Container>
  )
}

export default CheckOutPage;