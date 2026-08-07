import React from 'react'
import cartIcon from "../design/icon-add-to-cart.svg"

export default function ProductCard({ product, addToCart, cart, increaseQuantity, decreaseQuantity }) {
    const clickedItem = cart.find(item => item.product.name === product.name);

    return (
        <div className='product-card relative'>
            <img src={product.image.desktop} alt={product.name} />
            <p>{product.category}</p>
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <div >
                {clickedItem ? (
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-white border rounded-full px-5 py-2">
                        <button onClick={() => decreaseQuantity}>-</button>
                        <span>({clickedItem.quantity})</span>
                        <button onClick={() => increaseQuantity(product)}>+</button>
                    </div>
                ) : (
                    <button onClick={() => addToCart(product)} className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-white border rounded-full px-5 py-2">
                        <img src={cartIcon} alt="Cart" className="w-4 h-4" />
                        <span className='text-xs'>Add to Cart</span>
                    </button>
                )}
            </div>

        </div>
    )
}