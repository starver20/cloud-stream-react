import React from 'react';
import classes from './SidebarItem.module.css';

const SidebarExplore = ({ active = 'explore' }) => {
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
            fill={active === 'explore' ? 'white' : 'none'}
            stroke="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-width="1"
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <span className={classes['sidebar-item-title']}>Explore</span>
      </div>
    </>
  );
};

export { SidebarExplore };
