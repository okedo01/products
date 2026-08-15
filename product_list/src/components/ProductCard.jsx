import React from 'react'
import cartIcon from "../design/icon-add-to-cart.svg"

export default function ProductCard({ product, addToCart, cart, increaseQuantity, decreaseQuantity }) {
    const clickedItem = cart.find(item => item.product.name === product.name);

    return (
        <div className='product-card relative'>
            <img src={product.image.desktop} alt={product.name} className={`product-image ${clickedItem ? "selected" : ""}`} />
            <p className='text-gray-500 text-xs'>{product.category}</p>
            <h2 className='text-xs'>{product.name}</h2>
            <p className='text-red-500 text-xs font-bold'>${product.price.toFixed(2)}</p>
            <div>
                {clickedItem ? (
                    <div className="quantity-control absolute bottom-13.5 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-red-800 text-white border rounded-full px-5 py-2">
                        <button className='quantity-btn' onClick={() => decreaseQuantity(product)}>-</button>
                        <span>({clickedItem.quantity})</span>
                        <button className='quantity-btn' onClick={() => increaseQuantity(product)}>+</button>
                    </div>
                ) : (
                    <button onClick={() => addToCart(product)} className="add-to-cart absolute bottom-14 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-white border-gray-400 border rounded-full">
                        <img src={cartIcon} alt="Cart" />
                        <span className='text-xs'>Add to Cart</span>
                    </button>
                )}
            </div>

        </div>
    )
}