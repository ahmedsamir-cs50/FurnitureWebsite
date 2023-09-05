import React from 'react'
import { Data } from '../Data/Data'
import { Col, Row } from 'react-bootstrap'
import { CategoryCard } from '../Category/CategoryCard'
import { Link } from 'react-router-dom'

export const HomeCategory = () => {
  return (
    <div style={{width:'100%'}}>
    <h1 id='cat'>Shop By Category</h1>
    <Row className=' HomeCat my-2 d-flex justify-content-around'>
   
    {
       
          Data.Category? (
            Data.Category.slice(0, 5).map((item, index) => {
                    return (<CategoryCard sm={6} lg={2} key={index} id={item.id} title={item.name} img={item.img} link="/categories" />)
                })
            ) : <h4>Stay tuned ,,,</h4>
        

    }
    
    </Row>
   
    </div>
  )
}
