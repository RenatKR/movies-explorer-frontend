import React from 'react';
import logo from '../../images/logo.svg';

function Form({
  title,
  name,
  buttonText,
  signup,
  handleRegister,
  handleLogin,
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
      setIsValid(true);
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

  return (
    <>
      <img src={logo} className='logo' alt='logo' />
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
          >
          </input>}
          {signup && <div>{errors.name && <p className='form__errors'>{errors.name || 'Ошибка!'}</p>}</div>}

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
          <button type='submit' className={`form__button ${!isValid && 'form__button_disabled'}`} disabled={!isValid}>{buttonText}</button>
        </fieldset>
      </form>
    </>
  );
}

export default Form;




