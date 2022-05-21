import React from 'react';
import logo from '../../images/logo.svg';
import { useForm } from 'react-hook-form';

function Form({
  title,
  name,
  buttonText,
  signup,
  handleChangeName,
  handleChangeEmail,
  handleChangePassword,
  //onSubmit,
  isValid,
  //errors,
}) {

  const onSubmit = (data) => {
    console.log(data)
  }

  const [result, setResult] = React.useState({
    message: '',
    success: false
  })


  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const validators = {
    required: 'Не может быть пустым'
  }

  return (
    <>
      <img src={logo} className='logo' alt='logo' />
      <h3 className='form__title'>{title}</h3>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <fieldset className='form__fieldset'>
          {signup && <label className='form__label'>Имя</label>}
          {signup && <input
            type='text'
            name='name'
            className='form__input ${name}__input_type_name'
            autoComplete='off'
            {...register('name', {
              required: "Поле обязательно к заполнению",
              minLength: {
                value: 2,
                message: "Поле 'Имя' должно быть не менее 2 букв"
              },
              maxLength: {
                value: 10,
                message: "Поле 'Имя' должно быть не более 10 букв"
              },
              pattern: {
                value: /[А-ЯЁA-Z\-\s]{2,10}$/i,
                message: "Поле 'Имя' должно содержать только латиницу, кириллицу, пробел или дефис"
              },
            })}>
          </input>}
          <div>{errors.name && <p className='form__errors'>{errors.name.message || 'Ошибка!'}</p>}</div>

          <label className='form__label'>Email</label>
          <input
            name='email'
            type='email'
            className='form__input ${name}__input_type_email'
            autoComplete='off'
            {...register('name', {
              required: "Поле обязательно к заполнению",
              pattern: {
                value: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i,
                message: "Поле 'Имя' должно содержать только латиницу, кириллицу, пробел или дефис"
              },
            })}
          // onChange={handleChangeEmail}
          ></input>
          <div>{errors.email && <p className='form__errors'>{errors.email.message || 'Ошибка!'}</p>}</div>
          <label className='form__label'>Пароль</label>
          <input
            name='password'
            type='password'

            className='form__input ${name}__input_type_password'
            autoComplete='off'
          // onChange={handleChangePassword}
          ></input>
          <p className='form__errors'>{errors.password}</p>

          <button type='submit' className='form__button'>{buttonText}</button>

        </fieldset>
      </form>
    </>
  );
}

export default Form;




