import React, { useEffect, useState } from 'react'
import recyle from '../../images/Assets/recycle-bin.png'
import alter from '../../images/Logos/tp_icon_made-in-usa_180x.webp'
import DeleteWishItem from '../hooks/Wish/Delete-WishItem'

const UserWish = ({item}) => {

  const[wishid,setWishId]=useState('')
console.log(item)
 useEffect(() => {
  if(item)
  setWishId(item._id)
 }, [])
 
  
    const [handleDeleteClick]=DeleteWishItem(wishid)
  return (
    <div className="my-3 cart-item d-flex flex-row justify-content-start">
          <img   src={`http://127.0.0.1:8000/products/${item?.imageCover}`} alt=""></img>
          <div style={{width:"69%"}}>
            <div className=" p-2 ms-2 d-flex flex-row justify-content-between">
              <div className="product-name ">{item?.title}</div>
              <img className="delete" alt="" src={recyle} onClick={handleDeleteClick}></img>
            </div>
            <div className=" p-2 d-flex flex-row justify-content-between">
                

                <div >
                <p className="my-auto ms-1">
                  Price:<span>{item?.price}</span>
                  <span>L.E</span>
                  
                </p>
                </div>
              </div>
            
          </div>
        </div>
  )
}

export default UserWish