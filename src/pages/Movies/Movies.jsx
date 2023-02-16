import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { getKeyword, getGenres } from '../../services/moviesAPI';
import { save, load } from '../../constants/LS';
import MovieItem from '../../components/MovieItem/MovieItem';
import SearchForm from '../../components/SearchForm/SearchForm';
import GoUp from '../../components/GoUp/GoUp';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import css from './movies.module.scss';

const Movies = () => {
  // eslint-disable-next-line no-unused-vars
  const location = useLocation();

  const [params] = useSearchParams();
  const search = params.get('movieName');

  const [moviesList, setMoviesList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setMoviesList([]);
    setCurrentPage(1); // for pagination

    const fetchMoviesKeyword = async () => {
      try {
        Loading.pulse({
          svgColor: 'orange',
        });
        const response = await getKeyword({
          page: currentPage,
          query: search,
          include_adult: false,
        });

        if (!load('genres')) {
          const responseGenres = await getGenres();
          setMoviesList(prev => [...response.results]);
          save('genres', responseGenres.genres);
        }

        if (response['total_results'] > 0) {
          setMoviesList(prev => [...response.results]);

          if (currentPage === 1) {
            Notify.success(
              `Hooray! We found ${response['total_results']} movies.`
            );
          }
        }
        if (response['total_results'] === 0) {
          Notify.failure(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
        }
        Loading.remove();
        return response;
      } catch (error) {
        console.log(error);
      }
    };
    if (search) {
      fetchMoviesKeyword();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <main>
      <SearchForm />
      <div className={css.content}>
        <div className={css.container}>
          <ul className={css['content__list']}>
            <MovieItem moviesList={moviesList} />
          </ul>
        </div>
      </div>
      {moviesList.length > 0 ? <GoUp /> : <></>}
    </main>
  );
};

export default Movies;
