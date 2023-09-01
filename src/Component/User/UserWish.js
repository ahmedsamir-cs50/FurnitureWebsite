import React, { useEffect, useState } from 'react'
import recyle from '../../images/Assets/recycle-bin.png'
import alter from '../../images/Logos/tp_icon_made-in-usa_180x.webp'
import DeleteWishItem from '../hooks/Wish/Delete-WishItem'

const UserWish = ({item}) => {
  console.log(item)
  const[wishid,setWishId]=useState('')

 useEffect(() => {
  if(item)
  setWishId(item._id)
 }, [])
 
   console.log(wishid)
    const [handleDeleteClick]=DeleteWishItem(wishid)
  return (
    <div className="cart-item d-flex flex-row justify-content-start">
          <img   src={alter} alt=""></img>
          <div style={{width:"69%"}}>
            <div className=" p-2 ms-2 d-flex flex-row justify-content-between">
              <div className="product-name ">{item?.title}</div>
              <img className="delete" alt="" src={recyle} onClick={handleDeleteClick}></img>
            </div>
            <div className=" p-2 d-flex flex-row justify-content-between">
                

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

export default UserWish