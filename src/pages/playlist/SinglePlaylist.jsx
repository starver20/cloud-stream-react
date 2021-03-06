import React, { useEffect, useState } from 'react';
import classes from './SinglePlaylist.module.css';
import { PlaylistVideoCard } from '../../components/card/playlist-video-card/PlaylistVideoCard';
import { PlaylistInfoCard } from '../../components/card/playlist-info-card/PlaylistInfoCard';
import { useParams, useNavigate } from 'react-router-dom';
import { useVideos } from '../../context/videos/videos-context';
import { useAsync } from '../../hooks/useAsync';
import { clearHistory } from '../../utils/video-utils';

export const SinglePlaylist = () => {
  const { playlistType } = useParams();
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [playlistName, setPlaylistName] = useState(playlistType);

  const { [playlistType]: videoData, playlists, videosDispatch } = useVideos();

  const { callAsyncFunction: clearHistoryHandler } = useAsync(
    clearHistory,
    videosDispatch
  );

  useEffect(() => {
    // If its neither likedVideos nor watchLater, its got to be playlist
    if (videoData === undefined) {
      let playlist = playlists.find(
        (playlist) => playlist._id === playlistType
      );

      if (playlist === undefined) {
        navigate('/');
        return;
      }

      setPlaylistName(playlist.title);
      setVideos(playlist.videos);
    } else {
      setVideos(videoData);
      playlistType === 'likedVideos'
        ? setPlaylistName('Liked Videos')
        : playlistType === 'watchlaterVideos'
        ? setPlaylistName('Watch Later')
        : setPlaylistName('History');
    }

    return () => {
      setVideos([]);
    };
  });

  return (
    <div className={classes['main-container']}>
      {playlistType === 'history' && (
        <button
          onClick={clearHistoryHandler}
          className={`nav--action__login ${classes['clear-history']}`}
        >
          Clear History
        </button>
      )}
      <div className={classes.main}>
        {videos !== undefined && videos.length > 0 ? (
          <div className={classes['playlist-info']}>
            <PlaylistInfoCard
              video={videos[0]}
              total={videos.length}
              playlistName={playlistName}
            />
          </div>
        ) : null}
        <div className={classes['playlist-videos']}>
          {videos !== undefined && videos.length > 0 ? (
            videos.map((video) => {
              return (
                <PlaylistVideoCard
                  video={video}
                  type={playlistType}
                  playlistId={playlistType}
                />
              );
            })
          ) : (
            <div className={classes['empty-playlist-array']}>
              <p>No videos here!</p>
              <p className={classes['sub-message']}>
                Explore videos to add here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
