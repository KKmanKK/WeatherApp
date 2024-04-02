
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
export interface IDataCity {
    id: number;
    name: string;
    countryCode: string;
    latitude: number;
    longitude: number;
}
