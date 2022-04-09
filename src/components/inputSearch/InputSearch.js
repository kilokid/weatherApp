import { useState } from 'react';

import './inputSearch.scss';

const InputSearch = ({ onAdd }) => {
  const [cityName, setCityName] = useState('');

  const updateWeather = (event) => {
    event.preventDefault();
    onAdd(cityName);
    setCityName('');
  };

  const onValueChange = (event) => {
    const target = event.target;
    setCityName(target.value);
  };

  return (
    <form className="search" onSubmit={updateWeather}>
      <input
        className="search__input"
        type="text"
        name="name"
        value={cityName}
        placeholder="Введите название города"
        onChange={onValueChange}
      />
      <button className="search__button" type="submit">
        Найти
      </button>
    </form>
  );
};

export default InputSearch;
