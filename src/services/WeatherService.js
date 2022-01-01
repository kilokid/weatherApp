class WeatherService {
    #apiKey = '312b3e4a5c0f7918f5b3787c71cdc370';

    getResourse = async (url) => {
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Petersburg&appid=${this.#apiKey}`);

        if (!res.ok) {
            throw new Error(`Произошла ошибка при получении погоды, статус ошибки: ${res.status}`);
        }

        return await res.json();
    }

    gettingWeather = async () => {
        const res = await this.getResourse();
        return this.#transformFormCardWeather(res);
    }

    #transformFormCardWeather = (weather) => {
        return {
            temp: weather.main.temp,
        };
    }
}

export default WeatherService;