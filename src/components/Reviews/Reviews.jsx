import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getReviews } from '../../services/moviesAPI';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import css from './reviews.module.scss';

const Reviews = () => {
  const { moviedId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [currentPage] = useState(1);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        Loading.pulse({
          svgColor: 'orange',
        });
        const response = await getReviews(moviedId, {
          page: currentPage,
        });

        if (response['total_results'] > 0) {
          setReviews(prev => [...response.results]);
        }
        if (response['total_results'] === 0) {
          Notify.failure(
            'Sorry, there are no reviews matching your search query. Please try again later.'
          );
        }
        Loading.remove();
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moviedId]);

  const elements = reviews.map(element => {
    const { id, author, created_at, content } = element;
    return (
      <li key={id} className={css['box-reviews']}>
        <p className={css['reviews-name']}>
          {created_at.slice(0, 10)} | "{author}"
        </p>
        <p className={css['reviews-text']}>{content}</p>
      </li>
    );
  });

  return <ul>{elements}</ul>;
};

export default Reviews;
