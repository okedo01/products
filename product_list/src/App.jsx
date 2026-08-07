import ProductList from './components/ProductList';
import { useEffect, useState } from 'react';

export default function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch("/data.json")
    .then((resources) => resources.json())
    .then((data) => setProducts(data))
    .catch((error) => console.log("system error"))
  }, [])

  const addToCart = (product) => {
    const clickedItem = cart.find(item => item.product.name === product.name);
    if(clickedItem) {
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

  return (
    <div className='wrapper'>
      <ProductList products={products} addToCart={addToCart} cart={cart} />
    </div>
  )
}
