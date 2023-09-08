import React, { useRef, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import star from "../../images/Assets/icons8-star-filled-48.png"
import { Cart } from '../../Component/Cart/Cart'
import AddtoCart from '../../Component/hooks/Cart/Add-to-Cart'
import ADDTOWISHLIST from '../../Component/hooks/Wish/ADD-TO-WISHLIST'
import { ToastContainer,toast } from 'react-toastify'

const ProductDetails = ({Data}) => {
  let productId=Data?.id
 const [qty,color,indexColor,showCart,colorClick,handleIncrese,handleDecrease,handleCartClick,handleclose,handleCheckClick]=AddtoCart(productId)
 
  const [handleWishClick]=ADDTOWISHLIST(productId)
  return (
    <>
    <Col md={6}sm={12}>
      <h1 className='mt-1 ms-2'>{Data?.title}</h1>
    <div className='mt-3 ms-2'><span>price:</span><span>{Data?.price}</span><span>L.E</span></div>
    <div className='Rating&Reviews wrapper mt-3 ms-2 d-flex justify-content-start'>
      <div className='RatingWrapper  d-flex justify-content-around align-items-center'>

        <img src={star} alt=''></img>
        <img src={star} alt=''></img>
        <img src={star} alt=''></img>
        <img src={star} alt=''></img>
      </div>
      <div className='Reviews wrapperd ms-3 d-flex justify-content-around align-items-center'>
       <div><span> 3 </span><span>Reviews</span></div>
      </div>
    </div>
    <label>
      <h5 className='mt-5 ms-2'>Available Colors</h5>
    </label>
    <div className='ColorWrapper mt-3 d-flex flex-row justify-content-start'>
    {
            Data?.availableColors ? (Data?.availableColors.map((color, index) => {
              return (<div
                key={index}
                onClick={() => colorClick(index, color)}
                className="color ms-2"
                style={{ backgroundColor: color, border: indexColor === index ? '2px solid black' : 'none' }}></div>)
            })) : null
          }
    
    </div>
    {/* <div className="  counter-wrapper mt-4 d-flex flex-row justify-content-between" style={{width:"30%"}}>
                <button onClick={handleDecrease} >-</button>
                <div className="my-auto"  value={qty}>{qty}</div>
                <button onClick={handleIncrese} >+</button>
                </div> */}
    <button onClick={handleCartClick} className='btn btn-dark mx-auto mt-5 p-2' style={{width:"90%",letterSpacing:"3px",borderRadius:"0"} }>ADD TO CART</button>
    <button onClick={handleWishClick} className='btn btn-dark mx-auto mt-2 p-2' style={{width:"90%",letterSpacing:"3px",borderRadius:"0"} }>ADD TO WISHLIST</button>
   <div className='mt-3'>
    {Data?.description}
   </div>
    </Col>
    
    { showCart? <Cart handleclose={handleclose} handleCheckClick={handleCheckClick}/> : null}
    <ToastContainer/>
    </>
  )
}

export default ProductDetails