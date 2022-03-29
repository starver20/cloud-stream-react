import axios from 'axios';

export const addToLikedVideo = async (
  video,
  check,
  videosDispatch,
  navigate
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
