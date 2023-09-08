import React from 'react'
import { Button, Col, Container, Form, Row, ToastContainer } from 'react-bootstrap'
import CheckOutHook from '../hooks/CheckOut/CheckOutHook'
import { useParams } from 'react-router-dom'

const ShippingDetails = () => {
    const {id} = useParams()
    
    const[handlePhoneChange,handleCityChange,handlePostalCodeChange,handleDetailsChange,handleCheckOutClick]=CheckOutHook(id);
  return (
    <Container className='signup ' style={{width:"50%",minHeight:"60vh"}}>
        <div className='Login-Wrapper '>
            <h1 className='text-center mt-20'> Shipping Details</h1>
            <Row className='d-flex justify-content-center'>
                <Col lg={6} sm={12}>
            <Form  >
            <Form.Group>
              <Form.Label className='mt-40' htmlFor="User"> phone</Form.Label>
              <Form.Control
                id="User"
                type="input"
                onChange={handlePhoneChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className='mt-2' htmlFor="email">city</Form.Label>
              <Form.Control
                id="city"
                type="input"
                onChange={handleCityChange}
                required
              />
            </Form.Group>
            <Form.Group>
              
              <Form.Label className='mt-3' htmlFor="postalCode">postalCode</Form.Label>
             
                           <Form.Control
                id="postalCode"
                type="input"
                onChange={handlePostalCodeChange}
                required
              />
            </Form.Group>
            <Form.Group>
              
              <Form.Label className='mt-3' htmlFor="Details">Details</Form.Label>
             
                           <Form.Control
                id="Details"
                type="input"
                onChange={handleDetailsChange}
                required
              />
            </Form.Group>
            
            <Button
           onClick={handleCheckOutClick}
              className="w-100 mt-3 btn btn-dark "
              type="submit"
              
            >
               CHECKOUT
            </Button>
            </Form>
           
            </Col>
            </Row>

        </div>
        <ToastContainer/>
    </Container>
  )
}

export default ShippingDetails
