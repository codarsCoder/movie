import React from 'react'

const Card = ({ poster_path,original_title,vote_average }) => {
    return (
        <div className="cart">

            <img src={`https://image.tmdb.org/t/p/w1280${poster_path}`} alt="" />

            <div className="cart-footer">
                {original_title}
                <div className="pop">
                    {vote_average}
                </div>
            </div>
        </div>

    )
}

export default Card