import React, { useState } from 'react';
import { Modal } from '../../modal/Modal';
import { useAsync } from '../../../hooks/useAsync';
import { createPlaylist } from '../../../utils/video-utils';
import { PlaylistItem } from './PlaylistItem';
import { useVideos } from '../../../context/videos/videos-context';
import classes from './PlaylistModal.module.css';

const PlaylistModal = ({ toggleModal, showModal, video = null }) => {
  const [addingNewPlaylist, setAddingNewPlaylist] = useState(false);
  const [playlistName, setPlaylistName] = useState('');

  const { videosDispatch, playlists } = useVideos();

  // useAsync for creating new playlist
  const {
    callAsyncFunction: createNewPlaylist,
    loading: createPlaylistLoading,
  } = useAsync(createPlaylist, videosDispatch, {
    title: playlistName,
    description: 'Playlist Description',
    video,
  });

  const toggleAddingNewPlaylist = () => {
    setAddingNewPlaylist((prevState) => !prevState);
  };

  let content = (
    <>
      <div className={classes.playlists}>
        {playlists.map((playlist) => (
          <PlaylistItem playlist={playlist} video={video} /> //There is no video data available while creating empty playlist here, so send null
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
    <div>{showModal && <Modal onClick={toggleModal}>{content}</Modal>}</div>
  );
};

export default PlaylistModal;
