import React, { useState } from 'react'
import Lift1 from './Lift1'
import LiftDisplay from './LiftDisplay';

 const LiftMain = () => {
    const [items,setItems]=useState([])
    const userAdd=(val)=>{
       setItems([...items,val])
    }
  return (
    <div>LiftMain
        <Lift1 userAdd={userAdd}/>
        <LiftDisplay items={items} />
    </div>
  )
}
export default LiftMain
