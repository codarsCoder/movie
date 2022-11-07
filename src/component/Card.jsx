import { useNavigate } from "react-router-dom"

const Card = ({ poster_path,original_title,vote_average,overview,id}) => {
    const navigate = useNavigate()
    return (
        <div className="cart">

            <img onClick={()=> navigate(`details/${id}`)} src={`https://image.tmdb.org/t/p/w1280${poster_path}`} alt="" />

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
                <div  onClick={()=> navigate(`details/${id}`)} className="description">
            {overview}
            </div> 
            )
            </>
           }
           
        </div>

    )
}

export default Card