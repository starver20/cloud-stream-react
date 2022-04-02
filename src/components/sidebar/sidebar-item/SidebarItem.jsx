import React from 'react';
import classes from './SidebarItem.module.css';
import { Link } from 'react-router-dom';

const SidebarItem = ({ Item, active, type, clickHandler, name }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  let authRoutes = [
    '/playlist/likedVideos',
    '/playlist/history',
    '/playlist',
    '/playlist/watchlaterVideos',
  ];

  return (
    <>
      <Link
        to={authRoutes.includes(type) ? (user ? type : '/login') : type}
        onClick={() => {
          clickHandler(type);
        }}
        className={`${classes['sidebar-item-container']} ${
          active && classes.active
        }`}
      >
        <div className={classes['sidebar-item-icon']}>
          <Item active={active} />
        </div>
        <span className={classes['sidebar-item-title']}>{name}</span>
      </Link>
    </>
  );
};

export { SidebarItem };
