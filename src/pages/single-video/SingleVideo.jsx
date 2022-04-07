import React, { useEffect, useState } from 'react';
import { VideoPlayer } from '../../components/video-player/VideoPlayer';
import { RightSidebar } from '../../components/sidebar/right-sidebar/RightSidebar';
import classes from './SingleVideo.module.css';
import { useParams } from 'react-router-dom';
import { useVideos } from '../../context/videos/videos-context';
import axios from 'axios';

const SingleVideo = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState({});

  useEffect(() => {
    const getVideo = async () => {
      let response = await axios.get(`/api/video/${videoId}`);
      setVideo(response.data.video);
    };

    getVideo();
  }, [videoId]);

  return (
    <div className={classes['single-video']}>
      <div className={classes['video-player']}>
        <VideoPlayer video={video} />
      </div>
      <div className={classes['right-sidebar']}>
        <RightSidebar />
      </div>
    </div>
  );
};

export { SingleVideo };
