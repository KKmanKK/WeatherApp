import React, { FC } from 'react';
import styles from './SearchItem.module.css';
import { IDataCity } from '../Search/Search';
interface ISearchItem {
  dataCity: IDataCity;
  handleClickSity: (s: IDataCity) => void;
}
export const SearchItem: FC<ISearchItem> = ({ dataCity, handleClickSity }) => {
  const onClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    // console.log(dataCity);
    handleClickSity(dataCity);
  };
  return (
    <div className={styles.item} onClick={onClick}>
      {dataCity.name}{' '}
    </div>
  );
};
