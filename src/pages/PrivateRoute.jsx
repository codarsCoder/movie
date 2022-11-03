import { Outlet,Navigate } from "react-router-dom"
const PrivateRoute = () => {
    const logIn = true
   return (
  
     logIn ? <Outlet/> : <Navigate to="/login"/>
   )
 }
 
 export default PrivateRoute