import { Outlet,Navigate } from "react-router-dom"
import { useLoginContext } from "../context/LoginProvider"
import { useState,useEffect } from "react"
import { authControl } from "../auth/firebase"



const PrivateRoute = () => {
const [login, setLogin] = useState(false)
const {userL ,setUserL} =  useLoginContext()

useEffect(() => {
  authControl(setUserL)
  setLogin(true)
    }, [])
    
console.log(userL.email)
  return   ( 
    <>
    {login &&  (userL.email ? <Outlet/> : <Navigate to="/login"/>)} 
    </>
    )
  
  
 }
 
 export default PrivateRoute


