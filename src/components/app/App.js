import { Component } from 'react';

import WeatherService from '../../services/WeatherService';

import './App.css';

class App extends Component {
  componentDidMount = () => {
    this.getTemp();
  }

  state = {
    temp: null,
  }

  weatherService = new WeatherService();

  onUpdateTemp = (temp) => {
    this.setState({ temp });
  }

  getTemp = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      this.weatherService.getResourse(position.coords.latitude, position.coords.longitude)
        .then(res => {
          this.onUpdateTemp(Math.round(res.main.temp));
        });

    });
  }

  render() {
    const {temp} = this.state;

    return (
        <h2>Температура в Питере: {temp} °C</h2>
    );
  }
}

export default App;
