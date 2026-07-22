import React from 'react'

export default function FoodItems({product}) {
  return (
    <div>
      <h2 className='bg-red-400'>{product.name}</h2>
          <h3>{product.category}</h3>
          <p>${product.price}</p>
          <img src={product.image.thumbnail} />
    </div>
  )
}
