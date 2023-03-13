import { ShoppingOutlined } from '@ant-design/icons';
import * as ROUTE from '../../constants/routes';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import {
  Link, NavLink, useLocation
} from 'react-router-dom';
import UserAvatar from '../../containers/Account/components/UserAvatar';
import { CartToggle } from '../cart';
import Badge from './Badge';
import logo from '../../../public/cart.png'
import SearchBar from "./SearchBar";
import {HOME} from "../../constants/routes";

const Navigation = () => {
  const navbar = useRef(null);
  const { pathname } = useLocation();

  const store = useSelector((state) => ({
    cartLength: state.cart.length,
    user: state.auth,
    isAuthenticating: state.app.isAuthenticating,
    isLoading: state.app.loading
  }));

  const scrollHandler = () => {
    if (navbar.current && window.screen.width > 480) {
      if (window.pageYOffset >= 70) {
        navbar.current.classList.add('is-nav-scrolled');
      } else {
        navbar.current.classList.remove('is-nav-scrolled');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  const onClickLink = (e) => {
    if (store.isAuthenticating) e.preventDefault();
  };

  // disable the cart toggle to these pathnames
  const cartDisabledPathNames = [
    ROUTE.CHECKOUT_STEP_1,
    ROUTE.CHECKOUT_STEP_2,
    ROUTE.CHECKOUT_STEP_3,
    ROUTE.SIGNIN,
    ROUTE.SIGNUP,
    ROUTE.FORGOT_PASSWORD
  ];

  if (store.user && store.user.role === 'ADMIN') {
    // return null; TODO :: ADD ADMIN ROUTES
  }

  return (
    <nav className="navigation" ref={navbar}>
      <div className="logo">
        <Link onClick={onClickLink} to={HOME}><img alt="Logo" src={logo} /></Link>
      </div>
      <ul className="navigation-menu-main">
        <li><NavLink activeClassName="navigation-menu-active" exact to={ROUTE.HOME}>Home</NavLink></li>
      </ul>
      <SearchBar />
      <ul className="navigation-menu">
        <li className="navigation-menu-item">
          <CartToggle>
            {({ onClickToggle }) => (
              <button
                className="button-link navigation-menu-link cart-toggle"
                disabled={cartDisabledPathNames.includes(pathname)}
                onClick={onClickToggle}
                type="button"
              >
                <Badge count={store.cartLength}>
                  <ShoppingOutlined style={{ fontSize: '2.4rem' }} />
                </Badge>
              </button>
            )}
          </CartToggle>
        </li>
        {store.user ? (
          <li className="navigation-menu-item">
            <UserAvatar />
          </li>
        ) : (
          <li className="navigation-action">
            {pathname !== ROUTE.SIGNUP && (
              <Link
                className="button button-small"
                onClick={onClickLink}
                to={ROUTE.SIGNUP}
              >
                Sign Up
              </Link>
            )}
            {pathname !== ROUTE.SIGNIN && (
              <Link
                className="button button-small button-muted margin-left-s"
                onClick={onClickLink}
                to={ROUTE.SIGNIN}
              >
                Sign In
              </Link>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
