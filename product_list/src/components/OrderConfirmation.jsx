import checkedIcon from "../icons-and-images/icon-checked.svg";

export default function OrderConfirmation({
  cart,
  orderTotal,
  startNewOrder
}) {

  return (
    <div className="fixed inset-0 z-5 bg-black/30 flex items-center justify-center">

      <div className="order-confirmed">
        <img src={checkedIcon} className="checked" />
        <h1 className="text-xl text-gray-600 font-bold">
          Order Confirmed
        </h1>

        <p className="hope text-gray-500 text-sm">
          We hope you enjoy your food!
        </p>

        <div className="order-confirmed-items bg-pink-50">
          {cart.map(item => (
            <div
              key={item.product.name}
              className="flex justify-between py-2"
            >

              <div className="container">
                <img src={item.product.image.desktop} />

                <div className="text-gray-500 text-xs">
                  <p className="text-gray-600">
                    {item.product.name}
                  </p>
                  <div className='confirm-items-wrapper'>
                    <p>{item.quantity}<span className='text-red-400'>x</span></p>

                    <p><span className="text-xs">@</span>${item.product.price.toFixed(2)}</p>
                  </div>

                </div>
                <strong className="total-price-item text-gray-500">
                  ${(item.quantity * item.product.price).toFixed(2)}
                </strong>
              </div>


            </div>
          ))}

          <div className="total-price flex justify-between text-xs text-gray-500 border-t-gray-300">
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