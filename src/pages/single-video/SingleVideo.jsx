import React, { useEffect } from 'react';
import { VideoPlayer } from '../../components/video-player/VideoPlayer';
import { RightSidebar } from '../../components/sidebar/right-sidebar/RightSidebar';
import classes from './SingleVideo.module.css';
import { useParams } from 'react-router-dom';
import { useVideos } from '../../context/videos/videos-context';
import { useAsync } from '../../hooks/useAsync';
import { addToHistory } from '../../utils/video-utils';
import { useManipulators } from '../../utils/useManipulators';

const SingleVideo = () => {
  const { videoId } = useParams();
  const { videos } = useVideos();

  let video = videos.filter((video) => video.youtubeId === videoId);

  return (
    <div className={classes['single-video']}>
      <div className={classes['video-player']}>
        <VideoPlayer video={video[0]} />
      </div>
      <div className={classes['right-sidebar']}>
        <RightSidebar />
      </div>
    </div>
  );
};

export { SingleVideo };
