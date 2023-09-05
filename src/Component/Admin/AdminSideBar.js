import React from 'react'
import { Link } from 'react-router-dom'
import { LogOutHook } from '../hooks/Auth/logOut-hook'

const AdminSideBar = () => {
   const [handleLogOut]=LogOutHook()
  return (
    <div className="sidebar">
            <div className="d-flex flex-column">
                <Link to="/admin/allorders" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                        Orders
                    </div>
                </Link>
                <Link to="/admin/allproducts" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                       Products
                    </div>
                </Link>
                <Link to="/admin/addbrand" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                       Brands
                    </div>
                </Link>

                <Link to="/admin/addcategory" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        Add Category
                    </div>
                </Link>

                <Link to="/admin/addsubcategory" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                      Add Subcategory
                    </div>
                </Link>
                <Link to="/admin/addproduct" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                       Add Product
                    </div>
                </Link>
                <Link to='/'>
                <button onClick={handleLogOut} className='btn btn-dark mx-auto mt-5 p-2' style={{width:"90%",letterSpacing:"3px",borderRadius:"0"} }>Log Out</button>
                </Link>
            </div>
        </div>
  )
}

export default AdminSideBar
