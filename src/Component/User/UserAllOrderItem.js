import React from 'react'
import { Row, Col } from 'react-bootstrap'
import mobile from '../../images/Assets/avatar.png'
// import UserAllOrderCard from './UserAllOrderCard'
import { CartItem } from '../Cart/CartItem'
const UserAllOrderItem = ({ orderItem }) => {
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "numeric", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }
    return (
        <div className="user-order mt-2">
            <Row>
                <div className="py-2 order-title"> Order No #{orderItem.id || 0} ...on Date {formatDate(orderItem.createdAt)}</div>
            </Row>
            {
                orderItem.cartItems ? (orderItem.cartItems.map((item, index) => {
                    return <CartItem key={index} item={item} />
                })) : null
            }

            <Row className="d-flex justify-content-evenly">
                <Col xs="9" className="d-flex">
                    <div>
                        <div className="d-inline"> Delivery Status</div>
                        <div className="d-inline mx-2 stat">{orderItem.isDelivered === true ? 'Done ' : 'Not yet  '}</div>
                    </div>
                    <div>
                        <div className="d-inline"> Payment Status</div>
                        <div className="d-inline mx-2 stat">{orderItem.isPaid === true ? 'Done ' : 'Not yet  '}</div>
                    </div>

                    {/* <div>
                        <div className="d-inline">Payment method </div>
                        <div className="d-inline mx-2 stat">{orderItem.paymentMethodType === 'cash' ? 'كاش' : 'بطاقة ائتمانية'}</div>
                    </div> */}
                </Col>
                <Col xs="3" className="d-flex justify-content-end">
                    <div>
                        <div className="barnd-text">{orderItem.totalOrderPrice || 0} L.E</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllOrderItem
