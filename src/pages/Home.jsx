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
  const { userL,allFilms, setAllFilms } = useLoginContext()
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${search}`;
  const url2 = `https://api.themoviedb.org/3/discover/movie?api_key=${api}`
  // useEffect(() => {
  //   if (search) {
  //     getFilm(true)
      
  //   } else {
  //     getFilm(false)
  //   }

  // }, [])
  useEffect(() => {
    if (search) {
      getFilm(true)
      
    } else {
      getFilm(false)
    }

  }, [])
console.log(userL,"home")
  const getFilm = async (prob) => {
    const { data } = await axios(prob ? url : url2).catch(err => console.log(err))
    setAllFilms(data.results);
  }
  return (
    <>
      <Search setSearch={setSearch} getFilm={getFilm} search={search} />
      <div className="cart-wrapper  container">
        {
          allFilms?.map((item, i) => {
            const { poster_path, original_title, vote_average, overview, id } = item
            const sumItem = { poster_path, original_title, vote_average, overview, id }
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