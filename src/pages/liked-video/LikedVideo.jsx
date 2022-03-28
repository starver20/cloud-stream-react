import React from 'react';
import classes from './LikedVideo.module.css';
import { PlaylistVideoCard } from '../../components/card/playlist-video-card/PlaylistVideoCard';
import { PlaylistInfoCard } from '../../components/card/playlist-info-card/PlaylistInfoCard';
import { useVideos } from '../../context/videos/videos-context';

export const LikedVideo = () => {
  const { likedVideos } = useVideos();

  return (
    <div className={classes['main-container']}>
      {likedVideos.length > 0 ? (
        <div className={classes['playlist-info']}>
          <PlaylistInfoCard
            video={likedVideos[0]}
            total={likedVideos.length}
            playlistName="Liked Videos"
          />
        </div>
      ) : null}
      <div className={classes['playlist-videos']}>
        {likedVideos.length > 0 ? (
          likedVideos.map((video) => {
            return <PlaylistVideoCard video={video} />;
          })
        ) : (
          <div className={classes['empty-likes-array']}>
            <p>No liked videos!</p>
            <p className={classes['sub-message']}>
              Explore videos to find videos you like.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
