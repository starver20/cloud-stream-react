import React from 'react';
import classes from '../liked-video/LikedVideo.module.css';
import { PlaylistVideoCard } from '../../components/card/playlist-video-card/PlaylistVideoCard';
import { PlaylistInfoCard } from '../../components/card/playlist-info-card/PlaylistInfoCard';
import { useVideos } from '../../context/videos/videos-context';

export const Watchlater = () => {
  const { watchlaterVideos } = useVideos();

  return (
    <div className={classes['main-container']}>
      {watchlaterVideos.length > 0 ? (
        <div className={classes['playlist-info']}>
          <PlaylistInfoCard
            video={watchlaterVideos[0]}
            total={watchlaterVideos.length}
            playlistName="Watch Later"
          />
        </div>
      ) : null}
      <div className={classes['playlist-videos']}>
        {watchlaterVideos.length > 0 ? (
          watchlaterVideos.map((video) => {
            return <PlaylistVideoCard video={video} type="watchlater" />;
          })
        ) : (
          <div className={classes['empty-likes-array']}>
            <p>No videos here!</p>
            <p className={classes['sub-message']}>
              Explore videos to find videos to watch later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
