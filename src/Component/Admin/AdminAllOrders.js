import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAllOrdersItem from './AdminAllOrdersItem'

import Pagination from '../Utility/Pagination';
import UserGetAllOrderHook from '../../Component/hooks/User/AllUsersOrders';

const AdminAllOrders = () => {
    const [userName, results, paginate, orderData, onPress] = UserGetAllOrderHook()

    return (
        <div>
            <div className='admin-content-text'>  Manage All Orders</div>
            <Row className='justify-content-evenly d-flex flex-row'>

                {
                    orderData.length >= 1 ? (orderData.map((orderItem, index) => {
                        return <AdminAllOrdersItem key={index} orderItem={orderItem} />
                    })) : <h6> No Orders   </h6>
                }

                {
                    paginate.numberOfPages >= 2 ? (<Pagination onPress={onPress} pageCount={paginate.numberOfPages ? paginate.numberOfPages : 0} />) : null
                }
            </Row>
        </div>
    )
}

export default AdminAllOrders

