import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './VideoFooter.module.css';
import { formatDistance } from 'date-fns';
import { useManipulators } from '../../../utils/useManipulators';
import { addToWatchlater, createPlaylist } from '../../../utils/video-utils';
import { useVideos } from '../../../context/videos/videos-context';
import { useAsync } from '../../../hooks/useAsync';
import { Modal } from '../../modal/Modal';
import PlaylistModal from '../playlist-modal/PlaylistModal';

const VideoFooter = ({ video }) => {
  const {
    title = 'Video Title',
    channelName = 'Amar',
    views = 2342342,
    uploadDate = 1233123,
    channelImage,
  } = video;

  const jwt = localStorage.getItem('jwt');
  const navigate = useNavigate();

  const { videosDispatch, playlists } = useVideos();
  const { isAddedToWatchlater } = useManipulators();

  const [showModal, setShowModal] = useState(false);

  const addedToWatchlater = isAddedToWatchlater(video._id);

  const { callAsyncFunction: watchlater, loading: watchlaterLoading } =
    useAsync(addToWatchlater, videosDispatch, video, addedToWatchlater);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

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
      {/* This stopPropagation is to stop redirecting to video page when user clicks on the opt button in mobile view to see the options */}
      <span onClick={(e) => e.stopPropagation()} className={classes.menu}>
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
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
            <li
              onClick={(e) => {
                e.stopPropagation();
                if (!jwt) {
                  navigate('/login');
                }

                toggleModal();
              }}
              className={classes['playlist']}
            >
              Add to Playlist
            </li>
          </ul>
        </div>
      </span>
      <PlaylistModal
        toggleModal={toggleModal}
        showModal={showModal}
        video={video}
      />
    </div>
  );
};

export { VideoFooter };
