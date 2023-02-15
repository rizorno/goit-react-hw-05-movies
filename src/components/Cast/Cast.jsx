import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCast } from '../../services/moviesAPI';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import css from './cast.module.scss';

const Cast = () => {
  const { moviedId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        Loading.pulse({
          svgColor: 'orange',
        });
        const response = await getCast(moviedId);

        if (response.cast.length > 0) {
          setCast(prev => [...response.cast]);
        }
        if (response.cast.length === 0) {
          Notify.failure(
            'Sorry, there are no cast matching your search query. Please try again later.'
          );
        }
        Loading.remove();
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moviedId]);

  const elements = cast.map(element => {
    const { id, profile_path, name, character } = element;
    return (
      <li key={id} className={css['box-cast']}>
        <img
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w500${profile_path}`
              : 'https://t4.ftcdn.net/jpg/00/65/10/47/360_F_65104718_x17a76wzWKIm3BlhA6uyYVkDs9982c6q.jpg'
          }
          alt={name}
          className={css['cast-img']}
        />
        <h2 className={css['cast-title']}>{name}</h2>
        <p className={css['cast-text']}>
          <span className={css['cast-span']}>Character: </span>
          {character}
        </p>
      </li>
    );
  });

  return <ul className={css['cast-box-wrapper']}>{elements}</ul>;
};

export default Cast;
