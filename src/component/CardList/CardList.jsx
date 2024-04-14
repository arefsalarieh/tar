import React, { useState } from 'react'
import Card from './Card'

const CardList = ({allCard , setAllCard}) => {
    // const [allCard , setAllCard] = useState([
    //     {id:1 , name:'a'}, 
    //     {id:2 , name:'b'}, 
    //     {id:3 , name:'c'},
    //      {id:4, name:'d'}, 
    //      {id:5 , name:'e'}, 
    //      {id:6 , name:'f'},
    //       {id:7,name:'g'}, 
    //       {id:8,name:'h'}
    // ])
  return (
    <div className='cardwraper'>
        {/* {allCard.map((item,index)=>{
            return(
                <div key={index} className='card'>
                    <div className='up'>{item.id}</div>
                    <div className='down'>{item.name}</div>
                </div>                
            )
        })} */}




        <Card allCard={allCard} setAllCard={setAllCard}/>

        {/* {allCard.map((item,index)=>{
            return(<Card id={item.id} name={item.name}/>)
        })} */}
    </div>
  )
}

export default CardList