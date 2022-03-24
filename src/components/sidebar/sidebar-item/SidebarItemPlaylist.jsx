import React from 'react';
import classes from './SidebarItem.module.css';

const SidebarPlaylist = ({ active = '' }) => {
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
            fill={active === 'playlist' ? 'white' : 'none'}
            stroke="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
          </svg>
        </div>
        <span className={classes['sidebar-item-title']}>Playlist</span>
      </div>
    </>
  );
};

export { SidebarPlaylist };
