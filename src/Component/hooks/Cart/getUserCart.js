import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUserCartItems } from '../../../redux/actions/cartAction'
import { useState } from 'react'
import ModifyCartItem from './Modify-Cart-Item'

const GetUserCart = () => {
    const  [, , , ,LoadingUpdate,LoadingDelete,id]=ModifyCartItem()
const Dispatch=useDispatch()
const [loading,setLoading]=useState(true)
const [CartItems,setCartItems]=useState()
const [ItemsNum,setItemsNum]=useState()
const [TotalCartPrice,setTotalCartPrice]=useState()
const [CartID,setCartID]=useState()

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
        setItemsNum(res.numOfCartItems)
        setTotalCartPrice(res.data?.totalCartPrice)
        setCartID(res.data?._id)
        console.log("hello from use effect") 
        setCartItems(res?.data)
        console.log(res?.data)
    }, [loading])
    
    
  return [CartItems]
}

export default GetUserCart;