import React from 'react'

 const CardFilter = (props) => {

    const selectHandler=(event)=>{
        props.setFilterValue(event.target.value)
    }
  return (
    <div>
        <select onChange={selectHandler} value={props.filter}>
            <option>250</option>
            <option>500</option>

        </select>
    </div>
  )
}
export default CardFilter
