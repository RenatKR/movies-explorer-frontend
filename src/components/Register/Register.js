import React from 'react';
import Form from '../Form/Form'
import { Link } from 'react-router-dom';

function Register({ handleRegister }) {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleChangeName(e) {
    setName(e.target.value);
    console.log(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
    console.log(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
    console.log(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister({
      name: name,
      email: email,
      password: password,
    });
  }

  return (
    <>
      <div className='register__container'>
        <Form
          title='Добро пожаловать!'
          buttonText='Зарегистрироваться'
          signup={true}
          handleChangeName={handleChangeName}
          handleChangeEmail={handleChangeEmail}
          handleChangePassword={handleChangePassword}
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