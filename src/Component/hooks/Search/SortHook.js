import { useEffect } from "react";
import { useState } from "react"
import { SearchHook } from "./SearchHook";

export const SortHook =()=>{
  const [sortWord,setsortWord] = useState();
   const [ , Data,getProduct]=SearchHook()
   const handleChangeSort=(e)=>{
    // console.log(e.value);
    localStorage.setItem('sortValue', e.value);
    setsortWord(e.value);
  }
  
  useEffect(() => {
    console.log("hello");
    console.log(sortWord)
    getProduct();
  }, [sortWord])
  return[handleChangeSort,Data]
}