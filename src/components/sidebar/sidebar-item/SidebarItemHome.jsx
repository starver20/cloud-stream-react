import React from 'react';
import classes from './SidebarItem.module.css';

const SidebarHome = ({ active = '' }) => {
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
            fill={active === 'home' ? 'white' : 'none'}
            stroke="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-width="1"
              d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
            ></path>
          </svg>
        </div>
        <span className={classes['sidebar-item-title']}>Home</span>
      </div>
    </>
  );
};

export { SidebarHome };
