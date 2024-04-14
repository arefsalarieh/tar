import { useState } from 'react';
import {Routes , Route , Navigate , useRouteError , createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import Box from './component/Box'
import {mapArr , filtArr} from './component/map'
import BaseForm from './component/BaseForm';
import BaseFormik from './component/BaseFormik';
import './App.css'
import CardList from './component/CardList/CardList';
import LifeCycle from './component/LifeCycle';
import Users from './component/api/Users';
import UsersAxios from './component/api/UsersAxios';
import Aboute from './component/route/Aboute';
import Tab1 from './component/route/Tab1';
import Tab2 from './component/route/Tab2';
import Layout from './component/route/Layout';
import Landing from './component/route/Landing';

const router = createBrowserRouter([
{
  path:'/',
  element:<Layout/>,
  children:[
    {
      path:'/',
      element:<Landing/>,
    },
    {
      path:'/Aboute',
      element:<Aboute/>,
      children:[
        {
          path:'Tab1',
          element:<Tab1/>
        },
        {
          path:'Tab2',
          element:<Tab2/>
        }
      ]
    }
  ]
}])



// const router = createBrowserRouter(createRoutesFromElements(
//   <>
//       <Route path='/' element={<App/>} errorElement={<BaseForm/>}/>
//       <Route path='/LifeCycle' element={<LifeCycle/>} errorElement={<BaseForm/>}/>
//       <Route path='/BaseForm' element={<BaseForm/>} errorElement={<BaseForm/>}/>
//       <Route path='/BaseFormik' element={<BaseFormik/>} errorElement={<BaseForm/>}/>
//       <Route path='/life' element={<Navigate to='/'/>}/>
//       <Route path='/Aboute' element={<Aboute/>}>
//         <Route path='Tab1' element={<Tab1/>} />
//         <Route path='Tab2' element={<Tab2/>} />
//       </Route>
//       {/* <Route path='*' element={<BaseFormik/>} errorElement={<BaseForm/>}/> */}
//   </>
// ))

function App(){
  const [num , setNum] = useState(1)
  const [allCard , setAllCard] = useState([
    {id:1 , name:'a'}, 
    {id:2 , name:'b'}, 
    {id:3 , name:'c'},
     {id:4, name:'d'}, 
     {id:5 , name:'e'}, 
     {id:6 , name:'f'},
      {id:7,name:'g'}, 
      {id:8,name:'h'}
])



  // var pos = 0;
  // console.log(pos);

  const handleClick = ()=>{
    setNum(2)
    console.log(num);
  }

  return(
    <>
      {/* <CardList allCard={allCard} setAllCard={setAllCard}/> */}
      {/* <BaseFormik allCard={allCard} setAllCard={setAllCard}/> */}
      {/* <UsersAxios/> */}
    {/* <Routes>
      <Route path='/' element={<LifeCycle/>} errorElement={<BaseForm/>}/>
      <Route path='/life' element={<Navigate to='/'/>}/>
      <Route path='*' element={<BaseFormik/>} errorElement={<BaseForm/>}/>

   </Routes> */}

   

    <RouterProvider router={router}/>
    </>


  )
}



export default App
