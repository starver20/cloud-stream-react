import React, { createContext, useReducer, useEffect, useContext } from 'react';
import axios from 'axios';

const initialState = {
  videos: [],
  likedVideos: [],
  watchlaterVideos: [],
  playlists: [],
  videosDispatch: () => {},
};

const VideosContext = createContext(initialState);

const videosReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_VIDEOS':
      return { ...state, videos: action.payload.videos };
    case 'UPDATE_LIKED_VIDEOS':
      return { ...state, likedVideos: action.payload.likedVideos };
    case 'UPDATE_WATCH_LATER_VIDEOS':
      return { ...state, watchlaterVideos: action.payload.watchlaterVideos };
    case 'UPDATE_PLAYLISTS':
      console.log(action.payload.playlists);
      return { ...state, playlists: action.payload.playlists };

    case 'UPDATE_SINGLE_PLAYLIST':
      const index = state.playlists.findIndex(
        (playlist) => playlist._id === action.payload.playlist._id
      );

      console.log(index);

      if (index === -1) {
        return state;
      }

      let updatedPlaylists = [...state.playlists];
      updatedPlaylists[index] = action.payload.playlist;

      return {
        ...state,
        playlists: updatedPlaylists,
      };
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
