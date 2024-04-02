import React, { FC, useState } from 'react';
import styles from './ForecastDataWeather.module.css';
import { DayInfo } from '../DayInfo/DayInfo';
import { DayNext } from '../DayNext/DayNext';
import { IForecastDataWeather } from '../../types';

interface IForecastWeatherProps {
  data: IForecastDataWeather[] | undefined;
}
const weekDay = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
export const ForecastWeather: FC<IForecastWeatherProps> = ({ data }) => {
  if (!data) {
    return;
  }

  return (
    <section className={styles.dataDay}>
      <h2 className={styles.title}>Daily</h2>
      {data.map((el, index) => (
        <DayNext key={el.temp_max} data={el} weekDay={weekDay[index]} />
      ))}
    </section>
  );
};
