import React from 'react';
import classes from './PlaylistInfoCard.module.css';

export const PlaylistInfoCard = ({ video, total, playlistName }) => {
  return (
    <div>
      <img className={classes.thumbnail} src={video.videoThumbnail} alt="" />
      <div>
        <p className={classes['playlist-name']}>{playlistName}</p>
        <p className={classes.total}>{total} videos</p>
      </div>
    </div>
  );
};
