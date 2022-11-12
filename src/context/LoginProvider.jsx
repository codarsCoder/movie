import axios from "axios";
import { useContext, useState, useEffect, createContext } from "react";
import { authControl } from "../auth/firebase";

const LoginContext = createContext()
const LoginProvider = ({ children }) => {
  let api = process.env.REACT_APP_API;
  const [userL, setUserL] = useState("");
  const [allFilms, setAllFilms] = useState([]);
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${search}`;
  const url2 = `https://api.themoviedb.org/3/discover/movie?api_key=${api}`

    const getFilm = async (prob) => {
    const { data } = await axios(prob ? url : url2).catch(err => console.log(err))
    setAllFilms(data.results);

  }

   const getFavoriFilm = () => {

    let favoriList = JSON.parse(localStorage.getItem(userL.email)) || []
    setAllFilms(favoriList)
 
  }

  const values = { userL, setUserL, allFilms, setAllFilms, search, setSearch,loading, setLoading,getFilm,getFavoriFilm };

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