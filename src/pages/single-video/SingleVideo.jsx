import React from 'react';
import { VideoPlayer } from '../../components/video-player/VideoPlayer';
import { RightSidebar } from '../../components/sidebar/right-sidebar/RightSidebar';
import classes from './SingleVideo.module.css';
import { useParams } from 'react-router-dom';
import { useVideos } from '../../context/videos-context/VideoContext';

const SingleVideo = () => {
  const { videoId } = useParams();
  const { videos } = useVideos();

  let video = videos.filter((video) => video.youtubeId === videoId);

  console.log(video);

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
