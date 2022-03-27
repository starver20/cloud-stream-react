import React from 'react';
import { useVideos } from '../../../context/videos-context/VideoContext';
import { VideoCard } from '../../card/video-card/VideoCard';

const RightSidebar = () => {
  const { videos } = useVideos();

  return (
    <div>
      {videos.slice(0, 6).map((video) => (
        <VideoCard {...video} />
      ))}
    </div>
  );
};

export { RightSidebar };
