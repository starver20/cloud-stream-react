import React, { useState } from 'react';
import classes from './PlaylistItem.module.css';
import { useAsync } from '../../../hooks/useAsync';
import { useVideos } from '../../../context/videos/videos-context';
import { addToPlaylist } from '../../../utils/video-utils';
const PlaylistItem = ({ playlist, video = null }) => {
  const [check, setCheck] = useState(
    playlist.videos.find((playlistVideo) => playlistVideo._id === video._id) ===
      undefined
      ? false
      : true
  );

  const { videosDispatch } = useVideos();

  const {
    callAsyncFunction: addToPlaylistHandler,
    loading: addToPlaylistLoading,
  } = useAsync(
    addToPlaylist,
    videosDispatch,
    {
      playlistId: playlist._id,
      video,
    },
    check
  );

  return (
    <div className={classes['playlist-item']}>
      {video !== null && ( //Show the checkbox to add video to playlist only when we are on a video page, not when  creating empty playlist from playlists page
        <input
          onChange={(e) => {
            setCheck((prevState) => !prevState);
            addToPlaylistHandler();
          }}
          type="checkbox"
          name={playlist.title}
          id={playlist.title}
          checked={check}
          disabled={addToPlaylistLoading}
        />
      )}
      <label htmlFor={playlist.title}>{playlist.title}</label>
    </div>
  );
};

export { PlaylistItem };
