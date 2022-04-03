import { useState, useEffect } from 'react';

import WeatherCard from '../weatherCard/WeatherCard';
import InputSearch from '../inputSearch/InputSearch';

import '../../styles/base.scss';
import './app.scss';

const App = () => {
  return (
    <div className="container">
      <InputSearch />
      <WeatherCard />
    </div>
  );
};

export default App;
