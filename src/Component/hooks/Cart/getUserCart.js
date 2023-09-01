import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUserCartItems } from '../../../redux/actions/cartAction'
import { useState } from 'react'

const GetUserCart = () => {
const Dispatch=useDispatch()
const [loading,setLoading]=useState(true)
const [CartItems,setCartItems]=useState()

const get = async () => {
    
    setLoading(true)
    await Dispatch(getAllUserCartItems());
    setLoading(false)
}
    useEffect(() => {
        get();
    }, [])
    const res=useSelector(state=>state.cartReducer.getAllUserCart)
    
 
    useEffect(() => {
        if(loading===false) 
        if(res)
        console.log("hello from use effect")
        
        setCartItems(res?.data)
        console.log(res?.data)
    }, [loading])
    
    
  return [CartItems]
}

export default GetUserCart;