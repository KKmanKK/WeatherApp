import { useEffect, useState } from 'react';
import './App.css';
import { fetchDataWeaher } from './features/api';
import { DataWeather } from './components/CurrentDataWeather/CurrentDataWeather';
import { ForecastWeather } from './components/ForecastDataWeather/ForecastWeather';
import { ICurrentWeatherData, IDataCity, IForecastDataWeather } from './types';
import { Search } from './components/Search/Search';

function App() {
  const [currentWeatherData, setCurrentWeatherData] = useState<
    ICurrentWeatherData | undefined
  >(undefined);
  const [forecastWeatherData, setForecastWeatherData] = useState<
    IForecastDataWeather[] | undefined
  >(undefined);

  const handleClickSity = (s: IDataCity) => {
    fetchDataWeaher(s).then((data) => {
      setCurrentWeatherData(data?.currentWeatherDataObj);
      setForecastWeatherData(data?.arrFrecast);
    });
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
