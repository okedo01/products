import React from 'react'
import ProductCard from './ProductCard'

export default function ProductList({products, addToCart, cart}) {
  return (
    <div className='product-list'>
        {
            products.map((product) => (
                <ProductCard 
                key={product.name}
                product={product}
                addToCart={addToCart}
                cart={cart}
                />
            ))
        }
    </div>
  )
}
