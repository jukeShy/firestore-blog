import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { userLogout } from '~redux/actions/authActions';
import { Link } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';

import './style.css';

const Header = () => {
  const uid = useSelector((state) => state.auth.user.uid);
  const dispatch = useDispatch();

  useEffect(() => {
    const elem = document.querySelector('#mobile');
    M.Sidenav.init(elem, {});

    return () => {
      const instance = M.Sidenav.getInstance(elem);
      instance.destroy();
    };
  }, []);

  return (
    <header>
      <nav className='amber'>
        <div className='row'>
          <div className='col s12'>
            <div className='nav-wrapper'>
              <Link to='/' className='brand-logo'>
                Firestore React
              </Link>
              <button
                data-target='mobile'
                className='btn btn-flat sidenav-trigger'
              >
                <i className='material-icons'>menu</i>
              </button>
              <ul id='nav-mobile' className='right hide-on-med-and-down'>
                <li>
                  <Link to='/create' title='Create new Story'>
                    <i className='material-icons left'>add</i>
                    <span>Create story</span>
                  </Link>
                </li>
                <li>
                  <Link to='/favorites' title='Favorites'>
                    <i className='material-icons'>favorite_border</i>
                  </Link>
                </li>
                <li>
                  <Link to={`/profile/${uid}`} title='Profile'>
                    <i className='material-icons'>person_outline</i>
                  </Link>
                </li>
                <li>
                  <button
                    className='btn-flat logout'
                    onClick={() => dispatch(userLogout())}
                    title='Log out'
                  >
                    <i className='material-icons'>exit_to_app</i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <ul className='sidenav' id='mobile'>
        <li>
          <Link to='/create' title='Create new Story'>
            <i className='material-icons left'>add</i>
            <span>Create story</span>
          </Link>
        </li>
        <li>
          <Link to='/favorites' title='Favorites'>
            <i className='material-icons left'>favorite_border</i>
            <span>Favorites</span>
          </Link>
        </li>
        <li>
          <Link to={`/profile/${uid}`} title='Profile'>
            <i className='material-icons'>person_outline</i>
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <button
            className='btn-flat logout logout-mobile'
            onClick={() => dispatch(userLogout())}
            title='Log out'
          >
            <i className='material-icons'>exit_to_app</i>
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
