import React, { FC } from 'react';
import styles from './CurrentDataWeather.module.css';
import { ICurrentWeatherData } from '../../types';

interface IDataWeather {
  weatherData: ICurrentWeatherData | undefined;
}
export const DataWeather: FC<IDataWeather> = ({ weatherData }) => {
  if (!weatherData) {
    return <></>;
  }
  return (
    <div className={styles.wrapper_cart}>
      <div className={styles.cart}>
        <div className={styles.top}>
          <div className={styles.top_info}>
            <div>{weatherData.city}</div>
            <div>{weatherData.description}</div>
          </div>
          <img
            className={styles.top_img}
            src={`/assets/icons/${weatherData.icon}.png`}
          />
        </div>
        <div className={styles.bottom}>
          <div className={styles.temp}>{Math.round(weatherData.temp)}℃</div>
          <div className={styles.detailes}>
            <div className={styles.subTitle}>Details</div>
            <div className={styles.details_item}>
              <div>Feels like</div>
              <div>{Math.round(weatherData.feels_like)}℃</div>
            </div>
            <div className={styles.details_item}>
              <div>Wind</div>
              <div> {weatherData.wind_speed}m/s</div>
            </div>
            <div className={styles.details_item}>
              <div>Humidity</div>
              <div> {weatherData.humidity}%</div>
            </div>
            <div className={styles.details_item}>
              <div>Pressure</div>
              <div> {weatherData.pressure}hPa</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
