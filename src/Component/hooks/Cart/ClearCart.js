import React, { useEffect, useState } from 'react'
import { clearAllCartItem } from '../../../redux/actions/cartAction'
import { useDispatch } from 'react-redux'

const ClearCart = () => {
    const [loading,setloading]= useState()
    const Dispatch=useDispatch()
    const [clearCart,setClearCart] = useState()
    const handleClearClick = async() => {
       
        setloading(true)
        await Dispatch(clearAllCartItem())
        setloading(false)

    }
    useEffect(() => {
      if(loading === false) 
      setClearCart(true)
    
    }, [loading])
    

  return [handleClearClick,clearCart]
}

export default ClearCart
