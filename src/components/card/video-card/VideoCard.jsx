import React from 'react';
import { VideoFooter } from '../video-footer/VideoFooter';
import classes from './VideoCard.module.css';
import { Link } from 'react-router-dom';

const VideoCard = ({
  video: {
    videoThumbnail,
    title,
    uploadDate = 1648333768273,
    views,
    channelName,
    channelImage,
    youtubeId,
  },
}) => {
  return (
    <Link to={`/video/${youtubeId}`} className={classes['video-card']}>
      <div className={classes['image-container']}>
        <img className={classes['image']} src={videoThumbnail} alt="" />
      </div>
      <div className={classes['video-footer']}>
        <VideoFooter
          title={title}
          uploadDate={uploadDate - 2000000000}
          views={views}
          channelName={channelName}
          channelImage={channelImage}
        />
      </div>
    </Link>
  );
};

export { VideoCard };
