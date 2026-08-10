import React from 'react'

export default function Cart({cart}) {
const totalQuantity = cart.reduce((sum, item) => {
  return sum + item.quantity;
}, 0)
  
  return (
    <aside className='cart'>
      <p>Your Cart({totalQuantity})</p>
    </aside>
  )
}