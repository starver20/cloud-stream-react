import React from 'react';
import classes from './Sidebar.module.css';
import { SidebarHome } from './sidebar-item/SidebarItemHome';
import { SidebarExplore } from './sidebar-item/SidebarItemExplore';
import { SidebarPlaylist } from './sidebar-item/SidebarItemPlaylist';
import { SidebarHistory } from './sidebar-item/SidebarItemHistory';
import { SidebarWatchlater } from './sidebar-item/SidebarItemWatchlater';
import { SidebarLikedVideos } from './sidebar-item/SidebarItemLikedVideos';

const Sidebar = () => {
  return (
    <>
      <div className={classes.sidebar}>
        <div>
          <SidebarHome />
          <SidebarExplore />
          <SidebarPlaylist />
          <SidebarHistory />
          <SidebarWatchlater />
          <SidebarLikedVideos />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
