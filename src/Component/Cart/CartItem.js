
import React, { useEffect, useState } from "react"
import recyle from '../../images/Assets/recycle-bin.png'
import alter from '../../images/Logos/tp_icon_made-in-usa_180x.webp'
import DeleteCartItem from "../hooks/Cart/Delete-Cart-Item"
import ModifyCartItem from "../hooks/Cart/Modify-Cart-Item"

export const CartItem=({item})=>{
  
 const [handleIncrese,handleDecrease,qty,handleDeleteClick]=ModifyCartItem(item)
 
    return(
       
        <div className="cart-item d-flex flex-row justify-content-start">
          <img   src={alter} alt=""></img>
          <div style={{width:"69%"}}>
            <div className=" p-2 ms-2 d-flex flex-row justify-content-between">
              <div className="product-name ">{item?.product?.title}</div>
              <img className="delete" alt="" src={recyle} onClick={handleDeleteClick}></img>
            </div>
            <div className=" p-2 d-flex flex-row justify-content-between">
                <div className=" d-flex flex-row justify-content-around" style={{width:"40%"}}>
                <button onClick={handleDecrease}>-</button>
                <div className="my-auto">{qty}</div>
                <button onClick={handleIncrese}>+</button>
                </div>

                <div >
                <p className="my-auto">
                  Price:<span>{item?.price}</span>
                  <span>L.E</span>
                  
                </p>
                </div>
              </div>
            
          </div>
        </div>
      
    )
}