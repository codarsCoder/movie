import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Details = () => {
  const { id } = useParams()
  let apiKey = process.env.REACT_APP_API;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`

  const [filmDetail, setFilmDetail] = useState([])
  const [video, setVideo] = useState("")
  const [videoW, setVideoW] = useState(false)
const [viewAll, setViewAll] = useState(false)
  useEffect(() => {
    getFilm()
  }, [])

  const getFilm = async () => {
    const { data } = await axios(url).catch(err => console.log(err))
    console.log(data)
    setFilmDetail(data);
    data.video ? setVideo(data.video) : setVideo("")
    data.video ? setVideoW(true) : setVideoW(false)
    setViewAll(true)
  }
  return (
    <div className="container p-0 bg-dark text-light d-flex align-items-center flex-column mt-3">

   {videoW ? (
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={video} ></iframe>
          </div>
        ) : (
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
        )

        }
     
      <div className=" bg-dark text-light genres">
        {
          filmDetail.genres?.map((item, i) => {
            return (
              <p key={i} className='d-inline'>{item?.name}</p>
            )
          })
        }
      </div>
      {/* details */}
      <hr  />
      <div className=" detail-context">
        <div className="card  p-3 bg-dark">
          <div className="row g-0">
            <div className="col-5 col-sm-4">
              <img
                src={`https://image.tmdb.org/t/p/w1280${filmDetail.poster_path}`}
                className="img-fluid w-100"
                alt="card-horizontal-image"
              />
            </div>
            <div className=" bg-dark text-light col-7 col-sm-8">
              <div className="card-body detail-body">
                <h1 className="card-title">{filmDetail.title}</h1>
                <p className="card-text fs-4">
                  {filmDetail.tagline}
                </p>
                <p className="card-text">
                  {filmDetail.overview}
                </p>
                <p className="card-text">
                  <span className='fs-5'>Language : </span> {filmDetail.original_language}
                </p>
                <p className="card-text">
                  <span className='fs-5'>Original Title : </span> {filmDetail.original_title}
                </p>
                <p className="card-text">
                <span className='fs-5'>Vote : </span>{filmDetail.vote_count}
                </p>
                <p className="card-text">
                <span className='fs-5'>Average : </span>{filmDetail.vote_average}

                </p>
                <p className="card-text">
                <span className='fs-5'>Runtime : </span>{filmDetail.runtime} M.

                </p>
                <p className="card-text">
                <span className='fs-5'>Relase Date : </span>{filmDetail.release_date}

                </p>
                <p className="card-text">
                <span className='fs-5'>Home Page : </span><a  target="_blank" href={filmDetail.homepage}>{filmDetail.homepage}</a> 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
 
    </div>
  )
}

export default Details
