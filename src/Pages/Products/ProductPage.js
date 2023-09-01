import React from 'react'
import { Row } from 'react-bootstrap'
import ProductDetails from './ProductDetails'
import ProductGallery from './ProductGallery'
import { ProductDetailsHook } from '../../Component/hooks/ProductHook/ProductDetailsHook'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
  const {id}=useParams()
 const [Data]=ProductDetailsHook(id)
  return (
    <div>
        <Row className='my-5'>
          <ProductGallery Data={Data} />
            <ProductDetails Data={Data} />
        </Row>
    </div>
  )
}

export default ProductPage