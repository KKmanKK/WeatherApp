import { useEffect, useState } from 'react';
import './App.css';
import { IDataCity, Search } from './components/Search/Search';
import { urlWeather } from './features/api';
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

  const handleClickSity = (s: IDataCity) => {
    async function fetchDataWeaher() {
      try {
        const response = await fetch(
          `${urlWeather}/weather?lat=${s.latitude}&lon=${s.longitude}&appid=3f209075abe13cf37c34be6fb2ceae05&units=metric`,
        );
        const result = await response.json();
        console.log(result);
        setCurrentWeatherData({
          city: result.name,
          description: result.weather[0].description,
          icon: result.weather[0].icon,
          temp: result.main.temp,
          feels_like: result.main.feels_like,
          wind_speed: result.wind.speed,
          humidity: result.main.humidity,
          pressure: result.main.pressure,
        });
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
