import React from 'react';
import classes from './SidebarItem.module.css';
import { NavLink } from 'react-router-dom';

const SidebarItem = ({ Item, type, name }) => {
  return (
    <>
      <NavLink
        to={type}
        className={({ isActive }) => {
          return `${classes['sidebar-item-container']} ${
            isActive ? classes.active : ''
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
