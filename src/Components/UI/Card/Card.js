import React, { useState } from "react";
import "./Card.css";
import { useDispatch, useSelector } from "react-redux";
import { userDataAction } from "../../../Store/userDataSlice";
import CardDetails from "./CardDetails";
import FinalCard from "./FinalCard";
import CardFilter from "./CardFilter";

const dummyArray = [
  {
    id: "01",
    name: "Basket Ball",
    price: 250,
    quantity:1
  },
  {
    id: "02",
    name: " Ball",
    price: 500,
  },
];

const Card = () => {
  const setFilterValue=(selectedValue)=>{
    setFilter(selectedValue)
  }
   const [filter,setFilter]=useState(250)
  const userData = useSelector((state) => state.userData.users);
  console.log(userData);
  const filterArray=dummyArray.filter(existingValue=>{ return existingValue.name === filter})
  console.log(filterArray);
  return (
    <div>
      <CardFilter setFilterValue={setFilterValue} filter={filter} />
      {filterArray.map((item) => <CardDetails key={item.id} id={item.id} name={item.name} price={item.price} />  )}
      {dummyArray.map((item) => <FinalCard key={item.id} id={item.id} name={item.name} price={item.price} quantity={item.quantity} />  )}
    </div>
  );
};
export default Card;
