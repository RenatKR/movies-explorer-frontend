import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
    return (
        <>
            <div className="movies__line" />
            <div className="movies-card-list">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />


            </div>
            <button className="movies-card-list__button">Ещё</button>
        </>
    )
}

export default MoviesCardList;