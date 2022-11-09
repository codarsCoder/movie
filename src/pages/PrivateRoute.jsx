import { Outlet,Navigate } from "react-router-dom"
import { useLoginContext } from "../context/LoginProvider"


const PrivateRoute = () => {
// const [login, setLogin] = useState(false)
const {userL ,setUserL} =  useLoginContext()

  return   ( 
    <>
    { (userL.email ? <Outlet/> : <Navigate to="/login"/>)} 
    </>
    )
  
  
 }
 
 export default PrivateRoute


