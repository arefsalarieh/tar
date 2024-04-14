import React, { useEffect } from 'react'

const Card = ({allCard , setAllCard , id , name}) => {

  const deleteCard = (x)=>{
    const newAllCard = allCard.filter(card =>{
       return (card.id !== x)
    }
    )
    setAllCard(newAllCard)
    
    console.log(newAllCard);

  }

  useEffect(()=>{
    return ()=>{
      console.log('deleted');
    }
  } , [])
    
  return (
    <>
        {allCard.map((item,index)=>{
            return(
                <div key={index} className='card'>
                    <div className='up'>{item.id}</div>
                    <div className='down'>{item.name}</div>
                    <button onClick={()=>{deleteCard(item.id)}}>delete</button>
                </div>                
            )
        })}
    </>

      // <div  className='card'>
      //     <div className='up'>{id}</div>
      //     <div className='down'>{name}</div>
      // </div>                

  )
}

export default Card