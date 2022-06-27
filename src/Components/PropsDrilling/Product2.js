import React from "react";
import "./Product.css";

const Product2 = (props) => {
  const { setProduct, changeColor } = props;
  const changeHandler = () => {
    setProduct((prev) => (prev = "baby"));
  };
  const changeProductColor = changeColor ? "Bg-red" : "Bg-Green";
  console.log("product2", changeColor);
  return (
    <div>
      <div className={changeProductColor}>Product2ChangeColor</div>
      <button onClick={changeHandler}>Submit</button>
      Product2
    </div>
  );
};
export default Product2;
