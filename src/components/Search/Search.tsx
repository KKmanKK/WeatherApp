import React, { FC, useEffect, useState } from 'react';
import style from './Search.module.css';
import { useDebounce } from '../../hooks/useDebounce';
import { options, urlGeo, urlWeather } from '../../features/api';
import { SearchList } from '../SearchList/SearchList';
interface iSearch {}
export interface IDataCity {
  id: number;
  name: string;
  countryCode: string;
  latitude: number;
  longitude: number;
}
export const Search: FC<iSearch> = () => {
  const [value, setValue] = useState('');
  const [dataCity, setDataSity] = useState<IDataCity[]>([
    // { id: 1, name: 'name', countryCode: 'sd', latitude: 1, longitude: 4 },
    // { id: 1, name: 'name', countryCode: 'sd', latitude: 1, longitude: 4 },
  ]);
  const debounceValue = useDebounce(value, 500);
  const [loadingDataCity, setLoadingDataCity] = useState(false);
  const [watherData, setWatherData] = useState({});
  useEffect(() => {
    async function fetchDataCity() {
      try {
        setLoadingDataCity(true);
        const response = await fetch(
          `${urlGeo}/cities?namePrefix=${debounceValue}`,
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
  }, [debounceValue]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };
  const handleClickSity = (s: IDataCity) => {
    async function fetchDataWeaher() {
      try {
        debugger;
        const response = await fetch(
          `${urlWeather}/weather?lat=${s.latitude}&lon=${s.longitude}&appid=3f209075abe13cf37c34be6fb2ceae05`,
          options,
        );
        const result = await response.json();
        console.log(result);
        setValue('');
      } catch (error) {
        console.error(error);
      }
    }
    fetchDataWeaher();
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
        {dataCity.length > 2 && value.trim() !== '' ? (
          <SearchList
            data={dataCity}
            loadingDataCity={loadingDataCity}
            handleClickSity={handleClickSity}
          />
        ) : (
          ' '
        )}
      </div>
    </section>
  );
};
