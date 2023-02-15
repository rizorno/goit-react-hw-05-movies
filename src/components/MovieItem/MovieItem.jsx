import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { load } from '../../constants/LS';
import css from './movie-item.module.scss';

const MovieItem = ({ moviesList }) => {
  const location = useLocation();

  const elements = moviesList.map(element => {
    const {
      poster_path,
      title,
      vote_average,
      genre_ids,
      release_date,
      genres,
      id,
    } = element;

    let movieGenres;
    if (genres) {
      movieGenres = load('genres')
        .map(({ name }) => name)
        .join(', ');
    }

    if (genre_ids) {
      movieGenres = load('genres')
        .filter(({ id }) => genre_ids.includes(id))
        .map(({ name }) => name)
        .join(', ');
    }

    return (
      <li key={id} className={css['content__item']} data-id={id}>
        <Link to={`/movies/${id}`} state={{ from: location }}>
          <img
            className={css['content__img']}
            data-id={id}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/original/${poster_path}`
                : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/No_photo_available.svg/800px-No_photo_available.svg.png'
            }
            alt={title}
          />
          <div className={css['box-description']}>
            <h2 className={css['content__title']}>{title}</h2>
            <p className={css['content__text']}>
              {movieGenres} | {release_date.slice(0, 4)}
            </p>
            <p className={css['content__popularity']}>
              {vote_average.toFixed(1)}
            </p>
          </div>
        </Link>
      </li>
    );
  });

  return <>{elements}</>;
};

MovieItem.propTypes = {
  moviesList: PropTypes.array.isRequired,
};

export default MovieItem;
