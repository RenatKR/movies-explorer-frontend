import React from 'react';
import './FilterCheckbox.css'

function FilterCheckbox({checkBoxState, handleCheckBox}) {
  return (
    <section className='check-box'>
      <div className='check-box__container'>
        <label class='switch'>
          <input type='checkbox' checked={checkBoxState} onChange={handleCheckBox} />
          <span class='slider round'></span>
        </label>
        <p className='check-box__name'>Короткометражки</p>
      </div>
    </section>
  );
}

export default FilterCheckbox;