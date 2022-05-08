import React from "react";
import Form from '../Form/Form'
import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <div className="register__container">
                <Form title='Рады видеть!' buttonText='Войти' />
            </div>
            <div className="form__block">
                <p className="form__text">Ещё не зарегистрированы?</p>
                <Link to="/signup" className="form__link">
                    Регистрация
                </Link>
            </div>
        </>
    );
}

export default Login;