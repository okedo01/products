import React from 'react'
import FoodItems from './FoodItems'

export default function FoodList({ products }) {
  return (
    <div className='w-5xl'>
      <h1 className='text-2xl font-bold pb-3'>Desserts</h1>
      <div className='bg-amber-400 grid grid-cols-3 gap-4'>
        {products.map((product) => (
          <div key={product.name}>
            <FoodItems product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}
