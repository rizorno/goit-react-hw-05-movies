import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import css from './search-form.module.scss';

const SearchForm = () => {
  const [params, setParams] = useSearchParams();
  const search = params.get('movieName');

  const [movieName, setMovieName] = useState(search ?? '');

  const handleChange = e => {
    setMovieName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (movieName.trim() === '') {
      return;
    }
    setParams({ movieName });
    setMovieName('');
  };

  return (
    <div className={css['box-form']}>
      <form className={css['form-search']} onSubmit={handleSubmit}>
        <label className={css['form-search__label']}>
          <input
            className={css['form-search__input']}
            type="text"
            name="search"
            autoComplete="off"
            placeholder="Movie search"
            onChange={handleChange}
            value={movieName}
          />
          <button type="submit" className={css['btn-submit']}></button>
        </label>
      </form>
    </div>
  );
};

export default SearchForm;
