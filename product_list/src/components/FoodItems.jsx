import React from 'react'
import imageIcon from "../design/icon-add-to-cart.svg"

export default function FoodItems({product}) {
  const handleClick = (e) => {
    console.log(e.target);
  }
  return (
    <div className='relative'>
      <div className="flex justify-center items-center flex-col">
        <img className='w-full rounded-2xl object-cover' src={product.image.desktop} />
        <button onClick={(e) => handleClick(e)} className="bg-gray-100 flex justify-center items-center gap-5 absolute bottom-14 text-xs font-bold w-36 px-4 py-1.5 rounded-2xl cursor-pointer">
          <img src={imageIcon} alt="" />
          <span className=''>Add to Cart</span>
        </button>
      </div>
          <span>{product.category}</span>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
    </div>
  )
}