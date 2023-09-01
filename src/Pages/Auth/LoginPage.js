import React from 'react'
import { Alert, Button, Card, Col, Container, Form, FormGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginHook from '../../Component/hooks/Auth/login-hook'

const LoginPage = () => {
  const [email, password, loading, onChangeEmail, onChangePassword, onSubmit, isPress]=LoginHook()
  return (
    
    <Container className='Login ' style={{width:"50%",minHeight:"60vh"}}>
        <div className='Login-Wrapper '>
            <h1 className='text-center mt-20'>Log In</h1>
            <Row className='d-flex justify-content-center'>
                <Col lg={6} sm={12}>
            <Form onSubmit={onSubmit}>
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                id="email"
                type="email"
                onChange={onChangeEmail}
                required
              />
            </Form.Group>
            <Form.Group>
                <div className='d-flex justify-content-between'>
              <Form.Label className='mt-3' htmlFor="email">Password</Form.Label>
              <div className=" text-left mt-3 forgot">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
              </div>
              <Form.Control
                id="Password"
                type="password"
                onChange={onChangePassword}
                required
              />
            </Form.Group>
            <Button
           
              className="w-100 mt-3 btn btn-dark "
              type="submit"
             
            >
              Sign In
            </Button>
            </Form>
            <div className=" text-center   SignUp">
            <Link to="/signUp">Create Account?</Link>
          </div>
          
            </Col>
            </Row>

        </div>
    </Container>
  )
}

export default LoginPage
