import React, { useState } from 'react'
import { NavBar } from './Component/Utility/NavBar'
import { HomePage } from './Pages/Home/HomePage'
import { NavBar2 } from './Component/Utility/NavBar2'
import { Footer } from './Component/Utility/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./index.css"
import LoginPage from './Pages/Auth/LoginPage'
import SignUpPage from './Pages/Auth/SignUpPage'
import AdminOrdersPage from './Pages/Admin/AdminOrdersPagePage'
import AdminAddCategoryPage from './Pages/Admin/AdminAddCategoryPage'
import AdminAddProductsPage from './Pages/Admin/AdminAddProductsPage'
import SearchComponent from './Component/Utility/SearchComponent'
import { CategoryPage } from './Pages/Category/CategoryPage'
import { ProductsPage } from './Pages/Products/ProductsPage'
import ProductPage from './Pages/Products/ProductPage'
import UserPage from './Pages/User/UserPage'
export const App = () => {
  const [showSearch, setShowSearch] = useState();
  const HandleClick=()=>{
    setShowSearch(true);  
  }
  const HandleClose=()=>{
    setShowSearch(false);  
    
  }
  const handleSearchCardClick=()=>{
    setShowSearch(false);  
    
  }
  return (
   
    <div className='project-wrapper'>
       <BrowserRouter>
       
     {showSearch ?<SearchComponent HandleClose={HandleClose} handleSearchCardClick={handleSearchCardClick}/> :
     <>
     <NavBar HandleClick={HandleClick} />
     <Routes>
   
    <Route index element={<HomePage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/signUp' element={<SignUpPage/>}/>
    <Route path="/admin/allorders" element={<AdminOrdersPage />} />
    <Route path="/admin/addcategory" element={<AdminAddCategoryPage/>} />
    <Route path="/admin/addproduct" element={<AdminAddProductsPage/>} />
    <Route path='/categories' element={<CategoryPage/>}/>    
    <Route path='/products/category/:id' element={<ProductsPage/>}/>    
    <Route path='product/:id' element={<ProductPage />}/>    
    <Route path='/userpage' element={<UserPage />}/>    
   
    </Routes>
    </>
     }  
       
    <Footer/>
    </BrowserRouter>
  </div>
  )
}
