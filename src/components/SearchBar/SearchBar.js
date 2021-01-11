import { useState } from 'react';
import s from './SearchBar.module.css';

export default function Searchbar({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = ({ target }) => {
    setSearchValue(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchValue.trim() !== '') {
      onSearch(searchValue);
    }
  };

  return (
    <form className={s.searchForm} onSubmit={handleSubmit}>
      <input
        className={s.searchFormInput}
        type="text"
        name="searchValue"
        value={searchValue}
        onChange={handleChange}
        autoComplete="off"
        placeholder="Search movies..."
      />
      <button type="submit" className={s.searchFormButton}>
        Search
      </button>
    </form>
  );
}
