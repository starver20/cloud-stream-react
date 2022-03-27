import { useVideos } from '../context/videos/videos-context';

export const useManipulators = () => {
  const { likedVideos } = useVideos();

  const isLiked = (videoId) => {
    console.log(likedVideos);
    return likedVideos.find((video) => video._id === videoId);
  };

  return { isLiked };
};
