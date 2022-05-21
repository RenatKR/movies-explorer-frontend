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
          {...register('name', {
            required: true,
          })}

            // // name='name'
            // type='text'
            // className='form__input ${name}__input_type_name'
            // autoComplete='off'
            // {...register('name', {
            //   ...validators,
            //   minLength: {
            //     value: 2,
            //     message: 'Не менее двух букв'
            //   },
            //   maxLength: {
            //     value: 10,
            //     message: 'Не более десяти букв'
            //   },
            //   pattern: {
            //     value: /[А-ЯЁ]{2,10}/i,
            //     message: 'Только киррилица'
            //   },
            //   requires: true,
            // })}
          // onChange={handleChangeName}
          // minLength='2'
          // maxLength='30'
          ></input>}
          <div>{errors.name && <p className='form__errors'>Error!</p>}</div>
          {/* <p className='form__errors'>{errors.name}</p> */}
          {/* <label className='form__label'>Email</label>
          <input
            name='email'
            type='email'
            pattern=''
            className='form__input ${name}__input_type_email'
            autoComplete='off'
          // onChange={handleChangeEmail}
          ></input>
          <p className='form__errors'>{errors.email}</p>
          <label className='form__label'>Пароль</label>
          <input
            name='password'
            type='password'

            className='form__input ${name}__input_type_password'
            autoComplete='off'
          // onChange={handleChangePassword}
          ></input>
          <p className='form__errors'>{errors.password}</p> */}

          <button type='submit' className='form__button'>{buttonText}</button>

        </fieldset>
      </form>
    </>
  );
}

export default Form;




