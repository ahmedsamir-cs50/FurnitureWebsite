import React from 'react'
import { CategoryCard } from './CategoryCard'
import { Container, Row } from 'react-bootstrap'
import AllCategoryHook from '../hooks/category/AllCategoryHook'
import Pagination from '../Utility/Pagination'

const CategoryList = () => {
   const  [category, loading, pageCount, getPage]= AllCategoryHook()
  return (
    <Container>
   <Row>
    {
        !loading &&
        category?(
        category?.data.map((data,index)=>{return(
            <CategoryCard lg={3} sm={6} key={index} id={data._id} title={data.name} img={data.image} link={`/products/category/${data?._id}`}/>
        )})):null
    }
   
   </Row>
   <Pagination onPress={getPage} pageCount={pageCount}/>
   </Container>
  )
}

export default CategoryList