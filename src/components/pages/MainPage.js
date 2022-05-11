import { useState, useEffect } from 'react';
import useWeatherService from '../../services/WeatherService';

import WeatherCard from '../weatherCard/WeatherCard';
import InputSearch from '../inputSearch/InputSearch';

const MainPage = (props) => {
  const [currentGeo, setCurrentGeo] = useState({});
  const [coords, setCoords] = useState(false);
  
  useEffect(() => {
    updateWeather();
  }, []);

  const { getTempByCoords, getTempByCityName, error, loading, clearError } = useWeatherService();

  const onWeatherRequest = (weather) => {
    setCurrentGeo(weather);
    props.getCityInfo(weather);
  };

  const errorGetCoords = () => {
    setCoords(true);
  };

  const updateWeather = () => {
    clearError();

    navigator.geolocation.getCurrentPosition((position) => {
      setCoords(false);

      getTempByCoords(position.coords.latitude, position.coords.longitude).then(onWeatherRequest);
    }, errorGetCoords);


  };

  const getWeatherForCity = (name) => {
    clearError();
    getTempByCityName(name).then(onWeatherRequest);
    setCoords(false);
  };

  return (
    <div className="container">
      <InputSearch onAdd={getWeatherForCity} />
      <WeatherCard currentGeo={currentGeo} error={error} loading={loading} coords={coords} />
    </div>
  );
};

export default MainPage;
