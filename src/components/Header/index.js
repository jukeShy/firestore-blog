import React from 'react';
import { useDispatch } from 'react-redux';
import { userLogout } from '~redux/actions/authActions';
import { Link } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header>
      <nav className='amber'>
        <div className='row'>
          <div className='col s12'>
            <div className='nav-wrapper'>
              <Link to='/' className='brand-logo'>
                Firestore React
              </Link>
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
                  <Link to='/profile/:id' title='Profile'>
                    <i className='material-icons'>person_outline</i>
                  </Link>
                </li>
                <li>
                  <a
                    href='!#'
                    onClick={() => dispatch(userLogout())}
                    title='Log out'
                  >
                    <i className='material-icons'>exit_to_app</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
