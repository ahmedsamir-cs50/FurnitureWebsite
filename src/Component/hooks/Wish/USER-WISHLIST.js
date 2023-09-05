import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUserCartItems } from '../../../redux/actions/cartAction'
import { useState } from 'react'
import { getProductWishList } from '../../../redux/actions/wishListAction'

const USERWISHLIST = () => {
const Dispatch=useDispatch()
const [loading,setLoading]=useState()
const [WishItems,setWishItems]=useState()

const get = async () => {
    
    setLoading(true)
    await Dispatch(getProductWishList());
    setLoading(false)
}
    useEffect(() => {
        get();
    }, [])
    const res=useSelector(state=>state.addToWishListReducer.allWishList)
    
 
    useEffect(() => {
        if(loading===false) 
        if(res)
        setWishItems(res?.data)
        console.log(res.data)
    }, [loading])
    
    
  return [WishItems,loading]
}

export default USERWISHLIST;