import React, { useState } from 'react'
import {Routes , Route , Navigate , useRouteError} from 'react-router-dom'


const BaseForm = () => {
    const [title , setTitle] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        setTitle(e.target.title.value);
        console.log(title);
    }

    const error = useRouteError();
console.log(error);


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>{title}</div>
            <input name='title' type="text" placeholder='title' onChange={(e)=>setTitle(e.target.value)}/>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default BaseForm