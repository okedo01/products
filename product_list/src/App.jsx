import React, { useEffect, useState } from 'react'
import FoodList from './components/FoodList';
import Desserts from './components/Desserts';
import Total from './components/Total';

export default function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className='flex p-0 m-0'>
      <FoodList products={products}/>
      <Total />
    </div>
  )
}