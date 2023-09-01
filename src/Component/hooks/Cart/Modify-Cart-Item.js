import React from "react";
import { updateCartItem } from "../../../redux/actions/cartAction";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteCartItem } from "../../../redux/actions/cartAction";
import GetUserCart from "./getUserCart";
const ModifyCartItem = (item) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(item?.count);
  const [loading1, setLoading1] = useState();
  const [loading2, setLoading2] = useState();
  console.log(qty);
  const handleIncrese = (e) => {
    e.preventDefault();
    setQty((qty) => qty + 1);
  };
  const handleDecrease = (e) => {
    e.preventDefault();
    if (qty !== 1) setQty((qty) => qty - 1);
  };

  const handeleUpdateCart = async () => {
    setLoading1(true);
    await dispatch(
      updateCartItem(item?._id, {
        count: qty,
      })
    );
    setLoading1(false);
  };

  useEffect(() => {
    handeleUpdateCart();
  }, [qty]);
  const res1 = useSelector((state) => state.cartReducer.updateItem);

  const handleDeleteClick = async () => {
    setLoading2(true);
    await dispatch(deleteCartItem(item._id));
    setLoading2(false);
  };
  const res2 = useSelector((state) => state.cartReducer.deleteItem);
  useEffect(() => {
    if (loading1 === false)
      if (res1) 
    console.log(res1.data);
  }, [loading1]);
  useEffect(() => {
    if (loading2 === false)
      if (res2)
    console.log(res2.data);
  }, [loading2]);
  // useEffect(() => {
  //  if(loading=== false)
  //  if(res)
  //  console.log(res)
  // }, [loading])

  return [handleIncrese, handleDecrease, qty, handleDeleteClick];
};

export default ModifyCartItem;
