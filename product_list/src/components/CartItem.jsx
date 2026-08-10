import React from 'react'

export default function CartItem({item}) {
  return (
    <div>
      <h2>{item.product.name}</h2>
      <p>${item.product.price}</p>
      <p>{item.quantity}</p>
    </div>
  )
}
