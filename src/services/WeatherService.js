import { useHttp } from '../hooks/http.hook';

const useWeatherService = () => {
  const { request, error, clearError, loading } = useHttp();

  const _apiKey = '312b3e4a5c0f7918f5b3787c71cdc370';
  const _apiBase = 'https://api.openweathermap.org/data/2.5/';

  const getTempByCoords = async (lat, lon) => {
    const res = await request(
      `${_apiBase}weather?lat=${lat}&lon=${lon}&appid=${_apiKey}&units=metric&lang=ru`,
    );
    return _transformWeather(res);
  };

  const getTempByCityName = async (cityName) => {
    const res = await request(
      `${_apiBase}weather?q=${cityName}&appid=${_apiKey}&units=metric&lang=ru`,
    );
    return _transformWeather(res);
  };

  const getTempByfiveDays = async (lat, lon) => {
    const res = await request(
      `${_apiBase}/forecast?lat=${lat}&lon=${lon}&appid=${_apiKey}&units=metric&lang=ru`,
    );

    return _transformWeatherForDays(res);
  };

  const _transformWeather = (weather) => {
    return {
      temp: Math.round(weather.main.temp),
      place: weather.name,
      icon: weather.weather[0].main,
      feelsLike: Math.round(weather.main.feels_like),
      description: weather.weather[0].description,
      coords: {
        lat: weather.coord.lat,
        lon:weather.coord.lon
      },
    };
  };

  const _transformWeatherForDays = (weather) => {
    return {
      place: weather.city.name,
      arrWeatherDays: weather.list,
    };
  };

  return { getTempByCoords, getTempByfiveDays, getTempByCityName, error, clearError, loading };
};

export default useWeatherService;
