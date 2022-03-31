import React, { useState } from 'react';
import classes from './VideoFooter.module.css';
import { formatDistance } from 'date-fns';
import { useManipulators } from '../../../utils/useManipulators';
import { addToWatchlater, createPlaylist } from '../../../utils/video-utils';
import { useVideos } from '../../../context/videos/videos-context';
import { useAsync } from '../../../hooks/useAsync';
import { Modal } from '../../modal/Modal';
import { PlaylistItem } from '../../PlaylistItem';

const VideoFooter = ({ video }) => {
  const {
    title = 'Video Title',
    channelName = 'Amar',
    views = 2342342,
    uploadDate = 1233123,
    channelImage,
  } = video;

  const { videosDispatch, playlists } = useVideos();
  const { isAddedToWatchlater } = useManipulators();

  const [showModal, setShowModal] = useState(false);
  const [addingNewPlaylist, setAddingNewPlaylist] = useState(false);
  const [playlistName, setPlaylistName] = useState('');

  const addedToWatchlater = isAddedToWatchlater(video._id);
  console.log(addedToWatchlater);

  const { callAsyncFunction: watchlater, loading: watchlaterLoading } =
    useAsync(addToWatchlater, videosDispatch, video, addedToWatchlater);

  const {
    callAsyncFunction: createNewPlaylist,
    loading: createPlaylistLoading,
  } = useAsync(createPlaylist, videosDispatch, {
    title: playlistName,
    description: 'Playlist Description',
  });

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const toggleAddingNewPlaylist = () => {
    setAddingNewPlaylist((prevState) => !prevState);
  };

  let content = (
    <>
      <div className={classes.playlists}>
        {playlists.map((playlist) => (
          <PlaylistItem playlist={playlist} video={video} />
        ))}
      </div>
      <div>
        {!addingNewPlaylist ? (
          <span
            className={classes['add-playlist']}
            onClick={(e) => {
              e.stopPropagation();
              toggleAddingNewPlaylist();
            }}
          >
            + Create a new playlist
          </span>
        ) : (
          <form className={classes['playlist-form']}>
            <input
              className={classes['playlist-name-inp']}
              onChange={(e) => {
                setPlaylistName(e.target.value);
              }}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleAddingNewPlaylist();
                createNewPlaylist();
              }}
              className={`nav--action__login ${classes['create-playlist-btn']}`}
            >
              Create
            </button>
          </form>
        )}
      </div>
    </>
  );

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
            <li
              onClick={(e) => {
                e.stopPropagation();
                toggleModal();
              }}
              className={classes['playlist']}
            >
              Add to Playlist
            </li>
          </ul>
        </div>
      </span>
      {showModal && <Modal onClick={toggleModal}>{content}</Modal>}
    </div>
  );
};

export { VideoFooter };
