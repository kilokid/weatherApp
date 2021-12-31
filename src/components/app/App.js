import { Component } from 'react';

import WeatherService from '../../services/WeatherService';

import './App.css';

class App extends Component {
  state = {
    temp: null,
  }

  weatherService = new WeatherService();

  componentDidMount = () => {
    this.getTemp();
  }
  
  onUpdateTemp = (temp) => {
    this.setState({temp});
  }

  getTemp = () => {
    this.weatherService
      .gettingWeather()
      .then(this.onUpdateTemp);
  }

  render() {
    const {temp} = this.state;

    return (
      <h1>Температура в Питере: {temp}</h1>
    );
  }
}

export default App;
