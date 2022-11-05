import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'

const Details = () => {
  const {id} = useParams()
  let apiKey = process.env.REACT_APP_API;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
  const [filmDetail, setFilmDetail] = useState([])
  useEffect(() => {
    getFilm()
  }, [])

  const getFilm = async() => {
    const { data } = await axios(url).catch(err => console.log(err))
    setFilmDetail(data);
    console.log(data.results);
  }
  return (
    <div>
      <figure className="figure">
  <img
    src="assets/images/bs-images/img-4x3.png"
    className="figure-img img-fluid rounded"
    alt="figure-img"
  />
  <figcaption className="figure-caption">
    A caption for the above image.
  </figcaption>
</figure>
    </div>
  )
}

export default Details