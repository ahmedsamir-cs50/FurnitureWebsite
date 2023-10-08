import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminOrderDetalis from '../../Component/Admin/AdminOrderDetalis'
import AdminSideBar from '../../Component/Admin/AdminSideBar'
const AdminOrderDetalisPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminOrderDetalis />
                </Col>
            </Row>
        </Container>
    )
}

export default AdminOrderDetalisPage
