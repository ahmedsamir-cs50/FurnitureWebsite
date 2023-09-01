import React, { useEffect, useState } from "react";
import { Row, Col, ToastContainer } from "react-bootstrap";
import logo from "../../images/Tempaper_and_Co_Logo_280x.jpg";
import search from "../../images/icons8-search.svg";
import person from "../../images/icons8-person-50.png";
import bag from "../../images/icons8-bag-50.png";
import menu from "../../images/menu.png";


import "./nav.css";
import { Link } from "react-router-dom";
import GetUserCart from "../hooks/Cart/getUserCart";
import { Cart } from "../Cart/Cart";
import notify from "../hooks/useNotifaction";
export const NavBar = ({HandleClick}) => {
  const [CartItems,get]=GetUserCart()
  const [nav, setNav] = useState(false);
  const [path, setPath] = useState();
  const [user, setUser] = useState("");
  const [showCart,setShowCart]=useState(false);
  const handlebagclick=()=>{
    console.log(user)
    if (user !== ""){
    setShowCart(!showCart)}
    else{
      notify("please login first","warn")
    }
  }
  const handleclose=()=>{
    setShowCart(false)
  }
  // const [showSearch, setShowSearch] = useState(false);
  // const changeNav =()=>{

  //   if(window.scrollY >= 50){
  //      setNav(true)

  //   }else{
  //     setNav(false)

  //   }
  // }
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  });

  const [collapse, setCollapse] = useState(false);
  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  useEffect(() => {
    if (localStorage.getItem("user") !== null)
      setUser(JSON.parse(localStorage.getItem("user")))
    else setUser("");
  }, []);
  // const HandleSeachClick=()=>{
  //   setShowSearch(!showSearch)
  // }
 
  useEffect(() => {
  
    switch (user?.role) {
      case "user":
        setPath("/userpage")
        break;
    case "admin":
      setPath("/admin/allorders")
      break;
      default:
        setPath("/login")
        break;
    }
  }, [user])

  
  return (
    <>
    <Row className={nav ? "StickyNav" : "nav"}>
      {/* <SearchComponent /> */}
     
      <Col
        sm={5}
        md={6}
        lg={4}
        className="logo d-flex align-items-center justify-content-center"
      >
        <Link to="/" className="brandName">
        <div>
          <h1 style={{letterSpacing:"1px",fontWeight:"bold"}}>EnhantDécor</h1>
        </div>
        </Link>
      </Col>
      <Col sm={6} md={6} lg={2} className="icons">
        <div>
          <img
            className="nav-button"
            onClick={handleCollapse}
            src={menu}
            alt=""
          ></img>
        </div>
        <div>
              <Link to={path}>
                <img src={person} alt=""></img>{" "}
              </Link>
            </div>
        
        <div onClick={HandleClick}>
          <img src={search} alt=""></img>
        </div>
        <div onClick={handlebagclick}>
          <img src={bag} alt=""></img>
        </div>
      </Col>

      <Col
        md={12}
        lg={6}
        className={collapse ? "Nav-links-Collapsed " : "Nav-links"}
      >
        <ul className=" d-flex align-items-center justify-content-evenly">
          <li>Wallpaper</li>
          <li>Wall Murals</li>
          <li>Wall Decals</li>
          <li>Custom</li>
          <li>Rugs</li>
          <li>Sale</li>
        </ul>
      </Col>
      
    
    </Row>
     {showCart? <Cart handleclose={handleclose}/> : null}
     <ToastContainer/>
     </>
  );
};
