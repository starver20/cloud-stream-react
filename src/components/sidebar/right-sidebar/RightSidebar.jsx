import React from 'react';
import { useVideos } from '../../../context/videos/videos-context';
import { VideoCard } from '../../card/video-card/VideoCard';

const RightSidebar = () => {
  const { videos } = useVideos();

  return (
    <div>
      {videos.slice(0, 6).map((video) => (
        <VideoCard video={video} />
      ))}
    </div>
  );
};

export { RightSidebar };
