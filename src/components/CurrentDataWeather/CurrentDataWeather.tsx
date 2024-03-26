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
        <div></div>
      </div>
    </div>
  );
};
