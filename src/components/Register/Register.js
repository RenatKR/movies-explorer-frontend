import React from "react";
import Form from '../Form/Form'
import { Link } from "react-router-dom";

function Register() {
    return (
        <>
            <div className="register__container">
                <Form title='Добро пожаловать!' buttonText='Зарегистрироваться' signup={true} />
            </div>
            <div className="form__block">
                <p className="form__text">Уже зарестрированы?</p>
                <Link to="/signin" className="form__link">
                    Войти
                </Link>
            </div>
        </>
    );
}

export default Register;