import { useDispatch, useSelector } from "react-redux"
import { getOneProduct } from "../../../redux/actions/productsAction";
import { useState } from "react";
import { useEffect } from "react";

export const ProductDetailsHook =(id)=>{
    // const [Data,setData]=useState()
    const [loading,setLoading]=useState()
    const Dispatch=useDispatch();
    const ProductDetails =async()=>{
        try{
        setLoading(true)
      
await Dispatch(getOneProduct(id))
setLoading(false)
}catch(e){}
    }
    useEffect(() => {
        ProductDetails()
    }, [])
    const res=useSelector(state=>state.allproducts.oneProduct);
    let Data;
    useEffect(() => {
   if(loading===false) 
   if(res){

   }
    }, [loading])
    Data=res.data;
    return[Data]
}