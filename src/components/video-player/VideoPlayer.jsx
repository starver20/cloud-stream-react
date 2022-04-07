import React, { useEffect } from 'react';
import { VideoPlayerFooter } from './VideoPlayerFooter';
import { useVideos } from '../../context/videos/videos-context';
import { useAsync } from '../../hooks/useAsync';
import { addToHistory } from '../../utils/video-utils';
import { useManipulators } from '../../utils/useManipulators';

const VideoPlayer = ({ video }) => {
  const { videosDispatch } = useVideos();
  const { isPresentInHistory } = useManipulators();

  const isInHistory = isPresentInHistory(video._id);

  const { callAsyncFunction: addToHistoryHandler } = useAsync(
    addToHistory,
    videosDispatch,
    video,
    isInHistory
  );

  useEffect(() => {
    addToHistoryHandler();
  }, [video]);

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
