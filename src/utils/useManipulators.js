import { useVideos } from '../context/videos/videos-context';

export const useManipulators = () => {
  const { likedVideos, watchlaterVideos, history } = useVideos();

  const isLiked = (videoId) =>
    likedVideos.find((video) => video._id === videoId);

  const isAddedToWatchlater = (videoId) =>
    watchlaterVideos.find((video) => video._id == videoId);

  const isPresentInHistory = (videoId) =>
    history.find((video) => video._id === videoId);

  return { isLiked, isAddedToWatchlater, isPresentInHistory };
};
