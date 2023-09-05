import React from 'react'
import { Data } from '../Data/Data'
import { Col, Row } from 'react-bootstrap'
import { CategoryCard } from '../Category/CategoryCard'

export const ColorsCategory = () => {
  return (
    <div style={{width:'100%'}}>
    <h1 id='cat'>Shop By Color</h1>
    <Row className='my-2 d-flex justify-content-around'>
   
    {
       
          Data.Colors? (
            Data.Colors.slice(0, 5).map((item, index) => {
                    return (<CategoryCard sm={6} lg={2} key={index} id={item.id} title={item.name} img={item.img} />)
                })
            ) : <h4>Stay tuned ,,,</h4>
        

    }
    
    </Row>
   
    </div>
  )
}
