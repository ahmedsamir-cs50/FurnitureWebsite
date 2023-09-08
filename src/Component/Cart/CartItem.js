
import React, { useEffect, useState } from "react"
import recyle from '../../images/Assets/recycle-bin.png'
import alter from '../../images/Logos/tp_icon_made-in-usa_180x.webp'
import DeleteCartItem from "../hooks/Cart/Delete-Cart-Item"
import ModifyCartItem from "../hooks/Cart/Modify-Cart-Item"

export const CartItem=({item})=>{
  const [qty, setQty] = useState(item?.count);
  const handleIncrese = (e) => {
    e.preventDefault();
    setQty((qty) => qty + 1);
  };
  const handleDecrease = (e) => {
    e.preventDefault();
    if (qty !== 1) setQty((qty) => qty - 1);
  };

 
 
 const  []=ModifyCartItem(item,qty)
 const [handleDeleteClick]=DeleteCartItem(item)
 
    return(
       
        <div className="cart-item my-2 d-flex flex-row justify-content-start">
          <img  className="ms-2" src={`http://127.0.0.1:8000/products/${item?.product?.imageCover}`} alt=""></img>
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