import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../Mpages/Home'
import Controls from '../ui/Controls'
import Sidebar from '../ui/Sidebar'

export const Layout = () => {
  return (
    <div className='flex yfont-[Inter] h-screen bg-[#121212]'>
      <Sidebar/>

      <div className='m-7 text-white'>
        <Routes>
          <Route path='/home' element={<Home/>}/>

          <Route path='/' element={<Navigate replace to='home'/>}/>
        </Routes>
      </div>

      <Controls/>
    </div>
  )
}
