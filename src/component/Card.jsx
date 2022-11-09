import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { addFavorite } from "../auth/firebase"
import { useLoginContext } from "../context/LoginProvider"



const Card = ({ poster_path, original_title, vote_average, overview, id, getFilm }) => {

    const navigate = useNavigate()
    const { userL, search } = useLoginContext()
    const [favori, setFavori] = useState(JSON.parse(localStorage.getItem(userL.email)) || [])
    const [fvr, setFvr] = useState("")

    const setFavoris = () => {
        setFvr("")
        if (favori.includes(id)) {
            setFvr("slct")
        } else {
            setFvr("")
        }
    }

    useEffect(() => {
        setFavoris()
        console.log("getfilm çalıştı");
    }, [favori, getFilm])


    return (
        <div className="cart">

            <img onClick={() => navigate(`details/${id}`)} src={`https://image.tmdb.org/t/p/w1280${poster_path}`} alt="" />

            <div className="cart-footer ">
                <div className="pop-text text-truncate">
                    {original_title}
                </div>
                <div className="pop">
                    {vote_average}
                </div>
            </div>
            {overview &&
                <>
                    return (
                    <div onClick={() => navigate(`details/${id}`)} className="description">
                        {overview}
                    </div>
                    )
                </>
            }
            <i onClick={() => addFavorite(id, setFavori, favori)} className={`fa-regular fa-star my-favori ${fvr}`} title="add favorite"></i>
        </div>

    )
}

export default Card