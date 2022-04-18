import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from '../pages/containers/Layout'
import Login from '../pages/login/Login'
import SignUp from '../pages/login/Signup'

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>

          <Route path='/app/*' element={<Layout/>}/>
          <Route path='/' element={<Navigate replace to='/login'/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
