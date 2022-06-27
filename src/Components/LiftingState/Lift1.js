import React from 'react'
import Lift2 from './Lift2'

 const Lift1 = (props) => {
    const addFormHandler=(val)=>{
        const userInput={
            ...val,
            id:Math.random()
        }
     props.userAdd(userInput)
    }
  return (
    <div>Lift1
        <Lift2 onAdd={addFormHandler} />
    </div>
  )
}
export default Lift1
