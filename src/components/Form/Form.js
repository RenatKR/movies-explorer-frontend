import React from "react";
import logo from '../../images/logo.svg'

function Form({
  title,
  name,
  buttonText,
  signup
}) {
  return (
    <>
      <img src={logo} className="logo" alt="logo" />
      <h3 className="form__title">{title}</h3>
      <form className="form">
        <fieldset className="form__fieldset">
          <label className="form__label">Имя</label>
          <input
            name='name'
            type='text'
            className="form__input ${name}__input_type_name"
            autoComplete="off"
          ></input>
          <label className="form__label">Email</label>
          <input
            name='email'
            type='email'
            className="form__input ${name}__input_type_email"
            autoComplete="off"
          ></input>
          {signup && <label className="form__label">Пароль</label>}
          {signup && <input
            name='password'
            type='password'
            className="form__input ${name}__input_type_password"
            autoComplete="off"
          ></input>}
          <button type="submit" className="form__button">{buttonText}</button>

        </fieldset>
      </form>
    </>
  );
}

export default Form;




