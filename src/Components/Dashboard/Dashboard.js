import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../UI/Card/Card'
import FinalCard from '../UI/Card/FinalCard'

 const Dashboard = () => {
  const toggle=useSelector(state=>state.toggle.toggle)
  return (
    <div> Welcome
     {toggle && <FinalCard/>}
      <Card/>
    </div>
  )
}
export default Dashboard
