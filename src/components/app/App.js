import { Component } from 'react';

import WeatherService from '../../services/WeatherService';
import Container from '../container/Container';

import './App.css';

class App extends Component {
  componentDidMount = () => {
    this.getTemp();
  }

  state = {
    temp: null,
    place: null,
    icon: null,
    feelsLike: null,
  }

  weatherService = new WeatherService();

  onUpdateTemp = (temp, place, icon, feelsLike) => {
    this.setState({ temp, place, icon, feelsLike });
  }

  getTemp = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      this.weatherService.getResourse(position.coords.latitude, position.coords.longitude)
        .then(res => {
          this.onUpdateTemp(
            Math.round(res.main.temp), 
            res.name, 
            res.weather[0].main, 
            Math.round(res.main.feels_like)
          );
        });
    });
  }

  render() {
    const {temp, place, icon, feelsLike} = this.state;

    return (
      <Container temp={temp} place={place} icon={icon} feelsLike={feelsLike} />
    );
  }
}

export default App;
