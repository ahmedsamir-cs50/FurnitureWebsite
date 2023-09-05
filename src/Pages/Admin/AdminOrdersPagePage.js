import React from 'react'
import AdminSideBar from '../../Component/Admin/AdminSideBar';
import { Col, Container, Row } from 'react-bootstrap';
import AdminAllOrders from '../../Component/Admin/AdminAllOrders';

const AdminOrdersPage = () => {
  return (
    <Container >
    <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
            <AdminSideBar />
        </Col>

        <Col sm="9" xs="10" md="10">
            <AdminAllOrders />
        </Col>
    </Row>
</Container>
  )
}

export default AdminOrdersPage;
