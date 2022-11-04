import axios from 'axios'
import {useState,useEffect} from 'react'
import Search from '../component/Serach'
import Card from '../component/Card'
import { Toaster } from 'react-hot-toast'
import { auth } from '../auth/firebase'
import { onAuthStateChanged } from 'firebase/auth'
const Home = () => {
  let api = process.env.REACT_APP_API;
  const [message, setMessage] = useState("")
  const [search, setSearch] = useState("aşk")
  const [allFilms, setAllFilms] = useState([])
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${search}`;
  useEffect(() => {
    getFilm()
  }, [])

  const getFilm = async() => {
    const { data } = await axios(url).catch(err => console.log(err))
    setAllFilms(data.results);
  }
  return (
    <>
     <Search />
    <div className="cart-wrapper  container">
       {
    allFilms?.map((item, i) => {
      const {poster_path,original_title,vote_average,overview} = item
      const sumItem = {poster_path,original_title,vote_average,overview}
      return (
          <Card key={i} {...sumItem} />
      )
    })
  }
    
   <Toaster />
    </div>
   </>
  )
}

export default Home