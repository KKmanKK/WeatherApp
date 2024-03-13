import React, { FC } from 'react';
import { IDataCity } from '../Search/Search';
import { SearchItem } from '../SearchItem/SearchItem';
import styles from './SearchList.module.css';
interface ISearchList {
  data: IDataCity[];
  loadingDataCity: boolean;
  handleClickSity: (s: IDataCity) => void;
}
export const SearchList: FC<ISearchList> = ({
  data,
  loadingDataCity,
  handleClickSity,
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
            />
          ))}
        </>
      )}
    </div>
  );
};
