import React from 'react';
import classes from './SidebarItem.module.css';

const SidebarWatchlater = ({ active = '' }) => {
  return (
    <>
      <div
        className={`${classes['sidebar-item-container']} ${
          active && classes.active
        }`}
      >
        <div className={classes['sidebar-item-icon']}>
          <svg
            class="w-6 h-6"
            fill={active === 'watchlater' ? 'white' : 'none'}
            stroke="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <span className={classes['sidebar-item-title']}>Watch Later</span>
      </div>
    </>
  );
};

export { SidebarWatchlater };