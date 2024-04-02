import React, { FC } from 'react';
import styles from './SearchItem.module.css';
import { IDataCity } from '../../types';
interface ISearchItemProps {
  dataCity: IDataCity;
  handleClickSity: (s: IDataCity) => void;
  changeValue: () => void;
  changeDataCity: () => void;
}
export const SearchItem: FC<ISearchItemProps> = ({
  dataCity,
  handleClickSity,
  changeValue,
  changeDataCity,
}) => {
  const onClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    changeValue();
    changeDataCity();
    handleClickSity(dataCity);
  };
  return (
    <div className={styles.item} onClick={onClick}>
      {`${dataCity.name} ${dataCity.countryCode}`}
    </div>
  );
};
