import React from 'react';
import classes from './VideoFooter.module.css';
import { formatDistance } from 'date-fns';
import { useManipulators } from '../../../utils/useManipulators';
import { addToWatchlater } from '../../../utils/video-utils';
import { useVideos } from '../../../context/videos/videos-context';
import { useAsync } from '../../../hooks/useAsync';

const VideoFooter = ({ video }) => {
  const {
    title = 'Video Title',
    channelName = 'Amar',
    views = 2342342,
    uploadDate = 1233123,
    channelImage,
  } = video;

  const { videosDispatch } = useVideos();
  const { isAddedToWatchlater } = useManipulators();

  const addedToWatchlater = isAddedToWatchlater(video._id);

  const { callAsyncFunction: watchlater, loading: watchlaterLoading } =
    useAsync(addToWatchlater, addedToWatchlater, videosDispatch, video);

  return (
    <div className={classes.footer}>
      <img class="avatar avatar-sm" src={channelImage} alt="medium logo" />
      <div className={classes['video-info']}>
        <p className={classes.title}>{title}</p>
        <p className={classes.creator}>{channelName}</p>
        <p className={classes.info}>
          <span className={classes.views}>{views} views - </span>
          <span className={classes.date}>
            {formatDistance(uploadDate - 2000000, Date.now())} ago
          </span>
        </p>
      </div>
      <span onClick={(e) => e.stopPropagation()} className={classes.menu}>
        OPT
        <div className={classes.options}>
          <ul>
            <li
              onClick={(e) => {
                e.stopPropagation();
                !watchlaterLoading && watchlater();
              }}
            >
              {addedToWatchlater
                ? 'Remove from watch later'
                : 'Add to watch later'}
            </li>
            <li>Add to Playlist</li>
          </ul>
        </div>
      </span>
    </div>
  );
};

export { VideoFooter };
