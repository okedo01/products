import ProductList from './components/ProductList';
import Cart from './components/Cart';
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

  return (
    <div>
      <ProductList products={products} />
      <Cart />
    </div>
  )
}
