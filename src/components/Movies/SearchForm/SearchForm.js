import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchIcon from '../../../images/search__icon_grey.svg';
import SearchButton from '../../../images/search__icon_blue.svg';


function Searchform() {
    return (
        <section className='search-form'>
            <div className='search-form__container'>
                <form className='search-form__submit'>
                    <div className='search-form__input-container'>
                        <img src={SearchIcon} className='search-form__icon' alt='S' />
                        <input type='text' className='search-form__input' placeholder='Фильм' required/>
                    </div>
                    <button type='submit' className='search-form__button'>
                        <img src={SearchButton} alt='Search!' className='search-form__img' />
                    </button>
                </form>
                <div className='search-form__line'></div>
                <FilterCheckbox />
            </div>
        </section>
    );
}

export default Searchform;