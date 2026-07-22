import React from 'react'
import FoodItems from './FoodItems'

export default function FoodList({ products }) {
  return (
    <div>
      <h1>Food List</h1>
      {products.map((product) => (
        <div key={product.name}>
          <FoodItems product={product} />
        </div>
      ))}
    </div>
  )
}
