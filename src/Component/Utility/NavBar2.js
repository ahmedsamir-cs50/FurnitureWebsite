import React from 'react'
import logo from '../../images/Tempaper_and_Co_Logo_280x.jpg'
import search from'../../images/icons8-search.svg'
import person from'../../images/icons8-person-50.png'
import bag from'../../images/icons8-bag-50.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap'
export const NavBar2 = () => {
  return (
    <Navbar  collapseOnSelect expand="lg" className="bg-body-tertiary">
    <Container className='d-flex justify-content-around'>
      <Navbar.Brand href="#home">
     <h1>EnhantDécor</h1>
      </Navbar.Brand>
     
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
        <Nav.Link href="#Wall Murals">Wall Murals</Nav.Link>
        <Nav.Link href="#Wall Decals">Wall Decals</Nav.Link>
        <Nav.Link href="#Custom">Custom</Nav.Link>
        <Nav.Link href="#Rugs">Rugs</Nav.Link>
        <Nav.Link href="#Sale">Sale</Nav.Link> 
        </Nav>
        </Navbar.Collapse>
        <div className='d-flex justify-content-end flex-row'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav className='d-flex justify-content-around flex-row'>
          <Nav.Link href="#deets">
          <div>
            <img src={person} alt=''></img>   
            </div>
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
          <div>
            <img src={search} alt=''></img> 
            </div>
          </Nav.Link>
          <Nav.Link href="#deets">
          <div>
            <img src={bag} alt=''></img> 
            </div>
          </Nav.Link>
        </Nav>
        </div>
    </Container>
  </Navbar>
  )
}

