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


const RouterApp = () => {

  return (
    <Routes>
     
    <Route path="/account" element={<Account />} />
    <Route path="/logout" element={<LogOut />} />
    <Route path="/login" element={<LogIn />} />
    <Route path="/register" element={<Register />} />
    <Route path="/" element={<PrivateRoute />}>
    <Route path="" element={<Home />} />
    </Route>
    <Route path="/about"  element={<About />} />
    <Route path="/details/:id"  element={<Details />} />
    <Route path="*" element={<NotFound/>} />
  </Routes>
  )
}

export default RouterApp