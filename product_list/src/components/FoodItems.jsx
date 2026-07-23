import React from 'react'
import imageIcon from "../design/icon-add-to-cart.svg"

export default function FoodItems({product}) {
  return (
    <div className=''>
      <div className="">
        <img className='w-full rounded-2xl object-cover' src={product.image.desktop} />
        <div className="bg-amber-300 flex justify-center items-center gap-5 text-xs font-bold w-36 px-4 py-1.5 rounded-2xl">
          <img src={imageIcon} alt="" />
          <span className=''>Add to Cart</span>
        </div>
      </div>
          <span>{product.category}</span>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
    </div>
  )
}