import { useState, useEffect } from 'react';
import css from './go-up.module.scss';

const GoUp = () => {
  const [btnUp, setBtnUp] = useState(null);
  const scrollY = window.scrollY || document.documentElement.scrollTop;

  useEffect(() => {
    const trackScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setBtnUp(scrollY);
    };

    window.addEventListener('scroll', trackScroll);
  }, [btnUp]);

  const backToUp = () => {
    if (window.pageYOffset > 0) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      // setTimeout(btnUp, 0);
    }
  };

  return scrollY > 400 ? (
    <button
      className={css['btn-go-up']}
      title="Go to up"
      onClick={backToUp}
    ></button>
  ) : (
    <></>
  );
};

export default GoUp;
