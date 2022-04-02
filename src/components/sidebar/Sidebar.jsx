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
  // const [active, setActive] = useState('Home');

  return (
    <>
      <div className={classes.sidebar}>
        <div>
          <SidebarItem Item={HomeIcon} type="/" name="Home" />
          <SidebarItem Item={ExploreIcon} type="/explore" name="Explore" />
          <SidebarItem Item={LikedVideoIcon} type="/likedVideos" name="Likes" />
          <SidebarItem Item={HistoryIcon} type="/history" name="History" />
          <SidebarItem
            Item={WatchlaterIcon}
            type="/watchlaterVideos"
            name="Watch Later"
          />

          <SidebarItem Item={PlaylistIcon} type="/playlist" name="Playlist" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
