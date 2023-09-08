import React from 'react'

import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import altImage from '../../images/CategoryImages/2223a91eafc05ee7542503d83cdab30d_8beab81f-e028-4055-95b3-9c89a1a68eca_360x.webp'
export const ProductCard = ({lg,sm,link,data,handleSearchCardClick}) => {
  return (
    <Col lg={lg}  sm={sm} className='my-3'>
      <Link to={link}>
    <div className='card' onClick={handleSearchCardClick}>
        <img src={data.imageCover ||altImage} alt="coming"></img>
        </div>
        </Link>
        <div>
        <div style={{wordBreak:"keep-all",fontSize:"14.5px"}}>{data.title}</div>
        <div style={{wordBreak:"keep-all",fontSize:"14px"}}>
          <span>From </span>
        <span>{data.price} LE</span>
        </div>
        </div>
        
        </Col>
  )
}
