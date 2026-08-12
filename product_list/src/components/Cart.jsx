import React from 'react'
import CartItem from './CartItem';
import emptyCart from "../icons-and-images/illustration-empty-cart.svg"
import carbonNeutral from "../icons-and-images/icon-carbon-neutral.svg"

export default function Cart({ cart, removeItem, orderTotal, orderConfirmed }) {
  const totalQuantity = cart.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  return (
    <aside className='cart'>
      <p className='text-red-500 text-lg font-bold'>Your Cart({totalQuantity})</p>
      {cart.length === 0 ?
        (<div>
          <img src={emptyCart} />
          <p>Your added items will appear here</p>
        </div>) : (
          <div>
            <div>
              {cart.map(item => (
                <CartItem key={item.product.name} item={item} removeItem={removeItem} />
              ))}
            </div>
            <p className='flex justify-between'>Order Total: <strong>${orderTotal.toFixed(2)}</strong> </p>
            <div className='carbon-neutral'>
              <img src={carbonNeutral} />
              <p className='text-gray-600'>This is a <strong>carbon-neutral</strong> delivery</p>
            </div>
            <button onClick={() => orderConfirmed()} className='confirm-btn'>Confirm Order</button>
          </div>
        )}
    </aside>
  )
}