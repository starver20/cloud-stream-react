import React from 'react';
import classes from './SidebarItem.module.css';
import { Link } from 'react-router-dom';

const SidebarItem = ({ Item, active, type, clickHandler }) => {
  return (
    <>
      <Link
        to={type === 'Home' ? '/' : type}
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
        <span className={classes['sidebar-item-title']}>{type}</span>
      </Link>
    </>
  );
};

export { SidebarItem };
