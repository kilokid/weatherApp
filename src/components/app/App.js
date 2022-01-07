import { useState, useEffect } from 'react';

import WeatherService from '../../services/WeatherService';
import Container from '../container/Container';

import './App.css';

const App = () => {

  const [temp, setTemp] = useState(null);
  const [place, setPlace] = useState(null);
  const [icon, setIcon] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [description, setDescription] = useState(null);

  useEffect(() => {
    getTemp();
  }, []);

  const weatherService = new WeatherService();

  const onUpdateTemp = (temp, place, icon, feelsLike, description) => {
    setTemp(temp);
    setPlace(place);
    setIcon(icon);
    setFeelsLike(feelsLike);
    setDescription(description)
  }

  const getTemp = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      weatherService.getResourse(position.coords.latitude, position.coords.longitude)
        .then(res => {
          onUpdateTemp(
            Math.round(res.main.temp), 
            res.name, 
            res.weather[0].main, 
            Math.round(res.main.feels_like),
            res.weather[0].description,
          );
        });
    });
  }

  return (
    <Container temp={temp} place={place} icon={icon} feelsLike={feelsLike} description={description} />
  );
}

export default App;
