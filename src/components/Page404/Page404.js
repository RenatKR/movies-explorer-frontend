import React from 'react';
import { Link, useHistory } from 'react-router-dom';


function Page404() {

  const history = useHistory();

  return (
    <div className='page404'>
      <div className='page404__container'>
        <h1 className='page404__title'>404</h1>
        <h2 className='page404__subtitle'>Страница не найдена</h2>
      </div>
      <Link to='/signin' className='page404__link'>Назад</Link>
      <button className="page404__link" onClick={() => history.goBack()}>Назад</button>
    </div>
  );
}

export default Page404;