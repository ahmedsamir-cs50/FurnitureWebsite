import React from 'react'
import { Row } from 'react-bootstrap'
import { ProductCard } from './ProductCard'


const ProductsContainer = ({data,handleSearchCardClick}) => {
console.log(data)
  return (
    <Row>
     
    {
         
        data?(
        data?.map((data,index)=>{return(
            <ProductCard  handleSearchCardClick={handleSearchCardClick} lg={3} sm={6} key={index} data={data} link={`/product/${data._id}`}/>
        )})):null
    }
   
   </Row>
  )
}

export default ProductsContainer