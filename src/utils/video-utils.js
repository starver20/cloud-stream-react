import axios from 'axios';
import { toast } from 'react-toastify';

export const addToLikedVideo = async (
  videosDispatch,
  navigate,
  video,
  jwt,
  check
) => {
  if (jwt) {
    let response;
    if (!check) {
      try {
        response = await axios.post(
          '/api/user/likes',
          { video },
          { headers: { authorization: jwt } }
        );

        if (response.status === 201) {
          videosDispatch({
            type: 'UPDATE_LIKED_VIDEOS',
            payload: { likedVideos: response.data.likes },
          });
          videosDispatch({
            type: 'INC_LIKE_COUNT',
            payload: { videoId: video.id },
          });
          toast.success('Added to liked videos');
        }
      } catch (err) {
        toast.alert('Failed to add to liked videos');
      }
    } else {
      try {
        response = await axios.delete(`/api/user/likes/${video._id}`, {
          headers: { authorization: jwt },
        });
        if (response.status === 200) {
          videosDispatch({
            type: 'UPDATE_LIKED_VIDEOS',
            payload: { likedVideos: response.data.likes },
          });
          videosDispatch({
            type: 'DEC_LIKE_COUNT',
            payload: { videoId: video.id },
          });
          toast.success('Removed from liked videos');
        }
      } catch (err) {
        toast.error('Failed to remove from liked videos');
      }
    }
  } else {
    navigate('/login');
    return;
  }
};

export const addToWatchlater = async (
  videosDispatch,
  navigate,
  video,
  jwt,
  check
) => {
  if (jwt) {
    let response;
    if (!check) {
      try {
        response = await axios.post(
          '/api/user/watchlater',
          { video },
          { headers: { authorization: jwt } }
        );

        if (response.status === 201) {
          videosDispatch({
            type: 'UPDATE_WATCH_LATER_VIDEOS',
            payload: { watchlaterVideos: response.data.watchlater },
          });
          toast.success('Added to watch later');
        }
      } catch (err) {
        toast.error('Failed to add to watch later');
      }
    } else {
      try {
        response = await axios.delete(`/api/user/watchlater/${video._id}`, {
          headers: { authorization: jwt },
        });

        if (response.status === 200) {
          videosDispatch({
            type: 'UPDATE_WATCH_LATER_VIDEOS',
            payload: { watchlaterVideos: response.data.watchlater },
          });
          toast.success('Removed from watch later');
        }
      } catch (err) {
        toast.error('Failed to remove from watch later');
      }
    }
  } else {
    navigate('/login');
    return;
  }
};

export const createPlaylist = async (
  videosDispatch,
  navigate,
  playlist,
  jwt
) => {
  if (jwt) {
    let response;
    try {
      response = await axios.post(
        '/api/user/playlists',
        { playlist },
        { headers: { authorization: jwt } }
      );

      if (response.status === 201) {
        videosDispatch({
          type: 'UPDATE_PLAYLISTS',
          payload: { playlists: response.data.playlists },
        });
        await addToPlaylist(
          videosDispatch,
          navigate,
          {
            playlistId: response.data.playlists[0]._id,
            video: playlist.video,
            playlistName: playlist.title,
          },
          jwt
        );
        toast.success(`Created playlist ${playlist.title}`);
      }
    } catch (err) {
      toast.error(`Failed to create playlist ${playlist.title}`);
    }
  } else {
    navigate('/login');
    return;
  }
};

export const addToPlaylist = async (
  videosDispatch,
  navigate,
  payload,
  jwt,
  check
) => {
  if (jwt) {
    let response;
    if (!check) {
      try {
        response = await axios.post(
          `/api/user/playlists/${payload.playlistId}`,
          { video: payload.video },
          { headers: { authorization: jwt } }
        );

        if (response.status === 201) {
          videosDispatch({
            type: 'UPDATE_SINGLE_PLAYLIST',
            payload: {
              playlist: response.data.playlist,
            },
          });
          toast.success(`Added to playlist ${payload.playlistName}`);
        }
      } catch (err) {
        toast.error(`Failed to add to playlist ${payload.playlistName}`);
      }
    } else {
      try {
        response = await axios.delete(
          `/api/user/playlists/${payload.playlistId}/${payload.video._id}`,
          { headers: { authorization: jwt } }
        );

        if (response.status === 200) {
          videosDispatch({
            type: 'UPDATE_SINGLE_PLAYLIST',
            payload: {
              playlist: response.data.playlist,
            },
          });
          toast.success(`Removed from playlist ${payload.playlistName}`);
        }
      } catch (err) {
        toast.error(`Failed to remove playlist ${payload.playlistName}`);
      }
    }
  } else {
    navigate('/login');
    return;
  }
};

export const deletePlaylist = async (
  videosDispatch,
  navigate,
  playlistId,
  jwt
) => {
  if (jwt) {
    let response;
    try {
      response = await axios.delete(`/api/user/playlists/${playlistId}`, {
        headers: { authorization: jwt },
      });

      if (response.status === 200) {
        videosDispatch({
          type: 'UPDATE_PLAYLISTS',
          payload: { playlists: response.data.playlists },
        });
        toast.success('Playlist deleted');
      }
    } catch (err) {
      toast.error('Failed to delete playlist');
    }
  } else {
    navigate('/login');
    return;
  }
};

export const addToHistory = async (
  videosDispatch,
  navigate,
  video,
  jwt,
  check
) => {
  if (jwt) {
    let response;
    if (!check && Object.keys(video).length !== 0) {
      //
      try {
        response = await axios.post(
          '/api/user/history',
          { video },
          { headers: { authorization: jwt } }
        );
        if (response.status === 201) {
          videosDispatch({
            type: 'UPDATE_HISTORY',
            payload: { history: response.data.history },
          });
        }
      } catch (err) {
        alert(err);
      }
    } else {
      try {
        response = await axios.delete(`/api/user/history/${video._id}`, {
          headers: { authorization: jwt },
        });

        if (response.status === 200) {
          videosDispatch({
            type: 'UPDATE_HISTORY',
            payload: { history: response.data.history },
          });
        }
      } catch (err) {
        alert(err);
      }
    }
  } else {
    // navigate('/login');
    return;
  }
};

export const clearHistory = async (videosDispatch, navigate, _, jwt) => {
  if (jwt) {
    let response;
    try {
      response = await axios.delete('/api/user/history/all', {
        headers: { authorization: jwt },
      });

      if (response.status === 200) {
        videosDispatch({
          type: 'UPDATE_HISTORY',
          payload: { history: [] },
        });
        toast.success('History cleared');
      }
    } catch (err) {
      toast.error('Failed to clear history');
    }
  } else {
    navigate('/login');
    return;
  }
};
