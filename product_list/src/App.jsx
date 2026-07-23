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
    <div className='grid grid-cols-4 gap-x-9 p-0 m-0 bg-gray-300'>
      <div className="col-span-3">
        <FoodList products={products}/>
      </div>
      <div className="col-span-1">
        <Total />
      </div>
    </div>
  )
}