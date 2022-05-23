import React from 'react';
import logo from '../../images/logo.svg';

function Form({
  title,
  name,
  buttonText,
  signup,
  handleChangeName,
  handleChangeEmail,
  handleChangePassword,
  //onSubmit,
  handleRegister,
  //errors,
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

    const nameRegex = /[A-ZА-ЯЁа-яё\-\s]/ig;

    if (!nameRegex.test(state.name)) {
      setErrors({...errors, name: 'Поле "Имя" должно содержать только латиницу, кириллицу, пробел или дефис'})
      setIsValid(false);
    }

    if (nameRegex.test(state.name)) {
      setIsValid(true);
    }

    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(state.email)) {
      setErrors({...errors, email: 'Введите правильный email'})
      setIsValid(false);
    }

    if (emailRegex.test(state.email)) {
      setIsValid(true);
    }
  }


  function handleSubmit(e) {
    e.preventDefault();
    console.log(state);
    const { name, email, password } = state;
    if (!password || !email) return;
    handleRegister(name, email, password);
    // setState({ password: "", email: "", message: "" });
  }


  return (
    <>
      <img src={logo} className='logo' alt='logo' />
      <h3 className='form__title'>{title}</h3>
      <form className='form' onSubmit={handleSubmit}>
        <fieldset className='form__fieldset'>
          {signup && <label className='form__label'>Имя</label>}
          {signup && <input
            type='text'
            name='name'
            className='form__input ${name}__input_type_name'
            autoComplete='off'
            required
            onChange={handleChange}
            value={state.name}
            minLength='2'
            maxLength='8'
          >
          </input>}
          <div>{errors.name && <p className='form__errors'>{errors.name || 'Ошибка!'}</p>}</div>

          <label className='form__label'>Email</label>
          <input
            name='email'
            type='email'
            className='form__input ${name}__input_type_email'
            autoComplete='off'
            onChange={handleChange}
            value={state.email}
            required
          ></input>
          <div>{errors.email && <p className='form__errors'>{errors.email || 'Ошибка!'}</p>}</div>
          <label className='form__label'>Пароль</label>
          <input
            name='password'
            type='password'
            className='form__input ${name}__input_type_password'
            autoComplete='off'
            onChange={handleChange}
            value={state.password}
            required
          ></input>
          <div>{errors.password && <p className='form__errors'>{errors.password || 'Ошибка!'}</p>}</div>
          <button type='submit' className={`form__button ${!isValid && 'form__button_disabled'}`} disabled={isValid}>{buttonText}</button>
        </fieldset>
      </form>
    </>
  );
}

export default Form;




