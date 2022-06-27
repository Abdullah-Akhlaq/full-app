import React from 'react'
import Product2 from './Product2'

 const Product1 = (props) => {
    const {product,setProduct ,setChangeColor ,changeColor}=props
   const colorHandler=()=>{
    setChangeColor(!changeColor)
   }

  return (
    <div>
       
        <div>Product1 <button onClick={colorHandler}>Change Color</button></div>
        <Product2 setProduct={setProduct} changeColor={changeColor}  />

    {product}
   
    </div>
  )
}
export default Product1
