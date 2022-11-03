import React from 'react'

const Card = ({ item }) => {
    return (
        <div className="cart">

            <img src={`https://image.tmdb.org/t/p/w1280${item.poster_path}`} alt="" />

            <div className="cart-footer">
                {item.original_title}
                <div className="pop">
                    {item.vote_average}
                </div>
            </div>
        </div>

    )
}

export default Card