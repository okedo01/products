import React from 'react'
import CartItem from './CartItem';

export default function Cart({ cart, removeItem, orderTotal }) {
  const totalQuantity = cart.reduce((sum, item) => {
    return sum + item.quantity;
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
      <p className='flex justify-between'>Order Total: <strong>${orderTotal.toFixed(2)}</strong> </p>
      <div className='carbon-neutral'>
        <img src="icon-carbon-neutral.svg" alt="carbon" />
        <p>This is a <strong>carbon-neutral</strong> delivery</p>
      </div>
      <button className='confirm-btn'>Confirm Order</button>
    </aside>
  )
}