import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


const LifeCycle = () => {
    const [num , setNum] = useState(1)
    const [flag,setFlag] = useState(true)
    useEffect(()=>{
        if(false){
            setNum(num+1)
            // setFlag(false)
        }
    },[num])
  return (
    <div>
        <h2>{num}</h2>
        <button onClick={()=>{setNum(num+1)}}>go 2</button>
        <NavLink to='/BaseForm' style={({isActive})=>{
          return {color:isActive ? 'red' : 'blue'}
        }}>BaseForm</NavLink>
        <NavLink to='/BaseFormik'>BaseFormik</NavLink>
    </div>
  )
}

export default LifeCycle