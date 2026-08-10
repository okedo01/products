import React from 'react'
import CartItem from './CartItem';

export default function Cart({ cart, removeItem }) {
  const totalQuantity = cart.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  const total = cart.reduce((sum, item) => {
    return sum + item.quantity * item.product.price;
  }, 0);

  return (
    <aside className='cart'>
      <p>Your Cart({totalQuantity})</p>
      {cart.length === 0 ?
        (<p>Your added items will appear here</p>) : (
          <div>
            {cart.map(item => (
              <CartItem key={item.product.name} item={item} removeItem={removeItem} />
            ))}
          </div>
        )}
      <p>Total: {total}</p>
    </aside>
  )
}