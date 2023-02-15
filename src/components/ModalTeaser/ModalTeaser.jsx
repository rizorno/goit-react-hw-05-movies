import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import Iframe from 'react-iframe';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import css from './modal-teaser.module.scss';

const ModalTeaser = ({ youtube, onCloseTeaser }) => {
  useEffect(() => {
    const closeBtnEscBackdrop = ({ target, currentTarget, code }) => {
      if (code === 'Escape' || target === currentTarget) {
        onCloseTeaser();
      }
    };

    window.addEventListener('keydown', closeBtnEscBackdrop);

    return () => {
      window.removeEventListener('keydown', closeBtnEscBackdrop);
    };
  }, [onCloseTeaser]);

  const closeBtnEscBackdrop = ({ target, currentTarget, code }) => {
    if (code === 'Escape' || target === currentTarget) {
      onCloseTeaser();
    }
  };

  Loading.pulse({
    svgColor: 'orange',
  });

  const template = (
    <div className={css.overlay} onClick={closeBtnEscBackdrop}>
      <div className={css['video-modal']}>
        <button
          type="button"
          className={css['video-modal__btn-close']}
          aria-label="Close"
          onClick={closeBtnEscBackdrop}
        />
        <div className={css['video-modal__iframe']}>
          <Iframe
            url={`https://www.youtube.com/embed/${youtube}?showinfo=0`}
            src={`https://www.youtube.com/embed/${youtube}?showinfo=0`}
            position="absolute"
            title="Teaser on YouTube"
            frameborder="0"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  );
  Loading.remove();
  return youtube ? (
    createPortal(template, document.getElementById('modal'))
  ) : (
    <></>
  );
};

ModalTeaser.propTypes = {
  youtube: PropTypes.string.isRequired,
  onCloseTeaser: PropTypes.func.isRequired,
};

export default ModalTeaser;
