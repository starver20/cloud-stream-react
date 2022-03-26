import React, { useEffect, useState } from 'react';
import classes from './VideoListing.module.css';
import { VideoCard } from '../../components/card/video-card/VideoCard';
import axios from 'axios';

const VideoListing = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVids = async () => {
      let response = await axios.get('/api/videos');
      console.log(response.data.videos);
      setVideos(response.data.videos);
    };
    getVids();
  }, []);

  return (
    <div className={classes['video-display']}>
      {videos.map((video) => (
        <VideoCard video={video} />
      ))}
    </div>
  );
};

export { VideoListing };
