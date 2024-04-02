import React, { FC, useEffect, useState } from 'react';
import style from './Search.module.css';
import { useDebounce } from '../../hooks/useDebounce';
import { fetchDataCity } from '../../features/api';
import { SearchList } from '../SearchList/SearchList';
import { IDataCity } from '../../types';
interface iSearch {
  handleClickSity(s: IDataCity): void;
}

export const Search: FC<iSearch> = ({ handleClickSity }) => {
  const [value, setValue] = useState('');
  const [dataCity, setDataSity] = useState<{
    data: IDataCity[];
    isLoading: boolean;
  }>({ data: [], isLoading: false });
  const debounceValue = useDebounce(value, 500);

  useEffect(() => {
    if (value.trim() !== '' && value.length > 2) {
      if (debounceValue) {
        setDataSity((prev) => {
          return { ...prev, isLoading: true };
        });
        fetchDataCity(debounceValue).then((data) => {
          if (!data) {
            return;
          }
          setDataSity((prev) => {
            return { ...prev, data };
          });
        });
        setDataSity((prev) => {
          return { ...prev, isLoading: false };
        });
      }
    }
  }, [debounceValue]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };
  const changeValue = () => {
    setValue('');
  };
  const changeDataCity = () => {
    setDataSity((prev) => {
      return {
        ...prev,
        data: [],
      };
    });
  };
  return (
    <section className={style.wrapper}>
      <div className={style.inputwrapper}>
        <input
          className={style.input}
          placeholder="Введите название города"
          value={value}
          onChange={(e) => handleChange(e)}
        />
        {dataCity.isLoading ? (
          'Loading...'
        ) : dataCity && dataCity.data.length > 0 && value.length > 2 ? (
          <SearchList
            data={dataCity.data}
            handleClickSity={handleClickSity}
            changeValue={changeValue}
            changeDataCity={changeDataCity}
          />
        ) : (
          ' '
        )}
      </div>
    </section>
  );
};
