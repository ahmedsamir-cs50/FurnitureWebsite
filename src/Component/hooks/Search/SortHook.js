import { useEffect } from "react";
import { useState } from "react"
import { SearchHook } from "./SearchHook";

export const SortHook =()=>{
  const [sortWord,setsortWord] = useState();
   const [ , Data,getProduct]=SearchHook()
   const handleChangeSort=(e)=>{
    // //(e.value);
    localStorage.setItem('sortValue', e.value);
    setsortWord(e.value);
  }
  
  useEffect(() => {
   
   
    getProduct();
  }, [sortWord])
  return[handleChangeSort,Data]
}