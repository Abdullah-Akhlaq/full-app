import React from 'react'
import { useDispatch } from 'react-redux'
import { userDataAction } from '../../../Store/userDataSlice'
import Card from './Card'


 const CardDetails = (props) => {
    const {id,name,price}=props  
  const dispatch = useDispatch();
  const addItems = () => {
    dispatch(
      userDataAction.userData({id,name,price})
    );
  };
  return (
    <div>


        <div className="card-body " >
          <div className="card ">
            <div className="card1">{id}</div>
            <div className=" card2">Name:{name}</div>
            <div className="card3">Price:${price}</div>
           

            <button onClick={addItems}>ADD</button>
          </div>
        </div>

    </div>
  )
}
export default CardDetails
