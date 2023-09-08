import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart } from '../../../redux/actions/cartAction'
import { useEffect } from 'react'
import notify from '../useNotifaction'

const AddtoCart = (productId) => {
    const [qty,setQty] = useState(1)
  const [color,setColor] = useState("")
  const [loading,setLoading] = useState("")
  const [indexColor,setIndexColor] =useState(0)
  const [showCart,setShowCart] =useState(false)
  const Dispatch=useDispatch()
  const colorClick = (index, color) => {
    setIndexColor(index)
    setColor(color)
  }
  const handleIncrese=(e)=>{
e.preventDefault();
setQty((qty)=>qty+1)
  }
  const handleDecrease=(e)=>{
e.preventDefault();
if(qty >=2)
setQty((qty)=>qty-1)
  }
  const handleClose =()=>{
    setShowCart(false)
  }
  const handleCartClick=async(e)=>{
    e.preventDefault()
    if(localStorage.getItem("user") !==null){
    setLoading(true)
   
    await Dispatch(addProductToCart({
        productId:productId,
        color:color
    }))
    setLoading(false)
   
  }else{
      notify("please login first","warn")
    }
  }
  const res =useSelector(state=>state.cartReducer.addToCart)
  
  useEffect(() => {
    if(loading ===false) 
    if(res)
   
    notify("Item Added to Your Cart","success")
    console.log(res)
    setLoading("")
  }, [loading])
  
  return [qty,color,indexColor,showCart,colorClick,handleIncrese,handleDecrease,handleCartClick,handleClose]
}

export default AddtoCart