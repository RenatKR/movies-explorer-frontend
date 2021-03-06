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

  React.useEffect(() => {
    compareValues();
  }, [state, handleSubmit])

  const formRef = React.useRef();

  React.useEffect(() => {
    if (!nameInputValid || !emailInputValid) {
      setIsValid(false);
    }
    if (state.name.length < 2) {
      setIsValid(formRef.current.checkValidity());
    }

  }, [handleChange]);

  const [nameInputValid, setNameInputValid] = React.useState(true);
  const [emailInputValid, setEmailInputValid] = React.useState(true);

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

    const nameRegex = /^[A-Za-zА-ЯЁа-яё\-\s]+$/ig;

    if (nameRegex.test(e.target.value) === false) {
      setErrors({ ...errors, name: 'Поле "Имя" должно содержать только латиницу, кириллицу, пробел или дефис' });
      setNameInputValid(false);
      setIsValid(false);
    } else {
      setErrors({ ...errors, name: target.validationMessage });
      setNameInputValid(true);
      setIsValid(target.closest("form").checkValidity());
    }
  }

  const handleChangeEmail = (e) => {
    compareValues();

    handleChange(e);

    const target = e.target;

    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/ig;

    if (!emailRegex.test(e.target.value)) {
      setErrors({ ...errors, email: 'Введите правильный email' });
      setEmailInputValid(false);
      setIsValid(false);

    } else {
      setErrors({ ...errors, email: target.validationMessage });
      setEmailInputValid(true);
      setIsValid(target.closest("form").checkValidity());
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

  function compareValues() {
    if (state.email === currentUser.email || state.name === currentUser.name) {
      setIsValid(false);
    }

    if (state.email !== currentUser.email || state.name !== currentUser.name) {
      setIsValid(true);
    }
  }

  return (
    <>
      <div className='profile__container'>
        <h3 className='profile__title'>Привет, {currentUser.name}!</h3>
        <form className='profile__form' onSubmit={handleSubmit} ref={formRef}>
          <fieldset className='profile__fieldset'>
            <div className='profile__wrapper'>
              <label className='profile__label'>Имя</label>
              <input
                name='name'
                type='text'
                className='profile__input profile__input_type_name'
                onChange={(e) => handleChangeName(e)}
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
                onChange={(e) => handleChangeEmail(e)}
                value={state.email}
                onBlur={onBlur}
                required
              >
              </input>
            </div>
            <div className='profile__div-errors'>{<p className='form__errors'>{errors.email}</p>}</div>
          </fieldset>
          <button type='submit' className={`profile__button_type_submit ${!isValid && 'profile__button_type_disabled'}`} disabled={!isValid || !nameInputValid || !emailInputValid} >Редактировать</button>
        </form>
        <button type='submit' className='profile__button_type_exit' onClick={signOut}>Выйти из аккаунта</button>
      </div>
    </>
  );
}

export default Profile;