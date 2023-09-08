import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import notify from '../useNotifaction'
import { createOrderCash } from '../../../redux/actions/checkoutAction'
import { useEffect } from 'react'

const CheckOutHook = (id) => {
    
    const [phone ,setPhone]=useState('')
    const [city ,setCity]=useState('')
    const [postalCode,setPostalCode]=useState('')
    const [details,setDetails]=useState('')
    const [loading,setLoading]=useState(true)
    const dispatch =useDispatch()
    const handlePhoneChange =(e)=>{
setPhone(e.target.value)
    }
    const handleCityChange =(e)=>{
setCity(e.target.value)
    }
    const handlePostalCodeChange =(e)=>{
        setPostalCode(e.target.value)
    }
    const handleDetailsChange =(e)=>{
        setDetails(e.target.value)
    }
    const handleCheckOutClick =async(e)=>{
        e.preventDefault();
        setLoading(true);
        await dispatch(createOrderCash(id,{
            shippingAddress: {
            details: details,
            phone:phone,
            city:city,
            postalCode:postalCode}
        }))
        setLoading(false)
    }
    const res =useSelector(state=>state.checkoutReducer.createOrderCash)
    useEffect(() => {
      
      if(loading===false && res ){
      notify("Order Has Been Done","success")
      console.log(res)
      setTimeout(() => {
        window.location.href="/"
      }, 500);
     }
    }, [loading])
    
  return [handlePhoneChange,handleCityChange,handlePostalCodeChange,handleDetailsChange,handleCheckOutClick]
}

export default CheckOutHook;