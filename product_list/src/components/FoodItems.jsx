import React, { useState } from 'react'
import imageIcon from "../design/icon-add-to-cart.svg"
import decrementIcon from "../design/icon-decrement-quantity.svg"
import incrementIcon from "../design/icon-increment-quantity.svg"

export default function FoodItems({ product }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='relative'>

      <div className="flex justify-center items-center flex-col">
        <img className='w-full rounded-2xl object-cover' src={product.image.desktop} />
        {!toggle ? (
          <button onClick={() => setToggle(true)} className="bg-gray-100 flex justify-center items-center gap-5 absolute bottom-14 text-xs font-bold w-36 px-4 py-1.5 rounded-2xl cursor-pointer">
            <img src={imageIcon} alt="" />
            <span className=''>Add to Cart</span>
          </button>
        ) : (

          <div className="bg-red-900 flex justify-center items-center gap-5 text-xs font-bold w-32 px-3 py-2 mx-20 rounded-2xl cursor-pointer ">
            <button>
              <img className='border-2 border-amber-100 border-r-2 rounded-2xl w-full py-1' src={decrementIcon} />
            </button>
            <span className='text-amber-100'>0</span>
            <button>
              <img className='border-amber-100 rounded-xl cursor-pointer' src={incrementIcon} />
            </button>
          </div>

        )}
      </div>
      <span>{product.category}</span>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
    </div>
  )
}