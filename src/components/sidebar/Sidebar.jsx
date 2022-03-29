import React, { useState } from 'react';
import classes from './Sidebar.module.css';
import { SidebarItem } from './sidebar-item/SidebarItem';
import ExploreIcon from '../../assets/svg-icons/ExploreIcon';
import HistoryIcon from '../../assets/svg-icons/HistoryIcon';
import HomeIcon from '../../assets/svg-icons/HomeIcon';
import LikedVideoIcon from '../../assets/svg-icons/LikedVideoIcon';
import PlaylistIcon from '../../assets/svg-icons/PlaylistIcon';
import WatchlaterIcon from '../../assets/svg-icons/WatchlaterIcon';

const Sidebar = () => {
  const [active, setActive] = useState('Home');

  return (
    <>
      <div className={classes.sidebar}>
        <div>
          <SidebarItem
            Item={HomeIcon}
            type="Home"
            active={active === 'Home'}
            clickHandler={setActive}
          />
          <SidebarItem
            Item={ExploreIcon}
            type="Explore"
            active={active === 'Explore'}
            clickHandler={setActive}
          />
          <SidebarItem
            Item={LikedVideoIcon}
            type="Likes"
            active={active === 'Likes'}
            clickHandler={setActive}
          />
          <SidebarItem
            Item={HistoryIcon}
            type="History"
            active={active === 'History'}
            clickHandler={setActive}
          />

          <SidebarItem
            Item={PlaylistIcon}
            type="Playlist"
            active={active === 'Playlist'}
            clickHandler={setActive}
          />
          <SidebarItem
            Item={WatchlaterIcon}
            type="Later"
            active={active === 'Later'}
            clickHandler={setActive}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
