import React from "react";
import IconSaved from '../../../images/saved-icon.svg';

function MoviesCard({ src, title }) {
  return (
    <>
      <div className="card">
        <div className="card__img">
          <img className="card__cover" src='https://yandex-images.clstorage.net/yvO5d6085/9508a6xW5ZPP/PPuG6i7lHrw6IHIjDy5nQ9HM_zFCA7UKPUAvaEovgbGbQtrFRSxZywV77BLFInVKVwPWcapvDwX55oAtJ2CHqnjPR1vKFb6sOhCisr--F_NRPH9wAnOQj0z1v_kqH_UA_oLsI_JuHp3iyOsA8tDEv8KmkwB-204DP5ZUGTJXcrw-ibcZeEeM3j2BESEtDzSGAk3uJBM31zlrhgyqDtz282lm7vERHx5NE2hLIwHgdXzwZFEjeJruEUxDBmqzJQJsjqkUSTi0nV4eg0JhTg60B8EePzcABjS66IW-uOyvF6OqFxzQYO4-_IMZSXDxwvStQyYj8LgqPHD9IyWK80byn97pdOkqJw9vzaMBc4-M9mdSjM0mg7dn6PkE71uuL_Xi-6Z_czDc3h5ye0qy0eOkHzPkEmD4ijzTvlCXipDnEs8Ny2Tqmlfd7y3h00Ke_VSnwfzs9ULkNepZ1q163Yw3AVr3P4GSnLye4aj44DHTt32A16IjOqh9kHyhJmnQh-LNrQn0-QrFLA6O4JCRnm62B3OfzVaAxjSo-fScOV8cl7Ma1czgI92P3JM5ahCiYWU_4wQQwvoLTlL-EfWr8VUgn38rJblrhJw8fENwc04vRkVSL67n07QG-CnVXZj9DIXjyNdNgpLNLb6giMtBArJ13JAkgjLrau1CrzIHydAFki-vKUSqiIZtbk3h0lE8Lvb0Yo-sRUBUlNpa9T64vX61wehUzFNAv13_M3nqM_NQRfywNHIxaNvsE16z14nyldCMv8i061tHLj5v8fICrQzG5LJf_gQjBdaIyzbP-zz-5mCoNw-Cg90tj5N5W9GxcqaOUBQDIsj63nFewXeokZUwTFyr5xs4JE4vPfLQcu0-V2RDPa_3E8UGmhhX7DpcP1Tzq6XesPK8Xz1TGRtSIyNn3xB3UjJ5OAxR7yE2aPK2s--uyIX4iOU_fh9Q8xF_jVXXEazvRzIWVYiatsxoE' alt={title} />
        </div>
        <div className="card__descritpion">
          <h2 className="card__title" >33 слова о дизайне</h2>
          <p className="card__duration">1ч 17м</p>
        </div>
        <button className="card__button_save">Сохранить</button>
        <button className="card__button_saved"></button>
      </div>
    </>
  )
}

export default MoviesCard;