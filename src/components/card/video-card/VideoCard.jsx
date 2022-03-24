import React from 'react';
import { VideoFooter } from '../video-footer/VideoFooter';
import classes from './VideoCard.module.css';

const VideoCard = () => {
  return (
    <div className={classes['video-card']}>
      <div className={classes['image-container']}>
        <img
          className={classes['image']}
          src="https://i.ytimg.com/vi/PDVZFteJ9Jw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBhTdD0AVVod0kiYMz7B6JRV3cdew"
          alt=""
        />
      </div>
      <div className={classes['video-footer']}>
        <VideoFooter />
      </div>
    </div>
  );
};

export { VideoCard };
