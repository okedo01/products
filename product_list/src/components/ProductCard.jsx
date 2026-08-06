import React from 'react'

export default function ProductCard({product}) {
  return (
    <div className=''>
        <img src={product.image.desktop} />
        <h2>{product.name}</h2>
        <p>{product.category}</p>
        <p>${product.price.toFixed(2)}</p>
        <button>Add to Cart</button>
    </div>
  )
}
