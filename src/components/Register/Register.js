import React, { useCallback } from 'react';
import Form from '../Form/Form'
import { Link } from 'react-router-dom';

function Register({ handleRegister }) {

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
    console.log(state);
    console.log(errors);
    setIsValid(target.closest("form").checkValidity());
    console.log(isValid);
    console.log(target.validity);
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
      <div className='register__container'>
        <Form
          title='Добро пожаловать!'
          buttonText='Зарегистрироваться'
          signup={true}
          handleChangeName={handleChange}
          handleChangeEmail={handleChange}
          handleChangePassword={handleChange}
          onSubmit={handleSubmit}
          isValid={isValid}
          errors={errors}
        />
      </div>
      <div className='form__block'>
        <p className='form__text'>Уже зарегистрированы?</p>
        <Link to='/signin' className='form__link'>
          Войти
        </Link>
      </div>
    </>
  );
}

export default Register;