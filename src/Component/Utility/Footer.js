import React from "react";
import { Col, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <div className="Footer">
      <Row>
        <Col sm={12} md={2}>
            <div>
          <p>SHOP</p>
          <ul>
            <li>Wallpaper</li>
            <li>Wall Murals</li>
            <li>Wall Decals</li>
            <li>Custom</li>
            <li>Rugs</li>
          </ul>
          </div>
        </Col>
        <Col sm={12} md={2}>
            <div>
          <p> DISCOVER</p>
          <ul>
            <li>How-To's</li>
            <li> Reviews </li>
            <li> Blog </li>
            <li> Press </li>
            <li> FAQs </li>
            <li> About Us </li>
            <li> Customer Gallery </li>
          </ul>
          </div>
        </Col>
        <Col sm={12} md={2}>
            <div>
          <p>COMPANY</p>
          <ul>
            <li>Customer Service</li>
            <li>Find a Stockist or Installer</li>
            <li>Current Promotions</li>
            <li>Shipping & Returns</li>
            <li>Accessibility Statement</li>
          </ul>
          </div>
        </Col>
        <Col sm={12} md={2}>
            <div>
          <p>CONTACT</p>
          <ul>
            <li>Contact Us</li>
            <li> Chat With Us</li>
            <li> Affiliate Program</li>
            <li> Privacy Policy</li>
            <li> Terms Of Use</li>
          </ul>
          </div>
        </Col>
        <Col sm={12} md={3}>
            <div>
          <p>TEMPAPER IN YOUR INBOX.</p>
          <p className="pspecial">
            Get decor inspiration and style advice delivered to your inbox
            weekly.
          </p>
          <input className="input" type="email" placeholder="Enter your Email"></input>
          </div>
        </Col>
        </Row>
        <p className="CopyRights">© 2023 . all rights reserved.</p>
     
    </div>
  );
};
