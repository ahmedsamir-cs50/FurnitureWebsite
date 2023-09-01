import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../../redux/actions/cartAction";
import { useEffect } from "react";
import { addProductToWishList } from "../../../redux/actions/wishListAction";
import notify from "../useNotifaction";

const ADDTOWISHLIST = (productId) => {
  const [loading, setLoading] = useState();

  const Dispatch = useDispatch();

  const handleWishClick = async (e) => {
    e.preventDefault();
    if(localStorage.getItem("user") !==null){
    setLoading(true);

    await Dispatch(
        addProductToWishList({
        productId: productId,
      })
    );
    setLoading(false)}
    else{
      notify("please login first","warn")
    };
  };
  const res = useSelector((state) => state.addToWishListReducer.addWishList);

  useEffect(() => {
    if (loading === false) if (res) console.log(res);
  }, [loading]);

  return [handleWishClick]
  
};

export default ADDTOWISHLIST;
