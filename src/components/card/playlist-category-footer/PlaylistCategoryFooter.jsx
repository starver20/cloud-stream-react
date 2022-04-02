import React from 'react';
import classes from './PlaylistCategoryFooter.module.css';
import { useAsync } from '../../../hooks/useAsync';
import DeleteIcon from '../../../assets/svg-icons/DeleteIcon';
import { deletePlaylist } from '../../../utils/video-utils';
import { useVideos } from '../../../context/videos/videos-context';

const PlaylistCategoryFooter = ({ title, playlistId }) => {
  const { videosDispatch } = useVideos();

  const {
    callAsyncFunction: deletePlaylistHandler,
    loading: deletePlaylistLoading,
  } = useAsync(deletePlaylist, videosDispatch, playlistId);

  return (
    <div className={classes['playlist-footer']}>
      <p className={classes['playlist-title']}>{title}</p>
      <div
        aria-disabled={deletePlaylistLoading}
        onClick={deletePlaylistHandler}
      >
        <DeleteIcon />
      </div>
    </div>
  );
};

export default PlaylistCategoryFooter;
