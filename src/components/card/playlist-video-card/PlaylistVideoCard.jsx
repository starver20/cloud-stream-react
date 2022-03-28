import React from 'react';
import classes from './PlaylistVideoCard.module.css';

export const PlaylistVideoCard = ({ video }) => {
  const { videoThumbnail, channelName, channelImage, title } = video;

  return (
    <div className={classes.container}>
      <div>
        <img src={videoThumbnail} alt="liked-video" />
      </div>
      <div className={classes['video-info']}>
        <p className={classes.title}>{title}</p>
        <div className={classes['channel-info']}>
          <img class="avatar avatar-xs" src={channelImage} alt="medium logo" />
          <p className={classes.channel}>{channelName}</p>
        </div>
      </div>
    </div>
  );
};
