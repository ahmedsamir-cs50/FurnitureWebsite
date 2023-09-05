import React from 'react'

import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import altImage from '../../images/CategoryImages/2223a91eafc05ee7542503d83cdab30d_8beab81f-e028-4055-95b3-9c89a1a68eca_360x.webp'
export const CategoryCard = ({title,img,lg,sm,link}) => {
  return (
    <Col lg={lg}  sm={sm}>
      <Link to={link}>
    <div className='card'>
        <img src={img ||altImage} alt="coming"></img>
        </div>
        </Link>
        <p>{title}</p>
      
        </Col>
  )
}
