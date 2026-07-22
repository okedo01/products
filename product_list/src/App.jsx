import React, { useEffect, useState } from 'react'
import FoodList from './components/FoodList';

export default function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => setProducts(data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <h1>Food Products</h1>
      <FoodList products={products}/>
    </div>
  )
}