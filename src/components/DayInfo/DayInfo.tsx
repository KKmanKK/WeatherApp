import React, { FC } from 'react';
import styles from './DayInfo.module.css';
import { IForecastDataWeather } from '../../types';
interface IDayInfoProps {
  data: IForecastDataWeather;
}
export const DayInfo: FC<IDayInfoProps> = ({ data }) => {
  return (
    <article className={styles.day_info}>
      <div className={styles.day_infoPart}>
        <div className={styles.day_partItem}>
          <div>Pressure</div>
          <div>{data.pressure}hPa</div>
        </div>
        <div className={styles.day_partItem}>
          <div>Clouds</div>
          <div>{data.clouds}%</div>
        </div>
        <div className={styles.day_partItem}>
          <div>Sea level</div>
          <div>{data.sea_level}m</div>
        </div>
      </div>
      <div className={styles.day_infoPart}>
        <div className={styles.day_partItem}>
          <div>Humidity</div>
          <div>{data.humidity}%</div>
        </div>
        <div className={styles.day_partItem}>
          <div>Wind speed</div>
          <div>{data.wind_speed}m/s</div>
        </div>
        <div className={styles.day_partItem}>
          <div>Feels like</div>
          <div>{Math.round(data.feels_like)}℃</div>
        </div>
      </div>
    </article>
  );
};
