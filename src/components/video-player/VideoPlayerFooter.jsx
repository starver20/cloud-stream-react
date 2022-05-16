import React, { useState, useEffect } from 'react';
import classes from './VideoPlayerFooter.module.css';
import { formatDistance } from 'date-fns';
import LikedVideoIcon from '../../assets/svg-icons/LikedVideoIcon';
import ShareIcon from '../../assets/svg-icons/ShareIcon';
import PlaylistIcon from '../../assets/svg-icons/PlaylistIcon';
import WatchLaterIcon from '../../assets/svg-icons/WatchlaterIcon';
import { useManipulators } from '../../utils/useManipulators';
import { addToLikedVideo, addToWatchlater } from '../../utils/video-utils';
import { useVideos } from '../../context/videos/videos-context';
import { useAsync } from '../../hooks/useAsync';
import { toast } from 'react-toastify';
// import {toast}
import PlaylistModal from '../card/playlist-modal/PlaylistModal';

const VideoPlayerFooter = ({ video }) => {
  const {
    id,
    title,
    views,
    likes,
    channelImage,
    uploadDate = 1200000000,
    channelName,
    description,
  } = video;

  const [showModal, setShowModal] = useState(false);
  const { videosDispatch, videos, watchlaterVideos } = useVideos();
  const { isLiked, isAddedToWatchlater } = useManipulators();

  const [liked, setLiked] = useState(isLiked(video._id));
  const [addedToWatchlater, setAddedToWatchlater] = useState(
    isAddedToWatchlater(video._id)
  );

  const currentVideoLikes =
    videos?.filter((video) => video.id == id)[0]?.likes || likes;

  useEffect(() => {
    setLiked(isLiked(video._id));
    setAddedToWatchlater(isAddedToWatchlater(video._id));
  }, [videos, watchlaterVideos, video]);

  const onShareClick = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard');
  };

  const { callAsyncFunction: likeVideo, loading: likeVideoLoading } = useAsync(
    addToLikedVideo,
    videosDispatch,
    video,
    liked
  );

  const { callAsyncFunction: watchlater, loading: watchlaterLoading } =
    useAsync(addToWatchlater, videosDispatch, video, addedToWatchlater);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

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
              {currentVideoLikes}
            </p>
            <p onClick={onShareClick}>
              <ShareIcon active={false} />
              SHARE
            </p>
            <p onClick={toggleModal}>
              <PlaylistIcon active={false} />
              SAVE
            </p>
            <p onClick={watchlaterLoading ? null : watchlater}>
              <WatchLaterIcon active={addedToWatchlater} />
              LATER
            </p>
          </div>
        </div>
      </div>
      <div className={classes['channel-info']}>
        <img
          className="avatar avatar-lg"
          src={channelImage}
          alt="medium logo"
        />
        <div>
          <p className={classes['channel-name']}>{channelName}</p>
          <p className={classes['channel-desc']}>{description}</p>
        </div>
      </div>
      <PlaylistModal
        toggleModal={toggleModal}
        showModal={showModal}
        video={video}
      />
    </>
  );
};

export { VideoPlayerFooter };
