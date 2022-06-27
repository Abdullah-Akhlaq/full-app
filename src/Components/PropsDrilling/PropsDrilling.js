import React, { useState } from 'react'
import Product1 from './Product1'

 const PropsDrilling = () => {
  const [product,setProduct]=useState('value to change')
  const [changeColor,setChangeColor]=useState(false)
  
  return (
    <div>
      
      <Product1 product={product} setProduct={setProduct} changeColor={changeColor} setChangeColor={setChangeColor}  />


    </div>
  )
}
export default PropsDrilling
