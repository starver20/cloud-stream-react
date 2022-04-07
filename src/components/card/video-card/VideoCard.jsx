import React from 'react';
import { VideoFooter } from '../video-footer/VideoFooter';
import classes from './VideoCard.module.css';
import { useNavigate } from 'react-router-dom';
import { useAsync } from '../../../hooks/useAsync';
import { addToHistory } from '../../../utils/video-utils';
import { useManipulators } from '../../../utils/useManipulators';
import { useVideos } from '../../../context/videos/videos-context';

const VideoCard = ({ video }) => {
  const { videoThumbnail, youtubeId } = video;
  const navigate = useNavigate();

  // const { isPresentInHistory } = useManipulators();
  // const { videosDispatch } = useVideos();

  // const isInHistory = isPresentInHistory(video._id);

  // const { callAsyncFunction: addToHistoryHandler } = useAsync(
  //   addToHistory,
  //   videosDispatch,
  //   video,
  //   isInHistory
  // );
  return (
    <div className={classes['video-card']}>
      <div className={classes['image-container']}>
        <img
          onClick={async () => {
            navigate(`/video/${youtubeId}`);
          }}
          className={classes['image']}
          src={videoThumbnail}
          alt={video.title}
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
