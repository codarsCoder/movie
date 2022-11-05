import { Outlet,Navigate } from "react-router-dom"
import { useLoginContext } from "../context/LoginProvider"
import { onAuthStateChanged } from "firebase/auth"; 
import { useEffect,useState } from "react";
import { auth } from "../auth/firebase";

const PrivateRoute = () => {
const [login, setLogin] = useState(false)
    const {userL ,setUserL} =  useLoginContext()
      useEffect(() => {
       
            onAuthStateChanged(auth, (user) => {
                if (user) {
                  setUserL({user:user.email, email:user.email})
                  console.log(user.email);
                  setLogin(true)
                } else {
                  setLogin(true)
                }
              });
        }, [])
   return (
   <>
   {login &&  (userL.email ? <Outlet/> : <Navigate to="/login"/>)}
   </>
  
    

   )
 }
 
 export default PrivateRoute