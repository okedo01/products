export default function OrderConfirmation({
  cart,
  orderTotal,
  startNewOrder
}) {
  import checkedIcon from "../icons-and-images/icons8-checkes(1).svg";
  
  return (
    <div className="fixed inset-0 z-5 bg-black/30 flex items-center justify-center">
      <img src={checkedIcon} alt={checkedIcon} />
      <div className="order-confirmed">

        <h1 className="text-xl text-gray-600 font-bold">
          Order Confirmed
        </h1>

        <p className="text-gray-500 text-sm">
          We hope you enjoy your food!
        </p>

        <div className="order-confirmed-items bg-gray-100">
          {cart.map(item => (
            <div
              key={item.product.name}
              className="flex justify-between py-2"
            >

              <div className="container">
                <img src={item.product.image.desktop} />

                <div className="text-gray-600 text-sm">
                  <p>
                    {item.product.name}
                  </p>
                  <div className='confirm-items-wrapper'>
                    <p>{item.quantity}<span className='text-red-400'>x</span></p>

                  <p><span className="text-xs">@</span>${item.product.price.toFixed(2)}</p>
                  </div>

                </div>
                <strong className="text-sm text-gray-500">
                  ${(item.quantity * item.product.price).toFixed(2)}
                </strong>
              </div>


            </div>
          ))}

          <div className="flex justify-between text-xs text-gray-500 border-t-gray-300">
            <span>Order Total</span>
            <strong>${orderTotal.toFixed(2)}</strong>
          </div>
        </div>

        <button
          onClick={startNewOrder}
          className="confirm-btn bg-red-600"
        >
          Start New Order
        </button>

      </div>
    </div>
  );
}