import { Outlet,Navigate } from "react-router-dom"
import { useLoginContext } from "../context/LoginProvider"
import { useState,useEffect } from "react"
import { authControl } from "../auth/firebase"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../auth/firebase"

const PrivateRoute = () => {
// const [login, setLogin] = useState(false)
const {userL ,setUserL} =  useLoginContext()

console.log(userL.email)
  return   ( 
    <>
    { (userL.email ? <Outlet/> : <Navigate to="/login"/>)} 
    </>
    )
  
  
 }
 
 export default PrivateRoute


