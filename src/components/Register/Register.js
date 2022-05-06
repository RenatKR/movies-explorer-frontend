import React from "react";
import Form from '../Form/Form'
import logo from '../../images/logo.svg'

function Register() {
    return (
        <>
            <div className="register__container">
                <Form title='Добро пожаловать' buttonText='Зарегистрироваться' />
            </div>
        </>
    );
}

export default Register;