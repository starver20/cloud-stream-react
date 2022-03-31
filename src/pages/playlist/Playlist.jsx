import React from 'react';
import { useVideos } from '../../context/videos/videos-context';

const Playlist = () => {
  const { playlists } = useVideos();
  console.log(playlists);

  return (
    <div>
      {playlists.length > 0
        ? playlists.map((playlist) => {
            return (
              <>
                <img
                  src={playlist.videos[0].videoThumbnail}
                  alt="playlist-thumbnail"
                />
              </>
            );
          })
        : null}
    </div>
  );
};

export { Playlist };
