import React from 'react';
import classes from './SidebarItem.module.css';
import { Link, NavLink } from 'react-router-dom';

const SidebarItem = ({ Item, type, name }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  let authRoutes = [
    '/likedVideos',
    '/history',
    '/playlist',
    '/watchlaterVideos',
  ];

  return (
    <>
      <NavLink
        to={authRoutes.includes(type) ? (user ? type : '/login') : type}
        className={({ isActive }) => {
          return `${classes['sidebar-item-container']} ${
            authRoutes.includes(type)
              ? user
                ? isActive
                  ? classes.active
                  : ''
                : ''
              : isActive
              ? classes.active
              : ''
          }`;
        }}
      >
        <div className={classes['sidebar-item-icon']}>
          <Item active={false} />
        </div>
        <span className={classes['sidebar-item-title']}>{name}</span>
      </NavLink>
    </>
  );
};

export { SidebarItem };
