import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchIcon from '../../../images/search__icon_grey.svg';
import SearchButton from '../../../images/search__icon_blue.svg';


function Searchform({
  onChange,
  onSubmit,
  checkBoxState,
  handleCheckBox,
  inputQuery,
}) {

  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  return (
    <section className='search-form'>
      <div className='search-form__container'>
        <form className='search-form__submit' onSubmit={onSubmit}>
          <div className='search-form__input-container'>
            <img src={SearchIcon} className='search-form__icon' alt='S' />
            <input type='text' name='query' className='search-form__input' placeholder='Фильм' required onChange={onChange} value={inputQuery}/>
          </div>
          <div>{errors.name && <p className='form__errors'>{errors.name}</p>}</div>
          <button type='submit' className='search-form__button'>
            <img src={SearchButton} alt='Search!' className='search-form__img' />
          </button>
        </form>
        <div className='search-form__line'></div>
        <FilterCheckbox checkBoxState={checkBoxState} handleCheckBox={handleCheckBox} />
      </div>
    </section>
  );
}

export default Searchform;