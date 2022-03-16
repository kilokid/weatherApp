import { useState, useEffect } from 'react';

import useWeatherService from '../../services/WeatherService';
import SwitchImg from '../../services/SwitchImg';

import './weatherCard.scss';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

const WeatherCard = () => {
  const [currentGeo, setCurrentGeo] = useState({});

  const { getTempByCoords, error, loading } = useWeatherService();

  useEffect(() => {
    updateWeather();
  }, []);

  const onWeatherRequest = (weather) => {
    setCurrentGeo(weather);
  };

  const updateWeather = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getTempByCoords(position.coords.latitude, position.coords.longitude).then(onWeatherRequest);
    });
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error) ? <View currentGeo={currentGeo} /> : null;

  return (
    <div className={error ? 'weather__card weather__card-error' : 'weather__card'}>
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
};

const View = ({ currentGeo }) => {
  const { place, temp, description, feelsLike, icon } = currentGeo;

  const newDescription = (str) => {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
  };

  let img = SwitchImg(icon);

  return (
    <>
      <h1 className="weather__city">{place}</h1>
      <div className="weather__info">
        <div className="weather__temp-info">
          <img className="weather__icon" src={img} alt="Weather icon" />
          <p className="weather__temp">{temp}°C</p>
        </div>
        <p className="weather__description">{newDescription(description)}</p>
        <p className="weather__feels">Ощущается как: {feelsLike}°C</p>
      </div>
    </>
  );
};
// test commit
export default WeatherCard;
