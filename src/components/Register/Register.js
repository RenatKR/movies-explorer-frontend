import React, { useCallback } from 'react';
import Form from '../Form/Form'
import { Link } from 'react-router-dom';

function Register({ handleRegister, registerError, setRegisterError }) {



  return (
    <>
      <div className='register__container'>
        <Form
          title='Добро пожаловать!'
          buttonText='Зарегистрироваться'
          signup={true}
          handleRegister={handleRegister}
          registerError={registerError}
          setRegisterError={setRegisterError}
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