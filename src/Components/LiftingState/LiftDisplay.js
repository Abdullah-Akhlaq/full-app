import React from 'react'

 const LiftDisplay = (props) => {
  return (
    <div>
    {props.items.map(items=><div key={items.id}>
        {items.id}
    </div> )}
    </div>
  )
}
export default LiftDisplay
