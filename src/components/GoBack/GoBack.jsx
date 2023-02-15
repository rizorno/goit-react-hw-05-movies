import { Link, useLocation } from 'react-router-dom';
import css from './go-back.module.scss';

const GoBack = () => {
  const location = useLocation();
  return (
    <Link to={location.state?.from ?? '/'} className={css['btn-go-back']} />
  );
};

export default GoBack;
