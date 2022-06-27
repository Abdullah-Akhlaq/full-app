import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDataAction } from "../../../Store/userDataSlice";
import ModalCard from "./ModalCard";

const FinalCard = (props) => {

  const FinalCard = useSelector((state) => state.userData.users);
  const dispatch = useDispatch();

  return (
    <div>
      {FinalCard.map((items) => (
        <ModalCard
          key={items.id}
          id={items.id}
          name={items.name}
          price={items.price}
          quantity={items.quantity}
          totalPrice={items.totalPrice}
        />
      ))}
    </div>
  );
};
export default FinalCard;
