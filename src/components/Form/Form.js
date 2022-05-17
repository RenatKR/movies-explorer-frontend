import React from 'react';
import logo from '../../images/logo.svg'

function Form({
  title,
  name,
  buttonText,
  signup,
  handleChangeName,
  handleChangeEmail,
  handleChangePassword,
  onSubmit,
}) {
  return (
    <>
      <img src={logo} className='logo' alt='logo' />
      <h3 className='form__title'>{title}</h3>
      <form className='form' onSubmit={onSubmit}>
        <fieldset className='form__fieldset'>
          <label className='form__label'>Имя</label>
          <input
            name='name'
            type='text'
            className='form__input ${name}__input_type_name'
            autoComplete='off'
            onChange={handleChangeName}
          ></input>
          <label className='form__label'>Email</label>
          <input
            name='email'
            type='email'
            className='form__input ${name}__input_type_email'
            autoComplete='off'
            onChange={handleChangeEmail}
          ></input>
          {signup && <label className='form__label'>Пароль</label>}
          {signup && <input
            name='password'
            type='password'
            className='form__input ${name}__input_type_password'
            autoComplete='off'
            onChange={handleChangePassword}
          ></input>}
          <button type='submit' className='form__button'>{buttonText}</button>

        </fieldset>
      </form>
    </>
  );
}

export default Form;




