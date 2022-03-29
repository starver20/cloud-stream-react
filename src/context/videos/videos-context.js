import React, { createContext, useReducer, useEffect, useContext } from 'react';
import axios from 'axios';

const initialState = { videos: [], likedVideos: [], videosDispatch: () => {} };

const VideosContext = createContext(initialState);

const videosReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_VIDEOS':
      return { ...state, videos: action.payload.videos };
    case 'UPDATE_LIKED_VIDEOS':
      return { ...state, likedVideos: action.payload.likedVideos };

    default:
      return state;
  }
};

const VideosProvider = ({ children }) => {
  const [videosState, videosDispatch] = useReducer(videosReducer, initialState);

  useEffect(() => {
    const getVideos = async () => {
      let response = await axios.get('/api/videos');
      videosDispatch({
        type: 'UPDATE_VIDEOS',
        payload: { videos: response.data.videos },
      });
    };

    getVideos();
  }, []);

  const value = { ...videosState, videosDispatch };

  return (
    <VideosContext.Provider value={value}>{children}</VideosContext.Provider>
  );
};

const useVideos = () => useContext(VideosContext);

export { VideosProvider, useVideos };
