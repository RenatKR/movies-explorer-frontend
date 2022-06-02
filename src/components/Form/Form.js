import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Form({
  title,
  name,
  buttonText,
  signup,
  handleRegister,
  handleLogin,
  registerError,
  setRegisterError
}) {

  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
    message: "",
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

  const handleChangeEmail = (e) => {

    const target = e.target;

    handleChange(e);

    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/ig;

    if (!emailRegex.test(state.email)) {
      setErrors({ ...errors, email: 'Введите правильный email' })
      setIsValid(false);
    }

    if (emailRegex.test(state.email)) {
      setErrors({ ...errors, email: target.validationMessage });
      setIsValid(target.closest("form").checkValidity());
    }
  }

  const handleChangeName = (e) => {

    const target = e.target;

    handleChange(e);

    const nameRegex = /[A-ZА-ЯЁа-яё\-\s]/ig;

    if (!nameRegex.test(state.name)) {
      setErrors({ ...errors, name: 'Поле "Имя" должно содержать только латиницу, кириллицу, пробел или дефис' })
      setIsValid(false);
    }

    if (nameRegex.test(state.name)) {
      setErrors({ ...errors, name: target.validationMessage });
      setIsValid(target.closest("form").checkValidity());
    }
  }

  function handleSubmitRegister(e) {
    e.preventDefault();
    const { name, email, password } = state;
    if (!password || !email || !name) return;
    handleRegister(name, email, password);
    setState({ password: "", email: "", message: "", name: "", });
  }

  function handleSubmitLogin(e) {
    e.preventDefault();
    const { email, password } = state;
    if (!password || !email) return;
    handleLogin(email, password);
    setState({ password: "", email: "", message: "", name: "", });
  }

  function onBlur () {
    setErrors({});
    setRegisterError('');
  }

  return (
    <>
      <Link to='/'><img src={logo} className='logo' alt='logo' /></Link>
      <h3 className='form__title'>{title}</h3>
      <form className='form' onSubmit={signup ? handleSubmitRegister : handleSubmitLogin}>
        <fieldset className='form__fieldset'>
          {signup && <label className='form__label'>Имя</label>}
          {signup && <input
            type='text'
            name='name'
            className='form__input ${name}__input_type_name'
            autoComplete='off'
            required
            onChange={handleChangeName}
            value={state.name}
            minLength='2'
            maxLength='8'
            onBlur={onBlur}
          >
          </input>}
          {signup && <div><p className='form__errors'>{errors.name}</p></div>}

          <label className='form__label'>Email</label>
          <input
            name='email'
            type='email'
            className='form__input ${name}__input_type_email'
            autoComplete='off'
            onChange={handleChangeEmail}
            value={state.email}
            required
            onBlur={onBlur}
          ></input>
          <div>{<p className='form__errors'>{errors.email}</p>}</div>
          <label className='form__label'>Пароль</label>
          <input
            name='password'
            type='password'
            className='form__input ${name}__input_type_password'
            autoComplete='off'
            onChange={handleChange}
            value={state.password}
            required
            onBlur={onBlur}
          ></input>
          <div>{<p className='form__errors'>{errors.password}</p>}</div>
          <div>{<p className='form__errors'>{registerError}</p>}</div>
          <button type='submit' className={`form__button ${!isValid && 'form__button_disabled'}`} disabled={!isValid}>{buttonText}</button>
        </fieldset>
      </form>
    </>
  );
}

export default Form;




