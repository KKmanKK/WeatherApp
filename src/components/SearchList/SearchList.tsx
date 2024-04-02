import React, { FC } from 'react';
import { SearchItem } from '../SearchItem/SearchItem';
import styles from './SearchList.module.css';
import { IDataCity } from '../../types';
interface ISearchList {
  data: IDataCity[];
  handleClickSity: (s: IDataCity) => void;
  changeValue: () => void;
  changeDataCity: () => void;
}
export const SearchList: FC<ISearchList> = ({
  data,
  handleClickSity,
  changeValue,
  changeDataCity,
}) => {
  return (
    <div className={styles.list}>
      <>
        {data.map((el) => (
          <SearchItem
            key={el.id}
            dataCity={el}
            handleClickSity={handleClickSity}
            changeValue={changeValue}
            changeDataCity={changeDataCity}
          />
        ))}
      </>
    </div>
  );
};
