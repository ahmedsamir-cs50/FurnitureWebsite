import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartItem, getAllUserCartItems } from '../../../redux/actions/cartAction'
import { useEffect } from 'react'
import GetUserCart from './getUserCart'

const DeleteCartItem = (item) => {
    
   
    const Dispatch=useDispatch()
    const [loading,setloading]= useState()
  const handleDeleteClick=async()=>{
    const id=item?._id
   
setloading(true)
    await Dispatch(deleteCartItem(id))
    window.location.reload(false)
    await Dispatch(getAllUserCartItems());
    setloading(false)
  }
  const res= useSelector((state)=>state.cartReducer.deleteItem)
  useEffect(() => {
    if(loading === false)
    window.location.reload(false)
    setloading("")
  }, [loading])
  

  return[handleDeleteClick]
}

export default DeleteCartItem