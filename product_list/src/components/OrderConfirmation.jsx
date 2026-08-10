import React from 'react'

export default function OrderConfirmation({ cart, orderTotal, startNewOrder }) {
  return (
    <div>
      <img src="m" alt="order" />
      <h2>Order Confirmed</h2>
      <p>We hope you enjoi your food!</p>
      <div>
        {cart.map(item => (
          <div key={item.product.name}>
            <h2>{item.product.name}</h2>
            <div className='flex justify-between items-center'>
              <div className='items-wrapper'>
                <p>{item.quantity}<span className='text-red-400'>x</span></p>
                <p>${item.product.price.toFixed(2)}</p>
                {/* <strong>${totalItem.toFixed(2)}</strong> */}
              </div>
            </div>

          </div>

        ))}
      </div>
      <p className='flex justify-between'>Order Total: <strong>${orderTotal.toFixed(2)}</strong> </p>
      <button onClick={() => startNewOrder()} className='order-confirmed-btn'>Start New Order</button>
    </div>
  )
}