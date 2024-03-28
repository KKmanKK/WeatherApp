import React, { FC, useEffect, useState } from 'react';
import style from './Search.module.css';
import { useDebounce } from '../../hooks/useDebounce';
import { options, urlGeo, urlWeather } from '../../features/api';
import { SearchList } from '../SearchList/SearchList';
interface iSearch {
  handleClickSity(s: IDataCity): void;
}
export interface IDataCity {
  id: number;
  name: string;
  countryCode: string;
  latitude: number;
  longitude: number;
}
export const Search: FC<iSearch> = ({ handleClickSity }) => {
  const [value, setValue] = useState('');
  const [dataCity, setDataSity] = useState<IDataCity[]>([
    // { id: 1, name: 'name', countryCode: 'sd', latitude: 1, longitude: 4 },
    // { id: 1, name: 'name', countryCode: 'sd', latitude: 1, longitude: 4 },
  ]);
  const debounceValue = useDebounce(value, 500);
  const [loadingDataCity, setLoadingDataCity] = useState(false);
  useEffect(() => {
    if (value.trim() !== '' && value.length > 2) {
      async function fetchDataCity() {
        try {
          setLoadingDataCity(true);
          const response = await fetch(
            `${urlGeo}/cities?minPopulation=10000&namePrefix=${debounceValue}`,
            options,
          );
          const result = await response.json();
          console.log(result.data);
          setLoadingDataCity(false);
          setDataSity(result.data);
        } catch (error) {
          console.error(error);
        }
      }
      if (debounceValue) {
        fetchDataCity();
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
    setDataSity([]);
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
        {dataCity.length > 0 && value.length > 2 ? (
          <SearchList
            data={dataCity}
            loadingDataCity={loadingDataCity}
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
