import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAction } from '../../../Store/Toggle'

 const CardButton = () => {
    const totalItems=useSelector(state=>state.userData.totalQuantity)

    const dispatch=useDispatch()
    const cardItems=()=>{
        dispatch(toggleAction.toggleAdmin())
    }
  return (
    <div>
        CardButton
        <button onClick={cardItems}>Cart {totalItems} </button>

    </div>
  )
}
export default CardButton
