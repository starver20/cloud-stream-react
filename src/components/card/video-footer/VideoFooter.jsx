import React from 'react';
import classes from './VideoFooter.module.css';
import { formatDistance } from 'date-fns';

const VideoFooter = ({
  title = 'Video Title',
  channelName = 'Amar',
  views = 2342342,
  uploadDate = 1233123,
  channelImage,
}) => {
  return (
    <div className={classes.footer}>
      <img class="avatar avatar-sm" src={channelImage} alt="medium logo" />
      <div className={classes['video-info']}>
        <p className={classes.title}>{title}</p>
        <p className={classes.creator}>{channelName}</p>
        <p className={classes.info}>
          <span className={classes.views}>{views} views - </span>
          <span className={classes.date}>
            {formatDistance(uploadDate, Date.now())} ago
          </span>
        </p>
      </div>
      <span className={classes.menu}>
        OPT
        <div className={classes.options}>
          <ul>
            <li>Watch Later</li>
            <li>Add to Playlist</li>
          </ul>
        </div>
      </span>
    </div>
  );
};

export { VideoFooter };
