import axios from 'axios'
import { useState, useEffect, } from 'react'
import Search from '../component/Serach'
import Card from '../component/Card'
import { Toaster } from 'react-hot-toast'
import { useLoginContext } from '../context/LoginProvider'
import Loader from '../component/Loader'
import { auth } from '../auth/firebase'
import { setLogLevel } from 'firebase/app'
const Home = () => {

  const [message, setMessage] = useState("")
  const [textInput, setTextInput] = useState("")
  const { search, setSearch } = useLoginContext()
  const { userL, allFilms, setAllFilms, loading,getFavoriFilm,getFilm } = useLoginContext()
  const [resim, setResim] = useState("")
  const [favoriFilm, setFavoriFilm] = useState([])



  useEffect(() => {
    if (search) {
      getFilm(true)
    } else {
      getFilm(false)
    }
  }, [])
  
  let foavoriList = JSON.parse(localStorage.getItem(userL.email)) || []
  // foavoriList =   foavoriList.map(item => item.genres).filter(item=> item.name == "Thriller");
   foavoriList =   foavoriList.map(item =>console.log(item.name)) ;
   console.log(foavoriList);
  return (
    <div className="home-wrapper">
      <Search setSearch={setSearch} getFilm={getFilm} search={search} />
      {/* <img with={"100px"} height={"100px"} src={userL.photoURL} alt="" /> */}
      <div className="cart-wrapper  container mb-5">
        {
        loading ? <Loader /> : allFilms.map((item, i) => {
          const { poster_path, original_title, vote_average, overview, id } = item
          const sumItem = { poster_path, original_title, vote_average, overview, id }
          return (
            <Card key={i} {...sumItem} getFilm={getFilm} search={search} getFavoriFilm={getFavoriFilm}/>
          )
        })}
        <Toaster />
      </div>
    </div>
  )
}

export default Home