import axios from 'axios'
import { useState, useEffect, } from 'react'
import Search from '../component/Serach'
import Card from '../component/Card'
import { Toaster } from 'react-hot-toast'
import { useLoginContext } from '../context/LoginProvider'
import Loader from '../component/Loader'
import { auth } from '../auth/firebase'
const Home = () => {
  let api = process.env.REACT_APP_API;
  const [message, setMessage] = useState("")
  const [textInput, setTextInput] = useState("")
  const { search, setSearch } = useLoginContext()
  const { userL, allFilms, setAllFilms, loading } = useLoginContext()
  const [resim, setResim] = useState("")
  const [lastList, setLastList] = useState()
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${search}`;
  const url2 = `https://api.themoviedb.org/3/discover/movie?api_key=${api}`


  useEffect(() => {
    if (search) {
      getFilm(true)

    } else {
      getFilm(false)
    }
  }, [])
  useEffect(() => {
    setResim(userL.photoURL)
  }, [])


  const getFilm = async (prob) => {
    const { data } = await axios(prob ? url : url2).catch(err => console.log(err))
    setAllFilms(data.results);
    // console.log(data.results, "home")
  }


  const getFavoriFilm = () => {

    let favoriList = JSON.parse(localStorage.getItem(userL.email)) || []
    console.log(favoriList);
    favoriList.map(item => {
      const urlDetail = `https://api.themoviedb.org/3/movie/${item}?api_key=${api}`
         axios.get(urlDetail).then((res) => { return setLastList([...lastList,res.data]) }).catch(err => console.log(err)) 
      console.log(lastList)
    })
    
        
  
  //   setAllFilms(lastList)
  }
 

  return (
    <div className="home-wrapper">
      <Search setSearch={setSearch} getFilm={getFilm} search={search} getFavoriFilm={getFavoriFilm} />
      {/* <img with={"100px"} height={"100px"} src={userL.photoURL} alt="" /> */}
      <div className="cart-wrapper  container mb-5">
        {loading ? <Loader /> : allFilms?.map((item, i) => {
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