import { Col, Row } from "react-bootstrap";
import { CartItem } from "./CartItem";
import GetUserCart from "../hooks/Cart/getUserCart";
import close from '../../images/Assets/close.png'
import { useEffect } from "react";
import { useState } from "react";

export const Cart = ({handleclose}) => {
  const [CartItems ]=GetUserCart();
  
 
  return (
    <>
    <Row className="Cart d-flex  justify-content-end">
      <Col className=" pe-0 me-0" md={4} sm={12}>
      <div className="cart-wrapper">
        <div className=" p-2 d-flex flex-row justify-content-between">
          <h4 className="mx-auto">Your Cart</h4>
          <img className="close-button" src={close} onClick={handleclose} alt=""></img>
          </div>
          {
         
            
            CartItems?(
              CartItems.products?.map((item, index) => {
                return (
                  <CartItem key={index} item={item}/>
                );
              })
            ):<h5>loading</h5>
            
          }
          
          </div>
        
       
      </Col>
    </Row>
    </>
  );
};
