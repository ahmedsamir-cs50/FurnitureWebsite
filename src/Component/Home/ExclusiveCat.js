import React from "react";
import { Data } from "../Data/Data";
import { Row, Col } from "react-bootstrap";

export const ExclusiveCat = () => {
  return (
    <Row className=" Exclusive d-flex justify-content-between flex-row">
      {Data?.Category.slice(-2).map((item, index) => {
        return (
          <Col key={index} xs={12} md={6}>
            <div>
              <img src={item.img}></img>
            </div>
            <p>{item.name}</p>
            <h6>{item.details}</h6>
          </Col>
        );
      })}
      <div className='exclusive-buttons  d-flex justify-content-around flex-row'>
        <button>shop new arrivals</button>
        <button>Shop Grasscloth</button>
      </div>
    </Row>
  );
};
