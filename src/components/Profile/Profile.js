import React from 'react';

import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function Profile({ handleEditUser, signOut }) {

  const currentUser = React.useContext(CurrentUserContext);

  const [state, setState] = React.useState({
    name: currentUser.name,
    email: currentUser.email,
  });

  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);


  function handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setErrors({ ...errors, [name]: target.validationMessage });
    setState({
      ...state,
      [name]: value,
    });
    setIsValid(target.closest("form").checkValidity());
  }

  function handleChangeName(e) {

    handleChange(e);

    const target = e.target;
    const name = target.name;

    const nameRegex = /[A-ZА-ЯЁа-яё\-\s]/ig;

    if (!nameRegex.test(state.name)) {
      setErrors({ ...errors, [name]: 'Поле "Имя" должно содержать только латиницу, кириллицу, пробел или дефис' })
      setIsValid(false);
    }

    if (nameRegex.test(state.name)) {
      setErrors({ ...errors, [name]: target.validationMessage });
      setIsValid(true);
    }

    compareValues();
  }

  const handleChangeEmail = (e) => {

    handleChange(e);

    const target = e.target;



    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/ig;

    if (!emailRegex.test(state.email)) {
      setErrors({ ...errors, email: 'Введите правильный email' })
      setIsValid(false);
    }

    if (emailRegex.test(state.email)) {
      setErrors({ ...errors, email: target.validationMessage });
      setIsValid(target.closest("form").checkValidity());
    }

    compareValues();
  }


  function handleSubmit(e) {
    e.preventDefault();
    const { name, email } = state;
    handleEditUser(name, email);
  }


  function onBlur() {
    setErrors({});
  }


  function compareValues() {
    if (state.email === currentUser.email || state.name === currentUser.name ) {
      setIsValid(false);
    }

    if (state.email !== currentUser.email || state.name !== currentUser.name ) {
      setIsValid(true);
    }
  }

  return (
    <>
      <div className='profile__container'>
        <h3 className='profile__title'>Привет, {currentUser.name}!</h3>
        <form className='profile__form' onSubmit={handleSubmit}>
          <fieldset className='profile__fieldset'>
            <div className='profile__wrapper'>
              <label className='profile__label'>Имя</label>
              <input
                name='name'
                type='text'
                className='profile__input profile__input_type_name'
                onChange={handleChangeName}
                value={state.name}
                minLength='2'
                maxLength='8'
                onBlur={onBlur}
                required
              >
              </input>
            </div>
            <div>{<p className='form__errors'>{errors.name}</p>}</div>
            <div className='profile__line'></div>
            <div className='profile__wrapper'>
              <label className='profile__label'>E&#8209;mail</label>
              <input
                name='email'
                type='email'
                className='profile__input profile__input_type_email'
                onChange={handleChangeEmail}
                value={state.email}
                onBlur={onBlur}
                required
              >
              </input>
            </div>
            <div className='profile__div-errors'>{<p className='form__errors'>{errors.email}</p>}</div>
          </fieldset>
          <button type='submit' className='profile__button_type_submit' disabled={!isValid}>Редактировать</button>
        </form>
        <button type='submit' className='profile__button_type_exit' onClick={signOut}>Выйти из аккаунта</button>
      </div>
    </>
  );
}

export default Profile;