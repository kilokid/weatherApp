import { Component } from 'react';

import WeatherService from '../../services/WeatherService';

import './App.css';

class App extends Component {
  componentDidMount = () => {
    this.getTemp();
  }

  state = {
    temp: [],
  }

  // weatherService = new WeatherService();

  // onUpdateTemp = (temp) => {
  //   this.setState({ temp: temp });
  // }

  // getTemp = () => {
  //   this.weatherService
  //     .gettingWeather()
  //     .then(this.onUpdateTemp);
  // }

  getRes = async () => {
    const _apiKey = '312b3e4a5c0f7918f5b3787c71cdc370';

    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Petersburg&appid=${_apiKey}&lang=ru&units=metric`);

    if (!res.ok) {
        throw new Error(`Произошла ошибка при получении погоды, статус ошибки: ${res.status}`);
    }

    return await res.json();
  }

  getTemp = () => {
    this.getRes()
      .then(res => this.setState({temp: res.main.temp}));
  }

  render() {
    const {temp} = this.state;

    return (
        <h2>Температура в Питере: {Math.round(temp)}</h2>
    );
  }
}

export default App;
