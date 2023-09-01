import React from 'react'

const AdminSubCategory = () => {
  return (
    <Container >
    <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
            <AdminSideBar />
        </Col>

        <Col sm="9" xs="10" md="10">
            <AdminAddSubCategory />
        </Col>
    </Row>
</Container>
  )
}

export default AdminSubCategory
