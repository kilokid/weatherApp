import { useEffect, useState } from 'react';

import useWeatherService from '../../services/WeatherService';

import Slider from '../slider/Slider';

const WeatherInfo = (props) => {
  const {weatherInfo} = props;
  const { getTempByfiveDays, error, loading, clearError } = useWeatherService();
  const [weatherDaysInfo, setWeatherDaysInfo] = useState({});

  useEffect(() => {
    getWeatherForDays();
  }, []);

  const onWeatherRequest = (weather) => {
    setWeatherDaysInfo(weather);
  };
  
  const getWeatherForDays = () => {
    clearError();

    getTempByfiveDays(weatherInfo.coords.lat, weatherInfo.coords.lon).then(onWeatherRequest);
  }

  console.log(weatherDaysInfo)

  // TODO: Получать объект дней, создать компонент слайдера, выводить туда каждый день 
  return (
    <>
      <h2>{weatherInfo.place}</h2>
      <Slider />
    </>
  );
};
export default WeatherInfo;
