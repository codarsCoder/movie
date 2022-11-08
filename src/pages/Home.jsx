import axios from 'axios'
import { useState, useEffect, } from 'react'
import Search from '../component/Serach'
import Card from '../component/Card'
import { Toaster } from 'react-hot-toast'
import { useLoginContext } from '../context/LoginProvider'
const Home = () => {
  let api = process.env.REACT_APP_API;
  const [message, setMessage] = useState("")
  const [textInput, setTextInput] = useState("")
  const { search, setSearch } = useLoginContext()
  const { userL,allFilms, setAllFilms,loading } = useLoginContext()
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${search}`;
  const url2 = `https://api.themoviedb.org/3/discover/movie?api_key=${api}`

  console.log(userL.email,"userl-home");
  useEffect(() => {
    if (search) {
      getFilm(true)
      
    } else {
      getFilm(false)
    }
  }, [])

  const getFilm = async (prob) => {
    const { data } = await axios(prob ? url : url2).catch(err => console.log(err))
    setAllFilms(data.results);
    console.log(data.results,"home")
  }
  return ( 
    <div className="home-wrapper">
      <Search setSearch={setSearch} getFilm={getFilm} search={search} />
      <div className="cart-wrapper  container mb-5">
        {loading ? <div style={{textAlign:"center"}}>Loading...</div> :  allFilms?.map((item, i) => {
            const { poster_path, original_title, vote_average, overview, id } = item
            const sumItem = { poster_path, original_title, vote_average, overview, id }
            return (
              <Card key={i} {...sumItem} />
            )
          }) }
        <Toaster />
      </div>
      </div>
  )
}

export default Home