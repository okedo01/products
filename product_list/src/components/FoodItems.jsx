import React from 'react'

export default function FoodItems({product}) {
  return (
    <div className=''>
      <img className='w-full rounded-2xl object-cover' src={product.image.desktop} />
          <span>{product.category}</span>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
    </div>
  )
}
