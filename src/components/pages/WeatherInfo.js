const WeatherInfo = (props) => {
  const {weatherInfo} = props;
  console.log(weatherInfo)
  return <h2>{weatherInfo.place}</h2>;
};
// TODO:Добавить сюды метод получения погоды на 5 дней по координатам
export default WeatherInfo;
