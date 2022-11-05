import { useContext } from "react";
import { useState,useEffect } from "react";
import { createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../auth/firebase";

const LoginContext = createContext()
const LoginProvider = ({ children }) => {
    const [userL, setUserL] = useState({ user:"",email: "" });
    const [allFilms, setAllFilms] = useState([]);
    const [search, setSearch] = useState("")
    const values = { userL, setUserL,allFilms, setAllFilms,search, setSearch };

    useEffect(() => {
       
      onAuthStateChanged(auth, (user) => {
          if (user) {
            setUserL({user:user.email, email:user.email})
            console.log(user.email,"provider");
         
          } else {
           
          }
        });
  }, [])
  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  )
}
//! Consuming Custom Hook
export const useLoginContext = () => {
    return useContext(LoginContext);
  };
  

export default LoginProvider