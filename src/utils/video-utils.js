import axios from 'axios';

export const addToLikedVideo = async (
  video,
  videosDispatch,
  navigate,
  check
) => {
  const jwt = localStorage.getItem('jwt');
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
        }
      } catch (err) {
        console.log(err);
        alert(err);
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
        }
      } catch (err) {
        console.log(err);
        alert(err);
      }
    }
  } else {
    navigate('/login');
    return;
  }
};

export const addToWatchlater = async (
  video,
  videosDispatch,
  navigate,
  check
) => {
  console.log(video, check);
  const jwt = localStorage.getItem('jwt');
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
        }
      } catch (err) {
        console.log(err);
        alert(err);
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
        }
      } catch (err) {
        console.log(err);
        alert(err);
      }
    }
  } else {
    navigate('/login');
    return;
  }
};

export const createPlaylist = async (playlist, videosDispatch, navigate) => {
  const jwt = localStorage.getItem('jwt');
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
      }
    } catch (err) {
      console.log(err);
      alert(err);
    }
  } else {
    navigate('/login');
    return;
  }
};

export const addToPlaylist = async (
  payload,
  videosDispatch,
  navigate,
  check
) => {
  const jwt = localStorage.getItem('jwt');
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
        }
      } catch (err) {
        console.log(err);
        alert(err);
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
        }
      } catch (err) {
        console.log(err);
        alert(err);
      }
    }
  } else {
    navigate('/login');
    return;
  }
};

export const deletePlaylist = async (playlistId, videosDispatch, navigate) => {
  const jwt = localStorage.getItem('jwt');
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
      }
    } catch (err) {
      console.log(err);
      alert(err);
    }
  } else {
    navigate('/login');
    return;
  }
};
