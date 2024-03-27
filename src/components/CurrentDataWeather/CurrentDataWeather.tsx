import React, { FC } from 'react';
import { ICurrentWeatherData } from '../../App';
import styles from './CurrentDataWeather.module.css';

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
            <div className={styles.subTitle}>Детали</div>
            <div className={styles.details_item}>
              <div>Чувствуется как</div>
              <div>{Math.round(weatherData.feels_like)}</div>
            </div>
            <div className={styles.details_item}>
              <div>Ветер</div>
              <div> {weatherData.wind_speed}</div>
            </div>
            <div className={styles.details_item}>
              <div>Влажность</div>
              <div> {weatherData.humidity}</div>
            </div>
            <div className={styles.details_item}>
              <div>Давление</div>
              <div> {weatherData.pressure}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
