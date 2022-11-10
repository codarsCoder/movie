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
            <Card key={i} {...sumItem} getFilm={getFilm} />
          )
        })}
        <Toaster />
      </div>
    </div>
  )
}

export default Home