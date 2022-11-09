import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from "../component/Loader"

const Details = () => {
  const { id } = useParams()
  let apiKey = process.env.REACT_APP_API;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
  const navigate = useNavigate()
  const [filmDetail, setFilmDetail] = useState([])
  const [loadder, setLoadder] = useState(true)
  useEffect(() => {
    loadder && <Loader />
    getFilm()
    setLoadder(false)
  }, [])

  const getFilm = async () => {
    loadder && <Loader />
    const { data } = await axios(url).catch(err => console.log(err))
    setFilmDetail(data);
    setLoadder(false)
  }
  return (
    <div className="container details-wrapper p-0  text-light d-flex align-items-center flex-column mt-3  mb-5">

        <div>
          <figure className="figure p-3" >
            <img
              src={`https://image.tmdb.org/t/p/w1280${filmDetail.backdrop_path}`}
              className="figure-img img-fluid rounded"
              alt="figure-img"
            />
            <figcaption className="figure-caption">

            </figcaption>
          </figure>
        </div>
      <div className=" text-light genres">
        {
          filmDetail.genres?.map((item, i) => {
            return (
              <p key={i} className='d-inline'>{item?.name}</p>
            )
          })
        }
      </div>
      {/* details */}
      <hr />
      <div className=" detail-context">
        <div className="card  p-3">
          <div className="row g-0">
            <div className="col-5 col-sm-4">
              <img
                src={`https://image.tmdb.org/t/p/w1280${filmDetail.poster_path}`}
                className="img-fluid w-100"
                alt="card-horizontal-image"
              />
            </div>
            <div className=" text-light col-7 col-sm-8">
              <div className="card-body detail-body">
                <h1 className="card-title">{filmDetail.title}</h1>
                <p className="card-text fs-4">
                  {filmDetail.tagline}
                </p>
                <p className="card-text">
                  {filmDetail.overview}
                </p>
                <p className="card-text">
                  <span className='fs-4'>Language : </span> {filmDetail.original_language}
                </p>
                <p className="card-text">
                  <span className='fs-4'>Original Title : </span> {filmDetail.original_title}
                </p>
                <p className="card-text">
                  <span className='fs-4'>Vote : </span>{filmDetail.vote_count}
                </p>
                <p className="card-text">
                  <span className='fs-4'>Average : </span>{filmDetail.vote_average}

                </p>
                <p className="card-text">
                  <span className='fs-4'>Runtime : </span>{filmDetail.runtime} M.

                </p>
                <p className="card-text">
                  <span className='fs-4'>Relase Date : </span>{filmDetail.release_date}

                </p>
                <p className="card-text">
                  <span className='fs-4'>Home Page : </span><a target="_blank" href={filmDetail.homepage}>{filmDetail.homepage}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => navigate(-1)} className="btn btn-link mt-5 fs-5">Go Back</button>
    </div>
  )
}

export default Details
