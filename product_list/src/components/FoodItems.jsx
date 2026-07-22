import React from 'react'

export default function FoodItems({product}) {
  return (
    <div>
      <img src={product.image.thumbnail} />
          <span>{product.category}</span>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
    </div>
  )
}
