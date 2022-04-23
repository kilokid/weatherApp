import { useState, useEffect } from 'react';
import useWeatherService from '../../services/WeatherService';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import WeatherCard from '../weatherCard/WeatherCard';
import InputSearch from '../inputSearch/InputSearch';

import '../../styles/base.scss';
import './app.scss';

const App = () => {
  const [currentGeo, setCurrentGeo] = useState({});
  const [coords, setCoords] = useState(false);

  useEffect(() => {
    updateWeather();
  }, []);

  const { getTempByCoords, getTempByCityName, error, loading } = useWeatherService();

  const onWeatherRequest = (weather) => {
    setCurrentGeo(weather);
  };

  const errorGetCoords = () => {
    setCoords(true);
  };

  const updateWeather = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords(false);

      getTempByCoords(position.coords.latitude, position.coords.longitude).then(onWeatherRequest);
    }, errorGetCoords);
  };

  const getWeatherForCity = (name) => {
    getTempByCityName(name).then(onWeatherRequest);
    setCoords(false);
  };

  return (
    <Router>
      <div className="container">
        <InputSearch onAdd={getWeatherForCity} />
        <WeatherCard currentGeo={currentGeo} error={error} loading={loading} coords={coords} />
      </div>
    </Router>
  );
};

export default App;
