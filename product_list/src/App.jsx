import React, { useEffect, useState } from 'react'
import FoodList from './components/FoodList'
import FoodItems from './components/FoodItems'

export default function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <h1>Food Products</h1>
      { products.map(product=> (
        <div key={product.name}>
          <h2>{product.name}</h2>
          <h3>{product.category}</h3>
        </div>
      ))}
    </div>
  )
}
