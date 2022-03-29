import React, { useEffect, useState } from 'react';
import classes from './VideoListing.module.css';
import { VideoCard } from '../../components/card/video-card/VideoCard';
import { useVideos } from '../../context/videos/videos-context';

const VideoListing = () => {
  const { videos } = useVideos();

  return (
    <div className={classes['video-display']}>
      {videos.map((video) => (
        <VideoCard video={video} />
      ))}
    </div>
  );
};

export { VideoListing };
