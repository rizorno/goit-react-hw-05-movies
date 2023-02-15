import { Suspense } from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import css from './shared-layout.module.scss';

const SharedLayout = () => {
  return (
    <div>
      <header className={css.header}>
        <div className={css.container}>
          <nav className={css.nav}>
            <Link to="/" className={css.logo}>
              <span className={css['logo-text']}>Filmoteka</span>
            </Link>

            <ul className={css['nav__list']}>
              <li className={css['nav__item']}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? css['nav__link--current'] : css['nav__link']
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className={css['nav__item']}>
                <NavLink
                  to="/movies"
                  className={({ isActive }) =>
                    isActive ? css['nav__link--current'] : css['nav__link']
                  }
                >
                  Movies
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <Suspense follback={<div className={css['box-loading']}>Loading...</div>}>
        <Outlet />

        <footer className={css.footer}>
          <div className={css['footer-container']}>
            <p className={css['footer__text']}>
              &#169; 2023 | All Rights Reserved |
              <span className={css['footer__text--span']}>
                Created by Mykhailo PASHKO
              </span>
            </p>
          </div>
        </footer>
      </Suspense>
    </div>
  );
};

export default SharedLayout;
