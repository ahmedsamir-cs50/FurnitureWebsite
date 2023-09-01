import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { useState } from "react";
import { getAllProductsSearch } from "../../../redux/actions/productsAction";

export const SearchHook = () => {
  // const [search, setSearch]=useState()
  const [loading, setLoading] = useState();
  const [search, setSearch] = useState("");
  const [Data, setData] = useState();
  const Dispatch = useDispatch();

  const handleSearchWord = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  
  let sortWord ; let sort;
  const sortData = () => {
    if ( localStorage.getItem("sortValue") !==null) {
       sortWord = localStorage.getItem("sortValue");
    }
   
    switch (sortWord) {
      case "Best Selling":
        sort="-sold";
        break;
      case "Price low to high":
        sort ="+sold";
        break;
      case "Price high to low":
        sort="-sold";
        break;

      default:
        break;
    }
  };
 
  const getProduct =async()=>{
    setLoading(true);
    sortData();
    console.log("hello from sorthook")
    console.log(sort);
    await Dispatch(getAllProductsSearch(`keyword=${search}&sort=${sort}`));
    setLoading(false);
  }

  useEffect(() => {
    getProduct();  
  }, [search]);
  const res = useSelector((state) => state.allproducts.allProducts);
  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);
        setData(res.data);
        setLoading("");
      }
    }
  }, [loading]);
  return [handleSearchWord, Data,getProduct];
};
