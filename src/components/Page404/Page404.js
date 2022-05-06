import React from "react";
import { Link } from "react-router-dom";

function Page404() {
    return (
        <div className="page404">
            <h1 className="page404__title">404</h1>
            <h2 className="page404__subtitle">Станица не найдена</h2>
            <Link to="/signin" className="page404__link">Назад</Link>
        </div>
    );
}

export default Page404;