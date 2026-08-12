import React from 'react'
import removeIcon from "../icons-and-images/icon-remove-item.svg"

export default function CartItem({ item, removeItem }) {
  const totalItem = item.quantity * item.product.price;

  return (
    <div>
      <h2 className='text-gray-600'>{item.product.name}</h2>
      <div className='flex justify-between items-center'>
        <div className='items-wrapper'>
          <p>{item.quantity}<span className='text-red-400'>x</span></p>
          
          <p>${item.product.price.toFixed(2)}</p>
          <strong>${totalItem.toFixed(2)}</strong>
        </div>
        <button onClick={() => removeItem(item.product)} className='cart-btn cursor-pointer'>
          <img src={removeIcon} />
        </button>
      </div>
    </div>
  )
}
