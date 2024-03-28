import React, { FC, useState } from 'react';
import styles from './DayNext.module.css';
import { ICurrentWeatherData, IForecastDataWeather } from '../../App';
import { DayInfo } from '../DayInfo/DayInfo';
interface IDayNexProps {
  data: IForecastDataWeather | undefined;
  weekDay: string;
}
export const DayNext: FC<IDayNexProps> = ({ data, weekDay }) => {
  if (!data) {
    return;
  }
  const [showInfo, setShowInfo] = useState(false);
  const handleClick: React.MouseEventHandler<HTMLElement> = (e) => {
    setShowInfo((prev) => !prev);
  };
  return (
    <div onClick={handleClick} className={styles.dayCart}>
      <article
        className={`${styles.day} ${showInfo ? `${styles.active}` : ''}`}
      >
        <div className={styles.day_name}>
          <img
            className={styles.img}
            src={`/assets/icons/${data.icon}.png`}
            alt=""
          />
          <div>{weekDay}</div>
        </div>
        <div className={styles.day_short_info}>
          <div>{data.description}</div>
          <div className={styles.day_temp}>
            <div>{Math.round(data.temp_min)}℃</div> /
            <div>{Math.round(data.temp_max)}℃</div>
          </div>
        </div>
      </article>
      {showInfo && <DayInfo data={data} />}
    </div>
  );
};
