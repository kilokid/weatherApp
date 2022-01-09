import { useState, useEffect } from 'react';

import WeatherCard from '../weatherCard/WeatherCard';

import '../../styles/base.scss';
import './app.scss';

const App = () => {

  return (
    <div className="container">
      <WeatherCard />
    </div>
  );
}

export default App;
