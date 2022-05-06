import React from "react";

import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import FilterCheckBox from './FilterCheckbox/FilterCheckbox';

function Movies() {
    return (
        <>
            <SearchForm />
            <MoviesCardList />
        </>
    );
}

export default Movies;