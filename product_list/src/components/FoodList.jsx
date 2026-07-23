import React from 'react'
import FoodItems from './FoodItems'

export default function FoodList({ products }) {
  return (
    <div className='px-3'>
      <h1 className='text-2xl font-bold py-2'>Desserts</h1>
      <div className='grid grid-cols-3 gap-4'>
        {products.map((product) => (
          <div key={product.name}>
            <FoodItems product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}
