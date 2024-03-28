import React, { FC } from 'react';
import { IDataCity } from '../Search/Search';
import { SearchItem } from '../SearchItem/SearchItem';
import styles from './SearchList.module.css';
interface ISearchList {
  data: IDataCity[];
  loadingDataCity: boolean;
  handleClickSity: (s: IDataCity) => void;
  changeValue: () => void;
  changeDataCity: () => void;
}
export const SearchList: FC<ISearchList> = ({
  data,
  loadingDataCity,
  handleClickSity,
  changeValue,
  changeDataCity,
}) => {
  return (
    <div className={styles.list}>
      {loadingDataCity ? (
        'Loading...'
      ) : (
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
      )}
    </div>
  );
};
