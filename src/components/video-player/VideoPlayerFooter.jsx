import React from 'react';
import classes from './VideoPlayerFooter.module.css';
import { formatDistance } from 'date-fns';
import LikedVideoIcon from '../../assets/svg-icons/LikedVideoIcon';
import ShareIcon from '../../assets/svg-icons/ShareIcon';
import PlaylistIcon from '../../assets/svg-icons/PlaylistIcon';
import WatchLaterIcon from '../../assets/svg-icons/WatchlaterIcon';
import { useManipulators } from '../../utils/useManipulators';
import { addToLikedVideo } from './utils/video-utils';
import { useVideos } from '../../context/videos/videos-context';
import { useAsync } from '../../hooks/useAsync';

const VideoPlayerFooter = ({ video }) => {
  const {
    title,
    views,
    likes,
    channelImage,
    uploadDate,
    channelName,
    description,
  } = video;

  const { videosDispatch } = useVideos();
  const { isLiked } = useManipulators();

  const liked = isLiked(video._id);

  const { callAsyncFunction: likeVideo, loading: likeVideoLoading } = useAsync(
    addToLikedVideo,
    liked,
    videosDispatch,
    video
  );

  return (
    <>
      <div className={classes['video-info']}>
        <p className={classes.title}>{title}</p>
        <div className={classes['meta-info']}>
          <div className={classes.stats}>
            <p>{views} views</p>
            <p>{formatDistance(uploadDate - 2000000000, Date.now())} ago</p>
          </div>
          <div className={classes.actions}>
            <p onClick={likeVideoLoading ? null : likeVideo}>
              <LikedVideoIcon active={liked} />
              {likes}
            </p>
            <p>
              <ShareIcon active={false} />
              SHARE
            </p>
            <p>
              <PlaylistIcon active={false} />
              SAVE
            </p>
            <p>
              <WatchLaterIcon active={false} />
              LATER
            </p>
          </div>
        </div>
      </div>
      <div className={classes['channel-info']}>
        <img class="avatar avatar-lg" src={channelImage} alt="medium logo" />
        <div>
          <p className={classes['channel-name']}>{channelName}</p>
          <p className={classes['channel-desc']}>{description}</p>
        </div>
      </div>
    </>
  );
};

export { VideoPlayerFooter };
