import React, { FC } from 'react';
import styles from './SearchItem.module.css';
import { IDataCity } from '../Search/Search';
interface ISearchItem {
  dataCity: IDataCity;
  handleClickSity: (s: IDataCity) => void;
  changeValue: () => void;
  changeDataCity: () => void;
}
export const SearchItem: FC<ISearchItem> = ({
  dataCity,
  handleClickSity,
  changeValue,
  changeDataCity,
}) => {
  const onClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    // console.log(dataCity);
    changeValue();
    changeDataCity();
    handleClickSity(dataCity);
  };
  return (
    <div className={styles.item} onClick={onClick}>
      {dataCity.name}{' '}
    </div>
  );
};
