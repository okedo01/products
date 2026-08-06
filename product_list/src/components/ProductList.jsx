import React from 'react'

export default function ProductList({product}) {
  return (
    <div>
        {
            product.map((items) => (
                console.log(items)
                
            ))
        }
    </div>
  )
}
