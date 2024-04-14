import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UsersAxios = () => {
    const [allUsers , seAllUsers] = useState(null)
    const getData =async (values)=>{
        const res = await axios.get('https://66045dfb2ca9478ea17ddff2.mockapi.io/users/')
        // console.log(res.data);
        seAllUsers(res.data)
    }

    const addUser = async ()=>{
        let res = await axios.post('https://66045dfb2ca9478ea17ddff2.mockapi.io/users' , {name:'ali'})
        getData()
        console.log(res);
    }

    const deleteUser = async (id)=>{
        console.log(id);
        let res = await axios.delete(`https://66045dfb2ca9478ea17ddff2.mockapi.io/users/${id}`)
        getData()
        console.log(res);
    }

    const ali = {name:'ali'}

    const updateUser =async (id)=>{
        let res =  await axios.put(`https://66045dfb2ca9478ea17ddff2.mockapi.io/users/${id}` , {name:'hasan'})
        getData()
        console.log(res);
    }


    useEffect(()=>{
        getData()
    },[])

    

  return (
    <div>{allUsers?.map((item , index)=>{
        return(
            <div key={index}>
                <h2>{item.name} - {item.id}</h2>
                <button onClick={()=>deleteUser(item.id)}>delete</button>
                <button onClick={()=>updateUser(item.id)}>update</button>
            </div>
        )
    })}
    <button onClick={addUser}>add</button>
    </div>
  )
}

export default UsersAxios