import React, { FC, useState } from 'react';
import style from './Search.module.css';
interface iSearch {
  loadDataCity: (value: string) => void;
}
export const Search: FC<iSearch> = ({ loadDataCity }) => {
  const [value, setValue] = useState('');
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
    loadDataCity(e.target.value);
  };
  return (
    <input
      placeholder="Введите название города"
      value={value}
      onChange={(e) => handleChange(e)}
    />
  );
};
