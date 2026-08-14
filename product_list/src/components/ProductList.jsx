import React from 'react'
import ProductCard from './ProductCard'

export default function ProductList({products, addToCart, cart, increaseQuantity, decreaseQuantity}) {
  return (
    <div className='product-list grid  xl:grid-cols-3 gap-5 md:grid-cols-2 xs:grid-cols-1'>
        {
            products.map((product) => (
                <ProductCard 
                key={product.name}
                product={product}
                addToCart={addToCart}
                cart={cart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                />
            ))
        }
    </div>
  )
}
