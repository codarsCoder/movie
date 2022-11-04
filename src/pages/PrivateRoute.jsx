import { Outlet,Navigate } from "react-router-dom"
import { useLoginContext } from "../context/LoginProvider"
const PrivateRoute = () => {
    const {userL} =  useLoginContext()

   return (
  
    userL.email ? <Outlet/> : <Navigate to="/login"/>
   )
 }
 
 export default PrivateRoute