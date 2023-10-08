import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CartItem from "../Cart/CartItem";
import UserAllOrderItem from "../../Component/User/UserAllOrderItem";
import { ToastContainer } from "react-toastify";
import GetOrderDetalisHook from "../hooks/Admin/get-order-detalis-hook";
import ChangeOrderStatusHook from "../hooks/Admin/change-order-status-hook";

const AdminOrderDetalis = () => {
  const { id } = useParams();
  const [orderData, cartItems] = GetOrderDetalisHook(id);

  const [
    formatDate,
    onChangePaid,
    changePayOrder,
    onChangeDeliver,
    changeDeliverOrder,
  ] = ChangeOrderStatusHook(id);

  return (
    <div>
      <UserAllOrderItem orderItem={orderData} />

      <Row className="justify-content-center mt-4 user-data">
        <Col sm={12}>
          <Card
            className="Item-Card bg-dark text-light my-3 mx-auto"
            style={{  fontSize: "16px", textAlign: "start",width:"80%" }}
          >
            <Card.Body>
              <Card.Title> Order No #{orderData.id}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Name: {orderData?.user?.name || ""}
              </Card.Subtitle>
              <Card.Text>E-mail:{orderData?.user?.email || ""}</Card.Text>
              <Card.Text>
                isDelivered:{" "}
                {orderData?.isDelivered === true ? " Done" : "Not Yet  "}
              </Card.Text>
              <Card.Text>
                Payment:{" "}
                {orderData?.isPaid === true ? " Paid" : "Not Yet paid  "}
              </Card.Text>
              <Card.Text>{orderData?.totalOrderPrice || 0} L.E</Card.Text>
              <Card.Text>
                <select
                  name="pay"
                  id="paid"
                  onChange={onChangePaid}
                  className=" bg bg-secondary mt-1 text-center w-50 p-0"
                >
                  <option value="0">Payment</option>
                  <option value="true">Done</option>
                  <option value="false">Not yet </option>
                </select>
                <Button
                  onClick={changePayOrder}
                  className="btn btn-secondary  d-inline mx-2 "
                >
                  Save{" "}
                </Button>
              </Card.Text>
              <Card.Text>
                <select
                  onChange={onChangeDeliver}
                  name="deliver"
                  id="deliver"
                  className="select input-form-area mt-1 bg bg-secondary  text-center  w-50 "
                >
                  <option value="0">isDelivered</option>
                  <option value="true">Done</option>
                  <option value="false"> Not yet</option>
                </select>
                <Button
                  onClick={changeDeliverOrder}
                  className="btn btn-secondary  d-inline mx-2 "
                >
                  Save{" "}
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminOrderDetalis;
