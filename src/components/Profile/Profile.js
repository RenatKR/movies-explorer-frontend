import React from 'react';

function Profile({ userName = 'Виталий', handleEditUser }) {

  const [state, setState] = React.useState({
    name: "",
    email: "",
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
    const { name, email } = state;
    handleEditUser(name, email);
  }


  return (
    <>
      <div className='profile__container'>
        <h3 className='profile__title'>Привет, {userName}!</h3>
        <form className='profile__form' onSubmit={handleSubmit}>
          <fieldset className='profile__fieldset'>
            <div className='profile__wrapper'>
              <label className='profile__label'>Имя</label>
              <input
                name='name'
                type='text'
                className='profile__input profile__input_type_name'
                onChange={handleChange}>
              </input>
            </div>
            <div className='profile__line'></div>
            <div className='profile__wrapper'>
              <label className='profile__label'>E&#8209;mail</label>
              <input
                name='email'
                type='email'
                className='profile__input profile__input_type_email'
                onChange={handleChange}>
              </input>
            </div>
          </fieldset>
          <button type='submit' className='profile__button_type_submit'>Редактировать</button>
        </form>
        <button type='submit' className='profile__button_type_exit'>Выйти из аккаунта</button>
      </div>
    </>
  );
}

export default Profile;