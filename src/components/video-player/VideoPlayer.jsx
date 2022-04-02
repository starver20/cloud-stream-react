import React from 'react';
import { VideoPlayerFooter } from './VideoPlayerFooter';

const VideoPlayer = ({ video }) => {
  return (
    <>
      <div>
        <iframe
          width="100%"
          height="640"
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <VideoPlayerFooter video={video} />
      </div>
    </>
  );
};

export { VideoPlayer };
