import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchIcon from '../../../images/search__icon_grey.svg';
import SearchButton from '../../../images/search__icon_blue.svg';


function Searchform({ onChange, onSubmit, checkBoxState, handleCheckBox, inputQuery, setInputQuery }) {

  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  function handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setInputQuery(value);
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());

    console.log(inputQuery);

    if (inputQuery.length === 0) {
      setErrors({ ...errors, name: 'Необходимо заполнить поле' });
    }
    if (inputQuery) {
      setErrors({ ...errors, name: '' });
    }

  }

  return (
    <section className='search-form'>
      <div className='search-form__container'>
        <form className='search-form__submit' onSubmit={onSubmit}>
          <div className='search-form__input-container'>
            <img src={SearchIcon} className='search-form__icon' alt='S' />
            <input
              type='text'
              name='query'
              className='search-form__input'
              placeholder='Фильм'
              required
              onChange={handleChange}
              value={inputQuery}
            />
          </div>
          <button type='submit' className='search-form__button'>
            <img src={SearchButton} alt='Search!' className='search-form__img' />
          </button>
          <div><p className='form__errors'>{errors.name}</p></div>
        </form>
        <div className='search-form__line'></div>
        <FilterCheckbox checkBoxState={checkBoxState} handleCheckBox={handleCheckBox} />
      </div>
    </section>
  );
}

export default Searchform;