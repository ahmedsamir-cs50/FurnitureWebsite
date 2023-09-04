import React from "react";
import { updateCartItem } from "../../../redux/actions/cartAction";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteCartItem } from "../../../redux/actions/cartAction";
import GetUserCart from "./getUserCart";
import notify from "../useNotifaction";
const ModifyCartItem = (item,qty) => {
  
  const dispatch = useDispatch();
  
  const [LoadingUpdate, setLoadingUpdate] = useState();
  


  const handeleUpdateCart = async () => {
    setLoadingUpdate(true);
    await dispatch(
      updateCartItem(item?._id, {
        count: qty,
      })
    );
    setLoadingUpdate(false);
  };

  useEffect(() => {
    handeleUpdateCart();
    return ()=>{
    }
  }, [qty]);
  const resUpdate = useSelector((state) => state.cartReducer.updateItem);
  useEffect(() => {
    if (LoadingUpdate === false)
      if (resUpdate) 
    console.log(resUpdate?.data);
  }, [LoadingUpdate]);

  

  return [];
};

export default ModifyCartItem;
