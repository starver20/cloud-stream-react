import React from 'react';
import { VideoFooter } from '../video-footer/VideoFooter';
import classes from './VideoCard.module.css';

const VideoCard = ({
  video: {
    videoThumbnail,
    title,
    uploadDate,
    views,
    channelName,
    channelImage,
  },
}) => {
  console.log(videoThumbnail);
  return (
    <div className={classes['video-card']}>
      <div className={classes['image-container']}>
        <img className={classes['image']} src={videoThumbnail} alt="" />
      </div>
      <div className={classes['video-footer']}>
        <VideoFooter
          title={title}
          uploadDate={uploadDate}
          views={views}
          channelName={channelName}
          channelImage={channelImage}
        />
      </div>
    </div>
  );
};

export { VideoCard };
