import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from '../pages/login/Login'
import ForgotPassword from '../pages/login/ForgotPassword'

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>

          <Route path='/' element={<Navigate replace to='/login'/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
