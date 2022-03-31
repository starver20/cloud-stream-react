import React from 'react';
import { VideoFooter } from '../video-footer/VideoFooter';
import classes from './VideoCard.module.css';
import { Link, useNavigate } from 'react-router-dom';

const VideoCard = ({ video }) => {
  const { videoThumbnail, youtubeId } = video;
  const navigate = useNavigate();
  return (
    <div className={classes['video-card']}>
      <div to={`/video/${youtubeId}`} className={classes['image-container']}>
        <img
          onClick={() => {
            navigate(`/video/${youtubeId}`);
          }}
          className={classes['image']}
          src={videoThumbnail}
          alt=""
        />
      </div>
      <div className={classes['video-footer']}>
        <VideoFooter video={video} />
      </div>
    </div>
  );
};

// Used navigate here because using Link will redirect every time watch later is clicked,
//  because its not an event, e.stopPropagation won't work on it

export { VideoCard };
