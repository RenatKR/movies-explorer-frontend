import React from 'react';
import Form from '../Form/Form'
import { Link } from 'react-router-dom';

function Register({ handleRegister }) {

  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
    message: "",
  });

  function handleChange(e) {
    console.log(state);
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
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
        />
      </div>
      <div className='form__block'>
        <p className='form__text'>Уже зарестрированы?</p>
        <Link to='/signin' className='form__link'>
          Войти
        </Link>
      </div>
    </>
  );
}

export default Register;