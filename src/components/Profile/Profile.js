import React from 'react';

import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function Profile({ handleEditUser, signOut }) {

  const currentUser = React.useContext(CurrentUserContext);

  const [state, setState] = React.useState({
    name: "  ",
    email: "  ",
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
    const target = e.target;
    const name = target.name;

    handleChange(e)


    const nameRegex = /[A-ZА-ЯЁа-яё\-\s]/ig;

    if (!nameRegex.test(state.name)) {
      setErrors({ ...errors, [name]: 'Поле "Имя" должно содержать только латиницу, кириллицу, пробел или дефис' })
      setIsValid(false);
    }

    if (nameRegex.test(state.name)) {
      setErrors({ ...errors, [name]: target.validationMessage });
      setIsValid(true);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email } = state;
    handleEditUser(name, email);
  }

  function onBlur() {
    setErrors({});
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
                value={state.name === "  " ? currentUser.name : state.name}
                minLength='2'
                maxLength='8'
                onBlur={onBlur}
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
                onChange={handleChange}
                value={state.email === "  " ? currentUser.email : state.email}
                onBlur={onBlur}
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