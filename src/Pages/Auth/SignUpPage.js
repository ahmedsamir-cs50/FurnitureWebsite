import React from 'react'
import { useState } from 'react'
import { Alert, Button, Card, Col, Container, Form, FormGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import notify from '../../Component/hooks/useNotifaction'
import SignUpHook from '../../Component/hooks/Auth/SignUpHook'

const SignUpPage = () => {
  
 const [HandleUserChange,HandleEmailChange,HandlePasswordChange,HandleConfirmPasswordChange,HandlePhoneChange,HandleClick]=SignUpHook()

  return (
    
    <Container className='signup ' style={{width:"50%",minHeight:"60vh"}}>
        <div className='Login-Wrapper '>
            <h1 className='text-center mt-20'>Sign Up</h1>
            <Row className='d-flex justify-content-center'>
                <Col lg={6} sm={12}>
            <Form onSubmit={HandleClick} >
            <Form.Group>
              <Form.Label className='mt-40' htmlFor="User">User Name</Form.Label>
              <Form.Control
                id="User"
                type="input"
                onChange={HandleUserChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                id="email"
                type="email"
                onChange={HandleEmailChange}
                required
              />
            </Form.Group>
            <Form.Group>
              
              <Form.Label className='mt-3' htmlFor="Password">Password</Form.Label>
             
                           <Form.Control
                id="Password"
                type="password"
                onChange={HandlePasswordChange}
                required
              />
            </Form.Group>
            <Form.Group>
              
              <Form.Label className='mt-3' htmlFor="ConfirmPassword">Confirm Password</Form.Label>
             
                           <Form.Control
                id="Confirm Password"
                type="password"
                onChange={HandleConfirmPasswordChange}
                required
              />
            </Form.Group>
            <Form.Group>
              
              <Form.Label className='mt-3' htmlFor="Phone">Phone</Form.Label>
             
                           <Form.Control
                id="Phone"
                type="input"
                onChange={HandlePhoneChange}
                required
              />
            </Form.Group>
            <Button
           
              className="w-100 mt-3 btn btn-dark "
              type="submit"
              
            >
              Sign Up
            </Button>
            </Form>
           
            </Col>
            </Row>

        </div>
        <ToastContainer/>
    </Container>
  )
}

export default SignUpPage
