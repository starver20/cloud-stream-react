import React, { createContext, useReducer, useEffect, useContext } from 'react';
import axios from 'axios';

const initialState = {
  videos: [],
  likedVideos: [],
  watchlaterVideos: [],
  playlists: [],
  history: [],
  categories: [],
  categoryFilter: '',

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

    case 'UPDATE_SINGLE_PLAYLIST': {
      const index = state.playlists.findIndex(
        (playlist) => playlist._id === action.payload.playlist._id
      );

      if (index === -1) {
        return state;
      }
      let updatedPlaylists = [...state.playlists];
      updatedPlaylists[index] = action.payload.playlist;

      return {
        ...state,
        playlists: updatedPlaylists,
      };
    }

    case 'UPDATE_HISTORY': {
      return { ...state, history: action.payload.history };
    }

    case 'UPDATE_CATEGORIES': {
      return { ...state, categories: action.payload.categories };
    }

    case 'LISTING_CATEGORY': {
      const payloadCategory = action.payload.category;
      return {
        ...state,
        categoryFilter:
          state.categoryFilter === payloadCategory ? '' : payloadCategory,
      };
    }

    case 'RESET_FILTERS': {
      return { ...state, categoryFilter: [] };
    }

    case 'INC_LIKE_COUNT': {
      const videoToEdit = {
        ...state.videos.find((video) => video.id == action.payload.videoId),
      };
      videoToEdit.likes += 1;

      const newVideoArray = state.videos.filter(
        (video) => video.id != videoToEdit.id
      );
      let updatedVideos = [...newVideoArray, { ...videoToEdit }];

      return { ...state, videos: updatedVideos };
    }
    case 'DEC_LIKE_COUNT': {
      const videoToEdit = {
        ...state.videos.find((video) => video.id == action.payload.videoId),
      };
      videoToEdit.likes -= 1;

      const newVideoArray = state.videos.filter(
        (video) => video.id != videoToEdit.id
      );
      let updatedVideos = [...newVideoArray, { ...videoToEdit }];

      return { ...state, videos: updatedVideos };
    }

    case 'RESET_DATA': {
      return initialState;
    }
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

    const getCategories = async () => {
      let response = await axios.get('/api/categories');
      videosDispatch({
        type: 'UPDATE_CATEGORIES',
        payload: { categories: response.data.categories },
      });
    };

    getCategories();
    getVideos();
  }, []);

  const value = { ...videosState, videosDispatch };

  return (
    <VideosContext.Provider value={value}>{children}</VideosContext.Provider>
  );
};

const useVideos = () => useContext(VideosContext);

export { VideosProvider, useVideos };
