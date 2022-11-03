import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const LoginContext = createContext()
const LoginProvider = ({ children }) => {
    const [userL, setUserL] = useState({ user:"",email: "" });
    const values = { userL, setUserL };
  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  )
}
//! Consuming Custom Hook
export const useLoginContext = () => {
    return useContext(LoginContext);
  };
  

export default LoginProvider