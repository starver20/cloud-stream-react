import React from 'react';
import classes from './Navbar.module.css';

const Navbar = ({ isLoggedIn = false }) => {
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
              {isLoggedIn ? (
                <div className="nav-icon">
                  <a href="#">
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
                  </a>
                </div>
              ) : (
                <button className="nav--action__login">LOGIN</button>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
