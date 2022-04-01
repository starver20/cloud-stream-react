import React, { useState } from 'react';
import { useVideos } from '../../context/videos/videos-context';
import { CategoryCard } from '../../components/card/category-card/CategoryCard';
import classes from './Playlists.module.css';
import { Link } from 'react-router-dom';
import PlaylistCategoryFooter from '../../components/card/playlist-category-footer/PlaylistCategoryFooter';
import PlaylistModal from '../../components/card/playlist-modal/PlaylistModal';

const Playlists = () => {
  const { playlists, videosDispatch } = useVideos();

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <div className={classes.container}>
      <button
        className={`nav--action__login ${classes['new-playlist']}`}
        onClick={toggleModal}
      >
        New Playlist
      </button>
      {playlists.length > 0 ? (
        <div className={classes['available-playlists']}>
          {playlists.map((playlist) => {
            return (
              <div className={classes.playlist}>
                <Link to={`/playlist/${playlist._id}`}>
                  <CategoryCard
                    categoryThumbnail={playlist.videos[0]?.videoThumbnail}
                    category={playlist.title}
                    description={playlist.description}
                  />
                </Link>
                <PlaylistCategoryFooter
                  title={playlist.title}
                  playlistId={playlist._id}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className={classes['empty-playlist-array']}>
          <p>No playlists here!</p>
          <p className={classes['sub-message']}>
            Create playlists to manage your videos better.
          </p>
        </div>
      )}
      <PlaylistModal toggleModal={toggleModal} showModal={showModal} />
    </div>
  );
};

export { Playlists };
