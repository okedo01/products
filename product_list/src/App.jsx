import Cart from './components/Cart';
import OrderConfirmation from './components/OrderConfirmation';
import ProductList from './components/ProductList';
import { useEffect, useState } from 'react';

export default function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  useEffect(() => {
    fetch("/data.json")
      .then((resources) => resources.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log("system error"))
  }, [])

  const addToCart = (product) => {
    const clickedItem = cart.find(item => item.product.name === product.name);
    if (clickedItem) {
      const updatedItem = cart.map(item =>
        item.product.name === product.name ? {
          ...item, quantity: item.quantity + 1
        } : item
      )
      setCart(updatedItem);
    } else {
      setCart([
        ...cart, {
          product, quantity: 1
        }
      ])
    }
  }

  const increaseQuantity = (product) => {
    const updatedCart = cart.map(item =>
      item.product.name === product.name ?
        { ...item, quantity: item.quantity + 1 } :
        item
    )
    setCart(updatedCart);
  }

  const decreaseQuantity = (product) => {
    const clickedItem = cart.find(item => item.product.name === product.name)

    if (clickedItem.quantity > 1) {
      const updatedCart = cart.map(item =>
        item.product.name === product.name ?
          { ...item, quantity: item.quantity - 1 } :
          item
      )
      setCart(updatedCart);
    } else {
      if (clickedItem.quantity === 1) {
        const filteredItem = cart.filter(item =>
          item.product.name !== product.name
        )
        setCart(filteredItem);
      }

    }
  }

  const orderTotal = cart.reduce((sum, item) => {
    return sum + item.quantity * item.product.price;
  }, 0);

  const removeItem = (product) => {
    const filteredItem = cart.filter(item => {
      return item.product.name !== product.name;
    })
    setCart(filteredItem);
  }

  const orderConfirmed = () => {
    setIsOrderConfirmed(true);
  }

  const startNewOrder = () => {
    setCart([]);
    setIsOrderConfirmed(false);
  }

  return (
    <div className='bg-pink-50'>
      <h1 className='desserts text-gray-500 font-bold'>Desserts</h1>
      <div className='wrapper'>
        <ProductList products={products} addToCart={addToCart} cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
        <Cart cart={cart} removeItem={removeItem} orderTotal={orderTotal} orderConfirmed={orderConfirmed} />
        {
          isOrderConfirmed && (
            <OrderConfirmation cart={cart} orderTotal={orderTotal} startNewOrder={startNewOrder} />
          )
        }
      </div>
      <footer className="mt-12 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Developed by{" "}
        <a
          href="https://github.com/okedo01"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-gray-700 hover:text-pink-600 hover:underline transition-colors"
        >
          Eliah
        </a>
      </footer>
    </div>
  )
}
