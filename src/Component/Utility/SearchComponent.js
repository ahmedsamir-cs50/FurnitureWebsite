import React from 'react'
import { Col, Row } from 'react-bootstrap';
import close from '../../images/close-svgrepo-com.svg'
import { useState } from 'react';
import { SearchHook } from '../hooks/Search/SearchHook';
import {CategoryCard} from '../Category/CategoryCard'
import ProductsContainer from '../Products/ProductsContainer'

export const SearchComponent = ({HandleClose,handleSearchCardClick}) => {
   
    // const [handleSearchWord,Data]=SearchHook();
    const [handleSearchWord, Data ]=SearchHook()

  
  return (
    <>
    <Row className='SearchComponent d-flex  justify-content-between'>

<Col sm={10} className='d-flex align-items-center '>
    <input onKeyUp={handleSearchWord} className='d-inline' type='text' placeholder='What are Looking For ? ...'></input>
</Col>
<Col sm={1} className='d-flex align-items-center'>
<div onClick={HandleClose} className='d-flex justify-content-center'>
          <img  className="m-auto" src={close} alt="" style={{width:"30px",height:"30px",cursor:"pointer"}}></img>
        </div>
</Col>
    </Row>
   
    <Row className=' search-result my-10 d-flex justify-content-around' style={{minHeight:"100vh"}}>
                 <ProductsContainer data={Data}  handleSearchCardClick={handleSearchCardClick}/>
    </Row>
  
    </>
  )
}

export default SearchComponent;