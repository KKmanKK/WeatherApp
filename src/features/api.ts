import { ICurrentWeatherData, IDataCity, IForecastDataWeather } from "../types";
import { checkDuble } from "./utils";

export const urlGeo = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const urlWeather = 'https://api.openweathermap.org/data/2.5';
export const urlForecast = 'https://api.openweathermap.org/data/2.5';
export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6fa276b963msh7383287752700dcp1175b6jsn576bf5850b57',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  },
};
export async function fetchDataWeaher(city: IDataCity) {
  try {
    const response = await Promise.all([
      fetch(
        `${urlWeather}/weather?lat=${city.latitude}&lon=${city.longitude}&appid=3f209075abe13cf37c34be6fb2ceae05&units=metric`,
      ),
      fetch(
        `${urlForecast}/forecast?lat=${city.latitude}&lon=${city.longitude}&appid=3f209075abe13cf37c34be6fb2ceae05&units=metric`,
      ),
    ]);
    const currentWeatherData = await response[0].json();

    const forecastWeatherData = await response[1].json();

    let currentWeatherDataObj: ICurrentWeatherData = {
      city: currentWeatherData.name,
      description: currentWeatherData.weather[0].description,
      icon: currentWeatherData.weather[0].icon,
      temp: currentWeatherData.main.temp,
      feels_like: currentWeatherData.main.feels_like,
      wind_speed: currentWeatherData.wind.speed,
      humidity: currentWeatherData.main.humidity,
      pressure: currentWeatherData.main.pressure,
    }

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
      }))

    return {
      currentWeatherDataObj,
      arrFrecast
    }
  } catch (error) {
    console.error(error);
  }
}
export async function fetchDataCity(debounceValue: any) {
  try {
    const response = await fetch(
      `${urlGeo}/cities?minPopulation=10000&namePrefix=${debounceValue}`,
      options,
    );
    const result = await response.json();
    console.log(result.data);
    let arr: any[] = [];
    arr = checkDuble(result.data);
    return arr
  } catch (error) {
    console.error(error);
  }
}