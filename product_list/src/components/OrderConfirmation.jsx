// import React from 'react'

// export default function OrderConfirmation({ cart, orderTotal, startNewOrder }) {
//   return (
//     <div>
//       <img src="m" alt="order" />
//       <h2>Order Confirmed</h2>
//       <p>We hope you enjoi your food!</p>
//       <div>
//         {cart.map(item => (
//           <div key={item.product.name}>
//             <h2>{item.product.name}</h2>
//             <div className='flex justify-between items-center'>
//               <div className='items-wrapper'>
//                 <p>{item.quantity}<span className='text-red-400'>x</span></p>
//                 <p>${item.product.price.toFixed(2)}</p>
//                 {/* <strong>${totalItem.toFixed(2)}</strong> */}
//               </div>
//             </div>

//           </div>

//         ))}
//       </div>
//       <p className='flex justify-between'>Order Total: <strong>${orderTotal.toFixed(2)}</strong> </p>
//       <button onClick={() => startNewOrder()} className='order-confirmed-btn'>Start New Order</button>
//     </div>
//   )
// }


export default function OrderConfirmation({
  cart,
  orderTotal,
  startNewOrder
}) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-[90%] max-w-lg">

        <h1 className="text-2xl font-bold">
          Order Confirmed
        </h1>

        <p className="text-gray-500 mt-2">
          We hope you enjoy your food!
        </p>

        <div className="bg-gray-100 rounded-lg p-4 mt-5">
          {cart.map(item => (
            <div
              key={item.product.name}
              className="flex justify-between py-2"
            >
              <div>
                <p className="font-medium">
                  {item.product.name}
                </p>

                <p className="text-sm text-gray-500">
                  {item.quantity}x @ ${item.product.price.toFixed(2)}
                </p>
              </div>

              <p>
                ${(item.quantity * item.product.price).toFixed(2)}
              </p>
            </div>
          ))}

          <div className="flex justify-between border-t mt-3 pt-3">
            <span>Order Total</span>
            <strong>${orderTotal.toFixed(2)}</strong>
          </div>
        </div>

        <button
          onClick={startNewOrder}
          className="w-full bg-red-600 text-white py-3 rounded-full mt-5 cursor-pointer"
        >
          Start New Order
        </button>

      </div>
    </div>
  );
}