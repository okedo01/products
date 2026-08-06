import React from 'react'

export default function ProductCard({product}) {
  return (
    <div className='product-card relative'>
        <img src={product.image.desktop} alt={product.name} />
        <p>{product.category}</p>
        <h2>{product.name}</h2>
        <p>${product.price.toFixed(2)}</p>
        <button className='absolute bottom-20 left-16 text-sm text-gray-200 bold bg-red-500'>Add to Cart</button>
    </div>
  )
}
