import React from "react";
import Form from '../Form/Form'
import logo from '../../images/logo.svg'

function Profile({ userName = 'Костик' }) {
    return (
        <>
            <div className="profile__container">
                <h3 className="profile__title">Привет, {userName}!</h3>
                <form className="profile__form">
                    <fieldset className="profile__fieldset">
                        <div className="profile__wrapper">
                            <label className="profile__label">Имя</label>
                            <input
                                name='name'
                                type='text'
                                className="profile__input profile__input_type_name">
                            </input>
                        </div>
                        <div className="profile__line"></div>
                        <div className="profile__wrapper">
                            <label className="profile__label">E&#8209;mail</label>
                            <input
                                name='email'
                                type='email'
                                className="profile__input profile__input_type_email">
                            </input>
                        </div>
                    </fieldset>
                    <button type="submit" className="profile__button_type_submit">Редактировать</button>
                </form>
                <button type="submit" className="profile__button_type_exit">Выйти из аккаунта</button>
            </div>
        </>
    );
}

export default Profile;