import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDataAction } from "../../../Store/userDataSlice";
const ModalCard = (props) => {
  const dispatch = useDispatch();
  const { id, name, price, quantity, totalPrice } = props;

  const removeItems1 = () => {
    dispatch(userDataAction.removeItems(id));
  };
  const addItems = () => {
    dispatch(
      userDataAction.userData({
        id,
        name,
        quantity,
        price,
      })
    );
  };
  return (
    <div>
      {" "}
      <div>{id}</div>
      <div>{name}</div>
      <div>{totalPrice}</div>
      <div>{price}</div>
      <button onClick={addItems}>+</button> <div>{quantity}</div>
      <button onClick={removeItems1}>-</button>
    </div>
  );
};
export default ModalCard;
