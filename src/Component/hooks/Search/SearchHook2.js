// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from "react-redux";


// import { useState } from 'react';
// import { getAllProductsSearch } from '../../../redux/actions/productsAction';

// const ViewSearchProductsHook = () => {
//     const [search, setSearch] = useState();

//     let limit = 8;
//     const dispatch = useDispatch();
//     const handleSearchWord = (e) => {
//         e.preventDefault();
//         setSearch(e.target.value);
//       };

//     const getProduct = async () => {
//         sortData();

//         await dispatch(getAllProductsSearch(`sort=${sort}&keyword=${search}&limit=${limit}`));
//     }
//     useEffect(() => {
//         getProduct()
//     }, [])

//     const allProducts = useSelector((state) => state.allproducts.allProducts)

//     let items = []; let pagination = []; let results = 0;
//     try {
//         if (allProducts.data)
//             items = allProducts?.data;
//         else
//             items = []
//     } catch (e) { }
//     try {
//         if (allProducts?.paginationResult)
//             pagination = allProducts.paginationResult.numberOfPages;
//         else
//             pagination = []
//     } catch (e) { }
//     try {
//         if (allProducts?.results)
//             results = allProducts.results;
//         else
//             results = 0
//     } catch (e) { }

//     //when click pagination
//     const onPress = async (page) => {
        
//         sortData();
//         await dispatch(getAllProductsSearch(`sort=${sort}&page=${page}`))
//     }
   
//     let sortType = "", sort;
//     ///when user choose sort type
//     const sortData = () => {
//         const sortWord = localStorage.getItem("sortValue");
        
//        console.log(sortWord);
//         switch (sortWord) {
//           case "Best Selling":
//             sortType= "-sold";
    
//             break;
          
//           case "Price low to high":
//             sortType="+sold";
//             break;
//           case "Price high to low":
//             sortType="-sold";
//             break;
    
//           default:
//             break;
//         }


//     return [items, pagination, onPress, getProduct, results,handleSearchWord]

// }}

// export default ViewSearchProductsHook;