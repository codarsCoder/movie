import { useLoginContext } from "../context/LoginProvider";
import { signOutUser } from "../auth/firebase";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const LogOut = () => {
const navigate = useNavigate();
  const {userL,setUserL,setSearch} =  useLoginContext()
  signOutUser(setUserL);
  setSearch("")
  !userL.email  && navigate("/")
  return <Toaster />
}

export default LogOut