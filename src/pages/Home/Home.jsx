import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { FETCH_STATUS } from '../../constants/fetchStatus';
import { save } from '../../constants/LS';
import { getTrending, getTop, getGenres } from '../../services/moviesAPI';
import MovieItem from '../../components/MovieItem/MovieItem';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import css from './home.module.scss';

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const location = useLocation();

  const [moviesList, setMoviesList] = useState([]);
  const [currentPage] = useState(1);
  const [status, setStatus] = useState(FETCH_STATUS.home);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        Loading.pulse({
          svgColor: 'orange',
        });

        const response = await getTrending({
          page: currentPage,
          adult: false,
        });
        const responseGenres = await getGenres();
        setMoviesList(prev => [...response.results]);
        save('genres', responseGenres.genres);

        Loading.remove();
        return response;
      } catch (error) {
        console.log(error);
      }
    };

    if (status === FETCH_STATUS.home || status === FETCH_STATUS.trending) {
      fetchMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, currentPage]);

  useEffect(() => {
    setMoviesList([]);
    const fetchMoviesTop = async () => {
      try {
        Loading.pulse({
          svgColor: 'orange',
        });
        const response = await getTop({
          page: currentPage,
        });

        setMoviesList(prev => [...response.results]);

        Loading.remove();
        return response;
      } catch (error) {
        console.log(error);
      }
    };
    if (status === FETCH_STATUS.top) {
      fetchMoviesTop();
    }
  }, [status, currentPage]);

  const handleChangeTrending = () => {
    setStatus(FETCH_STATUS.trending);
  };

  const handleChangeTop = () => {
    setStatus(FETCH_STATUS.top);
  };

  return (
    <main>
      <div className={css['box-btn-home']}>
        {status === FETCH_STATUS.trending || status === FETCH_STATUS.home ? (
          <button
            name="trending"
            onClick={handleChangeTrending}
            className={css['header-btn-home--current']}
          >
            Trending today
          </button>
        ) : (
          <button
            name="trending"
            onClick={handleChangeTrending}
            className={css['header-btn-home']}
          >
            Trending
          </button>
        )}

        {status === FETCH_STATUS.top ? (
          <button
            name="top"
            onClick={handleChangeTop}
            className={css['header-btn-home--current']}
          >
            Top rated
          </button>
        ) : (
          <button
            name="top"
            onClick={handleChangeTop}
            className={css['header-btn-home']}
          >
            Top rated
          </button>
        )}
      </div>

      <div className={css.content}>
        <div className={css.container}>
          <ul className={css['content__list']}>
            <MovieItem moviesList={moviesList} />
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Home;
