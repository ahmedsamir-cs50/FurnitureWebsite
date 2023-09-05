import React from 'react'
import simage1 from '../../images/Logos/tp_icon_made-in-usa_180x.webp'
import simage2 from '../../images/Logos/tp_icon_easy-to-install_180x.webp'
import simage3 from '../../images/Logos/tp_icon_customizable_180x.png'
import { Col, Row } from 'react-bootstrap'

export const StaticComponent = () => {
  return (
  <Row className='StaticComponent ' style={{backgroundColor:"rgb(246, 247, 248)",width:"100%"}}>
    <Col sm={12} lg={4}>
      <div className='d-flex justify-content-center'>
      <img src={simage1} alt='Ooops'></img>
      </div>
      <h3>Made In The USA</h3>
      <p>A family-owned company proudly produced in the USA.</p>
    </Col>
    <Col sm={12} lg={4}>
      <div className='d-flex justify-content-center'>
    <img src={simage2} alt='Ooops'></img>
    </div>
      <h3>Easy To Install</h3>
      <p>Easily applies to any smooth surface including bathrooms, stair risers, and ceilings.</p>
    </Col>
    <Col sm={12} lg={4}>
    <div className='d-flex justify-content-center'>
    <img src={simage3} alt='Ooops'></img>
    </div>
      <h3>Customizable</h3>
      <p>Print your own pattern or recolor any of our 300+ designs.</p>
    </Col>
  </Row>
  )
}
