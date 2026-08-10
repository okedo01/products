import React from 'react'

export default function CartItem({ item, removeItem }) {
  const totalItem = item.quantity * item.product.price;

  return (
    <div>
      <h2>{item.product.name}</h2>
      <div className='flex justify-between items-center'>
        <div className='items-wrapper'>
          <p>{item.quantity}<span className='text-red-400'>x</span></p>
          <p>${item.product.price.toFixed(2)}</p>
          <strong>${totalItem.toFixed(2)}</strong>
        </div>
        <button onClick={() => removeItem(item.product)} className='card-btn'>x</button>
      </div>

    </div>
  )
}
