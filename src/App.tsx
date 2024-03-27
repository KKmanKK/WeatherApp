import { useEffect, useState } from 'react';
import './App.css';
import { IDataCity, Search } from './components/Search/Search';
import { urlForecast, urlWeather } from './features/api';
import { DataWeather } from './components/CurrentDataWeather/CurrentDataWeather';
export interface ICurrentWeatherData {
  city: string;
  description: string;
  icon: string;
  temp: number;
  feels_like: number;
  wind_speed: number;
  humidity: number;
  pressure: number;
}
function App() {
  const [currentWeatherData, setCurrentWeatherData] = useState<
    ICurrentWeatherData | undefined
  >(undefined);
  const [forecastWeatherData, setForecastWeatherData] = useState<
    ICurrentWeatherData | undefined
  >(undefined);

  const handleClickSity = (s: IDataCity) => {
    async function fetchDataWeaher() {
      try {
        const response = await Promise.all([
          fetch(
            `${urlWeather}/weather?lat=${s.latitude}&lon=${s.longitude}&appid=3f209075abe13cf37c34be6fb2ceae05&units=metric`,
          ),
          fetch(
            `${urlForecast}/forecast?lat=${s.latitude}&lon=${s.longitude}&appid=3f209075abe13cf37c34be6fb2ceae05&units=metric`,
          ),
        ]);
        const currentWeatherData = await response[0].json();
        console.log(currentWeatherData);
        setCurrentWeatherData({
          city: currentWeatherData.name,
          description: currentWeatherData.weather[0].description,
          icon: currentWeatherData.weather[0].icon,
          temp: currentWeatherData.main.temp,
          feels_like: currentWeatherData.main.feels_like,
          wind_speed: currentWeatherData.wind.speed,
          humidity: currentWeatherData.main.humidity,
          pressure: currentWeatherData.main.pressure,
        });
        const forecastWeatherData = await response[1].json();
        console.log(forecastWeatherData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDataWeaher();
  };
  return (
    <div className="wrapper">
      <Search handleClickSity={handleClickSity} />
      <DataWeather weatherData={currentWeatherData} />
    </div>
  );
}

export default App;
