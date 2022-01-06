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
  }

  weatherService = new WeatherService();

  onUpdateTemp = (temp, place, icon) => {
    this.setState({ temp, place, icon });
  }

  getTemp = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      this.weatherService.getResourse(position.coords.latitude, position.coords.longitude)
        .then(res => {
          this.onUpdateTemp(Math.round(res.main.temp), res.name, res.weather[0].main);
        });
    });
  }

  render() {
    const {temp, place, icon} = this.state;

    return (
      <Container temp={temp} place={place} icon={icon} />
    );
  }
}

export default App;
