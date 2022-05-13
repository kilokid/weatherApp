import { useEffect, useState } from 'react';
import useWeatherService from '../../services/WeatherService';

const WeatherInfo = (props) => {
  const {weatherInfo} = props;
  const { getTempByfiveDays, error, loading, clearError } = useWeatherService();
  
  useEffect(() => {
    getTempByfiveDays(weatherInfo.coords.lat, weatherInfo.coords.lon);
  }, [])

  // TODO: Получать объект дней, создать компонент слайдера, выводить туда каждый день 
  return <h2>{weatherInfo.place}</h2>;
};
export default WeatherInfo;
