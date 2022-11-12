import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import NotFound from '../pages/NotFound'
import Details from '../pages/Details'
import LogIn from '../pages/LogIn'
import LogOut from '../pages/LogOut'
import Register from '../pages/Register'
import Account from '../pages/Account'
import PrivateRoute from '../pages/PrivateRoute'
import Login2 from '../pages/Login2'


const RouterApp = () => {

  return (
    <Routes>
     
    <Route path="/account" element={<Account />} />
    <Route path="/logout" element={<LogOut />} />
    <Route path="/login" element={<LogIn />} />
    <Route path="/login2" element={<Login2 />} />
    <Route path="/register" element={<Register />} />
    <Route path="/details/:id" element={<PrivateRoute />}>
    <Route path="" element={<Details />} />
    </Route>
    <Route path="/about"  element={<About />} />
    <Route path="/"  element={<Home />} />
    <Route path="*" element={<NotFound/>} />
    <Route path="/*" element={<NotFound/>} />
  </Routes>
  )
}

export default RouterApp