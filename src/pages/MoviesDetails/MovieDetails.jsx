import { useState, useEffect, Suspense } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';

import { load } from '../../constants/LS';
import { getById } from '../../services/moviesAPI';
import GoBack from '../../components/GoBack/GoBack';
import YouTube from '../../components/YouTube/YouTube';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import css from './movie-details.module.scss';

const MovieDetails = () => {
  const location = useLocation();
  const { moviedId } = useParams();

  const [movieInfo, setMovieInfo] = useState({});
  const [backdrop, setBackdrop] = useState('');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        Loading.pulse({
          svgColor: 'orange',
        });
        const response = await getById(moviedId);
        setMovieInfo(response);
        setBackdrop(response['backdrop_path']);
        Loading.remove();
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [moviedId]);

  const {
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres,
    genre_ids,
    production_countries,
    overview,
    release_date,
  } = movieInfo;

  //* Votes: round and separation of thousandths

  let vote;
  if (vote_average) {
    vote = Math.round(vote_count);
    let xVC = String(vote);
    let sVC = xVC.split('');
    let indexVC = xVC.length - 1;
    let wVC = Math.floor(indexVC / 3);
    for (let i = 1; i <= wVC; i += 1) {
      indexVC = indexVC - 1 - i;
      sVC.splice(indexVC, 0, ' ');
      let rVC = sVC.join('');
      vote = rVC;
    }
  }

  //* Popularity: round and separation of thousandths

  let popular;
  if (popularity) {
    popular = Math.round(popularity);
    //  let xP = String(popular);
    //  let sP = xP.split('');
    //  let indexP = xP.length - 1;
    //  let wP = Math.floor(indexP / 3);
    //  for (let i = 1; i <= wP; i += 1) {
    //    indexP = indexP - 1 - i;
    //    sP.splice(indexP, 0, ' ');
    //    let rP = sP.join('');
    //    popular = rP;
    //  }
  }

  //* Genres

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

  //* Origin country

  let originCountry;

  if (production_countries) {
    originCountry = production_countries.map(({ name }) => name).join(', ');
  }

  return (
    <main className={css.modal}>
      <GoBack />
      <div className={css['modal-info']}>
        <div className={css['box-wrapper-flex']}>
          <div className={css['box-wrapper-img']}>
            <img
              className={css['content__img--modal']}
              src={`https://image.tmdb.org/t/p/original${poster_path}`}
              alt={title}
            />
          </div>
          <div className={css['box-wrapper-text']}>
            <h1 className={css['modal__title']}>{title}</h1>

            <div className={css['box-wrapper']}>
              <p className={(css['title-name'], css['a'])}>Vote / Votes</p>
              <p className={(css['title-name'], css['b'])}>Popularity</p>
              <p className={(css['title-name'], css['c'])}>Original Title</p>
              <p className={(css['title-name'], css['d'])}>Genre</p>
              <p className={(css['title-name'], css['e'])}>Country</p>
              <p className={(css['title-name'], css['f'])}>Year</p>
              <p className={(css['title-name'], css['g'])}>Teaser</p>

              <p
                className={
                  (css['title-type'], css['title-type--flex'], css['a1'])
                }
              >
                <span className={css['span-color']}>
                  {Number(vote_average).toFixed(1)}
                </span>
                / <span className={css['span-nocolor']}>{vote}</span>
              </p>
              <p
                className={
                  (css['title-type'], css['title-type--height'], css['b1'])
                }
              >
                {popular}
              </p>

              <p
                className={
                  (css['title-type'], css['title-type--upper'], css['c1'])
                }
              >
                {original_title}
              </p>
              <p className={(css['title-type'], css['d1'])}>{movieGenres}</p>
              <p className={(css['title-type'], css['e1'])}>{originCountry}</p>
              <p
                className={
                  (css['title-type'], css['title-type--height'], css['f1'])
                }
              >
                {String(release_date).slice(0, 4)}
              </p>
              <p className={(css['title-type'], css['g1'])}>
                <YouTube backdrop={backdrop} />
              </p>
            </div>

            <p className={css['modal__about']}>About</p>
            <p className={css['modal__text']}>{overview}</p>

            <div>
              <ul className={css['box-button']}>
                <li className={css['cast-button']}>
                  <NavLink
                    to="cast"
                    state={{ from: location.state.from }}
                    className={({ isActive }) =>
                      isActive
                        ? css['cast-button--current']
                        : css['cast-button']
                    }
                  >
                    Cast
                  </NavLink>
                </li>
                <li className={css['reviews-button']}>
                  <NavLink
                    to="reviews"
                    state={{ from: location.state.from }}
                    className={({ isActive }) =>
                      isActive
                        ? css['reviews-button--current']
                        : css['reviews-button']
                    }
                  >
                    Reviews
                  </NavLink>
                </li>
              </ul>
              <Suspense
                follback={<div className={css['box-loading']}>Loading...</div>}
              >
                <Outlet />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MovieDetails;
