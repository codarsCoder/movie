import { useContext, useState, useEffect, createContext } from "react";
import { authControl } from "../auth/firebase";

const LoginContext = createContext()
const LoginProvider = ({ children }) => {
  const [userL, setUserL] = useState("");
  const [allFilms, setAllFilms] = useState([]);
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)
  const values = { userL, setUserL, allFilms, setAllFilms, search, setSearch,loading, setLoading };

  useEffect(() => {
    authControl(setUserL,setLoading)
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