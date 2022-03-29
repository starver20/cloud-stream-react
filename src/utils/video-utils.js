import axios from 'axios';

const jwt = localStorage.getItem('jwt');

export const addToLikedVideo = async (
  video,
  check,
  videosDispatch,
  navigate
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
  check,
  videosDispatch,
  navigate
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

        console.log(response);
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

        console.log(response);

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
