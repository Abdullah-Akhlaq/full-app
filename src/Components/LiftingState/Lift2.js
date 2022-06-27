import React, { useState } from 'react'

 const Lift2 = (props) => {

    const [firstChange,set1Change]=useState('')
    const [secondChange,set2Change]=useState('')
    const firstInput=(event)=>{
       set1Change(event.target.value)
    }
    const secondInput=(event)=>{
        set2Change(event.target.value)
     }
  const  submitHandler=(event)=>{
      event.preventDefault()
      const userInput={
        firstChange,secondChange
      }
      props.onAdd(userInput)
     }
  return (
    <div>
        <h1>Lift2</h1>
        <form onSubmit={submitHandler}>
            <input onChange={firstInput} value={firstChange}/><br/>
            <input  onChange={secondInput} value={secondChange}/><br/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
export default Lift2
