import React from 'react';
import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth/auth-context';
import { useNavigate } from 'react-router-dom';
import { useVideos } from '../../context/videos/videos-context';

const Navbar = () => {
  const { logout } = useAuth();
  const { videosDispatch } = useVideos();

  const user = JSON.parse(localStorage.getItem('user'));

  const navigate = useNavigate();

  const authClickHandler = (e) => {
    // If user is logged in, then log him out and clear the wishlist and cart
    if (user) {
      // Clear likes, history and playlist here

      videosDispatch({
        type: 'UPDATE_LIKED_VIDEOS',
        payload: { likedVideos: [] },
      });
      videosDispatch({
        type: 'UPDATE_WATCH_LATER_VIDEOS',
        payload: { watchlaterVideos: [user.watchlater] },
      });
      logout();
    }
    navigate('/login');
  };
  return (
    <>
      <header className={`header ${classes['header-dark']}`}>
        <nav className="navbar">
          <div className={classes.logo}>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <a href="#" className="nav-logo">
              CloudStream
            </a>
          </div>
          <div className="nav-search">
            <input type="text" name="search" id="search" placeholder="Search" />
          </div>
          <div className="nav-action-container">
            <div className="nav-action">
              {user ? (
                <div className={`nav-icon ${classes['options-container']}`}>
                  <Link to="/">
                    <svg
                      class="w-6 h-6"
                      fill="white"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p>{user.firstName}</p>
                  </Link>
                  <div className={classes['profile-options']}>
                    <button
                      onClick={authClickHandler}
                      className="nav--action__login"
                    >
                      Logout
                    </button>

                    <Link to="/">
                      <button className="nav--action__login">Profile</button>
                    </Link>
                  </div>
                </div>
              ) : (
                <Link to="/login">
                  <button className="nav--action__login">LOGIN</button>
                </Link>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
