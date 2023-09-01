// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { deleteCartItem } from '../../../redux/actions/cartAction'
// import { useEffect } from 'react'
// import GetUserCart from './getUserCart'

// const DeleteCartItem = (id) => {
//     const Dispatch=useDispatch()
//     const [loading,setloading]= useState()
//   const handleDeleteClick=async()=>{
// setloading(true)
//     await Dispatch(deleteCartItem(id))
//     setloading(false)
//   }
//   const res= useSelector((state)=>state.cartReducer.deleteItem)
//   useEffect(() => {
// if(loading===false)
// if(res)
// setTimeout(() => {
//  const[] =GetUserCart()
// }, 500);
// console.log(res.data)
//   }, [loading])
//   return[handleDeleteClick]
// }

// export default DeleteCartItem