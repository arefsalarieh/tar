import React, { useEffect, useState } from 'react'

const Users = () => {
    const [allUsers , seAllUsers] = useState(null)
    const getData =async (values)=>{
        // fetch('https://66043c5d2393662c31d0fbeb.mockapi.io/users').then((value)=>value.json()).then((res)=>seAllUsers(res))
        const res = await fetch('https://66045dfb2ca9478ea17ddff2.mockapi.io/users',{method:"POST" , body:JSON.stringify(values)})
        // const res2 = await res.json()
        // seAllUsers(res2)
        // console.log(res2);
        console.log(res);
    }

    allUsers && console.log(allUsers);

    const user1 = {"name":"ali" , "id":40}

    useEffect(()=>{
        getData(user1)
    },[])
  return (
    <></>
    // <div>{allUsers?.map((item , index)=>{
    //     return(
    //         <div key={index}>{item.name}</div>
    //     )
    // })}</div>
  )
}

export default Users