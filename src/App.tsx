import { useEffect, useState } from 'react';
import './App.css';
import { IDataCity, Search } from './components/Search/Search';
import { urlForecast, urlWeather } from './features/api';
import { DataWeather } from './components/CurrentDataWeather/CurrentDataWeather';
import { ForecastWeather } from './components/ForecastDataWeather/ForecastWeather';
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
export interface IForecastDataWeather
  extends Omit<ICurrentWeatherData, 'city' | 'temp'> {
  clouds: number;
  sea_level: number;
  temp_min: number;
  temp_max: number;
}
function App() {
  const [currentWeatherData, setCurrentWeatherData] = useState<
    ICurrentWeatherData | undefined
  >(undefined);
  const [forecastWeatherData, setForecastWeatherData] = useState<
    IForecastDataWeather[] | undefined
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
        let arrFrecast: IForecastDataWeather[] = [];
        let arr2: any[] = forecastWeatherData.list;
        arr2.slice(0, 7).forEach((el) =>
          arrFrecast.push({
            description: el.weather[0].description,
            icon: el.weather[0].icon,
            temp_min: el.main.temp_min,
            temp_max: el.main.temp_max,
            feels_like: el.main.feels_like,
            wind_speed: el.wind.speed,
            humidity: el.main.humidity,
            pressure: el.main.pressure,
            clouds: el.clouds.all,
            sea_level: el.main.sea_level,
          }),
        );
        setForecastWeatherData(arrFrecast);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDataWeaher();
  };
  return (
    <div className="wrapper">
      <h1 className="title">Weather App</h1>
      <div className="wrapper__cart">
        <Search handleClickSity={handleClickSity} />
        <DataWeather weatherData={currentWeatherData} />
      </div>
      <ForecastWeather data={forecastWeatherData} />
    </div>
  );
}

export default App;
