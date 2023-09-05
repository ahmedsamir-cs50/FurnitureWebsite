import  { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useEffect } from 'react'

import { getProductWishList, removeProductToWishList } from '../../../redux/actions/wishListAction'

const DeleteWishItem = (id) => {
    console.log(id)
    const Dispatch=useDispatch();
    const [loading,setloading]= useState()
  const handleDeleteClick=async()=>{
    setloading(true)
    if(id)
    await Dispatch(removeProductToWishList(id))
    
    setloading(false)
  }
  const res= useSelector((state)=>state.addToWishListReducer.removeWishList)
  useEffect(() => {
if(loading===false)
if(res)
setTimeout(() => {
  window.location.reload(true);
}, 500);
console.log(res.data)
  }, [loading])
  return[handleDeleteClick]
}

export default DeleteWishItem;