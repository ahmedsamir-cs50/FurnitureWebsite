import React from 'react'
import { CartItem } from './CartItem'
import GetUserCart from '../hooks/Cart/getUserCart';

const CartDetails = () => {
    const [CartItems ]=GetUserCart();
  return (
    <div className='shippingCart my-5 '>
         {
  CartItems ? (
    CartItems.products?.length > 0 ? (
      <>
        {CartItems.products.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
        
      </>
    ) : (
      <h6 className="text-center">Your Cart is Empty</h6>
    )
  ) : (
    <h5 className="text-center">loading</h5>
  )
}
    </div>
  )
}

export default CartDetails