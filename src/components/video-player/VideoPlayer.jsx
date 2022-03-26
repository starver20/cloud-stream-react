import React from 'react';
import classes from './VideoPlayer.module.css';
import { VideoPlayerFooter } from './VideoPlayerFooter';

const VideoPlayer = ({ video = {} }) => {
  const {
    youtubeId,
    channelImage,
    title,
    views,
    likes,
    uploadDate = 1648333768273,
    channelName,
    description,
  } = video;

  return (
    <>
      <div>
        <iframe
          width="100%"
          height="640"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <VideoPlayerFooter
          title={title}
          views={views}
          likes={likes}
          channelImage={channelImage}
          uploadDate={uploadDate - 2000000000}
          channelName={channelName}
          description={description}
        />
      </div>
    </>
  );
};

export { VideoPlayer };
