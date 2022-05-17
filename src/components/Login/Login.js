import React from 'react';
import Form from '../Form/Form'
import { Link } from 'react-router-dom';

function Login({ handleLogin }) {

  const [state, setState] = React.useState({
    email: "",
    password: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
    console.log(state);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = state;
    if (!password || !email) return;
    handleLogin(email, password);
  }

  return (
    <>
      <div className='register__container'>
        <Form
          title='Рады видеть!'
          buttonText='Войти'
          onSubmit={handleSubmit}
          handleChangeEmail={handleChange}
          handleChangePassword={handleChange} />
      </div>
      <div className='form__block'>
        <p className='form__text'>Ещё не зарегистрированы?</p>
        <Link to='/signup' className='form__link'>
          Регистрация
        </Link>
      </div>
    </>
  );
}

export default Login;