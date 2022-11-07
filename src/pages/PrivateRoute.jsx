import { Outlet,Navigate } from "react-router-dom"
import { useLoginContext } from "../context/LoginProvider"
import { useState,useEffect } from "react"
import { authControl } from "../auth/firebase"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../auth/firebase"


const PrivateRoute = () => {
const [login, setLogin] = useState(false)
const {userL ,setUserL} =  useLoginContext()

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserL(user)
  setLogin(true)
    } else {
        setUserL(false)
        setLogin(true)
    }
  });

    }, [])
    
console.log(userL.email)
  return   ( 
    <>
    {login &&  (userL.email ? <Outlet/> : <Navigate to="/login"/>)} 
    </>
    )
  
  
 }
 
 export default PrivateRoute


