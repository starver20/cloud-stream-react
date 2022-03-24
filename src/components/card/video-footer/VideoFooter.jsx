import React from 'react';
import classes from './VideoFooter.module.css';

const VideoFooter = ({
  title = 'Video Title',
  creator = 'Amar',
  views = '2',
  date = '3',
}) => {
  return (
    <div className={classes.footer}>
      <img
        class="avatar avatar-sm"
        src="https://bit.ly/dan-abramov"
        alt="medium logo"
      />
      <div className={classes['video-info']}>
        <p className={classes.title}>{title}</p>
        <p className={classes.creator}>{creator}</p>
        <p className={classes.info}>
          <span className={classes.views}>{views}k views - </span>
          <span className={classes.date}>{date}years ago</span>
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
