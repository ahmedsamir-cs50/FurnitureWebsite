import { Col, Row } from "react-bootstrap";
import { CartItem } from "./CartItem";
import GetUserCart from "../hooks/Cart/getUserCart";
import close from "../../images/Assets/close.png";
import { useEffect } from "react";
import { useState } from "react";
import ClearCart from "../hooks/Cart/ClearCart";
import { Link } from "react-router-dom";

export const Cart = ({ handleclose, handleCheckClick }) => {
  const [CartItems] = GetUserCart();
  const [handleClearClick, clearCart] = ClearCart();
  console.log(CartItems);
  let id = CartItems?._id;

  return (
    <>
      <Row className="Cart d-flex  justify-content-end">
        <Col className=" pe-0 me-0" md={4} sm={12}>
          <div className="cart-wrapper">
            <div className=" p-2 d-flex flex-row justify-content-between">
              <h4 className="mx-auto">Your Cart</h4>
              <img
                className="close-button"
                src={close}
                onClick={handleclose}
                alt=""
              ></img>
            </div>
            {CartItems ? (
              !clearCart && CartItems.products?.length > 0 ? (
                <>
                  {CartItems.products.map((item, index) => (
                    <CartItem key={index} item={item} />
                  ))}
                  <button
                    onClick={handleClearClick}
                    className="btn btn-dark ms-3 mt-5 p-2"
                    style={{
                      width: "90%",
                      letterSpacing: "3px",
                      borderRadius: "0",
                    }}
                  >
                    CLEAR CART
                  </button>
                  <Link to={`/checkOut/${id}`}>
                    <button
                      onClick={handleCheckClick}
                      className="btn btn-dark ms-3 mt-2 p-2"
                      style={{
                        width: "90%",
                        letterSpacing: "3px",
                        borderRadius: "0",
                      }}
                    >
                      PROCEED TO CHECKOUT
                    </button>
                  </Link>
                </>
              ) : (
                <h6 className="text-center">Your Cart is Empty</h6>
              )
            ) : (
              <h5 className="text-center">loading</h5>
            )}
          </div>
        </Col>
      </Row>
    </>
  );
};
