import { Outlet,Navigate } from "react-router-dom"
import { useLoginContext } from "../context/LoginProvider"
import { onAuthStateChanged } from "firebase/auth"; 
import { useEffect,useState } from "react";
import { auth } from "../auth/firebase";
const PrivateRoute = () => {

    const {userL ,setUserL} =  useLoginContext()
      useEffect(() => {
        const user = auth?.currentUser
        console.log(user,"user");
            onAuthStateChanged(auth, (user) => {
                if (user) {
                  setUserL({user:user.email, email:user.email})
                } else {
                  // User is signed out
                }
              });
        }, [])
   return (
  
    userL.email ? <Outlet/> : <Navigate to="/login"/>
   )
 }
 
 export default PrivateRoute