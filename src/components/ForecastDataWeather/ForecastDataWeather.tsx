import React, { FC } from 'react';
import styles from './ForecastDataWeather.module.css';
import { ICurrentWeatherData } from '../../App';
interface IForecastDataWeather {
  data: Omit<ICurrentWeatherData, 'city'>[] | undefined;
}
const weekDay = [
  'Monday',
  'Tuesday',
  'Wednsday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
export const ForecastDataWeather: FC<IForecastDataWeather> = ({ data }) => {
  if (!data) {
    return;
  }
  return (
    <section className={styles.dataDay}>
      <h2 className={styles.title}>Дни</h2>
      {data.map((el, index) => (
        <>
          <article className={styles.day}>
            <div className={styles.day_name}>
              <img
                className={styles.img}
                src={`/assets/icons/${el.icon}.png`}
                alt=""
              />
              <div>{weekDay[index]}</div>
            </div>
            <div className={styles.day_short_info}>
              <div>{el.description}</div>
              <div>{el.temp}</div>
            </div>
          </article>
          <article className={styles.day_info}>
            <div>
              <div>
                <div></div>
                <div></div>
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div>
              <div>
                <div></div>
                <div></div>
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
          </article>
        </>
      ))}
    </section>
  );
};
