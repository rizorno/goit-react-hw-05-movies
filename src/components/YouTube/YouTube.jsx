import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getYouTube } from '../../services/moviesAPI';
import ModalTeaser from '../ModalTeaser/ModalTeaser';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import css from './you-tube.module.scss';

const YouTube = ({ backdrop }) => {
  const { moviedId } = useParams();

  const [youtube, setYouTube] = useState('');
  const [isOpenTeaser, setIsOpenTeaser] = useState(false);

  useEffect(() => {
    const fetchYouTube = async () => {
      try {
        Loading.pulse({
          svgColor: 'orange',
        });
        const response = await getYouTube(moviedId);

        if (response.results[0].key !== '') {
          setYouTube(response.results[0].key);
        }

        if (response.results.length === 0 || response.results[0].key === '') {
          Notify.failure(
            'Sorry, there are no teaser matching your search query. Please try again later.'
          );
        }
        Loading.remove();
      } catch (error) {
        console.log(error);
      }
    };
    if (isOpenTeaser) {
      fetchYouTube();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moviedId, isOpenTeaser]);

  const handleOpenTeaser = e => {
    setIsOpenTeaser(true);
    //  document.querySelector('body').classList.add('body-scroll');
  };

  const handleCloseTeaser = () => {
    setIsOpenTeaser(false);
    //  document.querySelector('body').classList.remove('body-scroll');
  };

  return (
    <>
      <button className={css['btn-youtube']} onClick={handleOpenTeaser}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>youtube</title>
          <path
            fill="#f00"
            d="M31.681 9.6c0 0-0.313-2.206-1.275-3.175-1.219-1.275-2.581-1.281-3.206-1.356-4.475-0.325-11.194-0.325-11.194-0.325h-0.012c0 0-6.719 0-11.194 0.325-0.625 0.075-1.987 0.081-3.206 1.356-0.963 0.969-1.269 3.175-1.269 3.175s-0.319 2.588-0.319 5.181v2.425c0 2.587 0.319 5.181 0.319 5.181s0.313 2.206 1.269 3.175c1.219 1.275 2.819 1.231 3.531 1.369 2.563 0.244 10.881 0.319 10.881 0.319s6.725-0.012 11.2-0.331c0.625-0.075 1.988-0.081 3.206-1.356 0.962-0.969 1.275-3.175 1.275-3.175s0.319-2.587 0.319-5.181v-2.425c-0.006-2.588-0.325-5.181-0.325-5.181zM12.694 20.15v-8.994l8.644 4.513-8.644 4.481z"
          ></path>
        </svg>
        YouTube
      </button>
      {isOpenTeaser && (
        <ModalTeaser
          youtube={youtube}
          onCloseTeaser={handleCloseTeaser}
          backdrop={backdrop}
        />
      )}
    </>
  );
};

ModalTeaser.propTypes = {
  backdrop: PropTypes.string.isRequired,
};

export default YouTube;
