import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './PlaylistVideoCard.module.css';
import DeleteIcon from '../../../assets/svg-icons/DeleteIcon';
import {
  addToWatchlater,
  addToLikedVideo,
  addToPlaylist,
} from '../../../utils/video-utils';
import { useAsync } from '../../../hooks/useAsync';
import { useVideos } from '../../../context/videos/videos-context';

export const PlaylistVideoCard = ({ video, type, playlistId }) => {
  const { videoThumbnail, channelName, channelImage, title, youtubeId } = video;

  const { videosDispatch } = useVideos();
  const navigate = useNavigate();

  // like/ unlike
  const { callAsyncFunction: likeVideo, loading: likeVideoLoading } = useAsync(
    addToLikedVideo,
    videosDispatch,
    video,
    true
  );

  // add/remove from watch later
  const { callAsyncFunction: watchlater, loading: watchlaterLoading } =
    useAsync(addToWatchlater, videosDispatch, video, true);

  // add/remove from playlist
  const {
    callAsyncFunction: addToPlaylistHandler,
    loading: addToPlaylistLoading,
  } = useAsync(
    addToPlaylist,
    videosDispatch,
    {
      playlistId,
      video,
    },
    true
  );

  // Here passing true, to tell that all these videos exist in the respective playlists

  return (
    <div
      onClick={() => navigate(`/video/${youtubeId}`)}
      className={classes.container}
    >
      <div>
        <img src={videoThumbnail} alt="liked-video" />
      </div>
      <div className={classes['video-info']}>
        <div>
          <p className={classes.title}>{title}</p>
          <div className={classes['channel-info']}>
            <img
              class="avatar avatar-xs"
              src={channelImage}
              alt="medium logo"
            />
            <p className={classes.channel}>{channelName}</p>
          </div>
        </div>
        <div
          // Will try to export this logic to a utils funtion later
          onClick={(e) => {
            e.stopPropagation();
            if (type === 'watchlaterVideos' && !watchlaterLoading) {
              watchlater();
            } else if (type === 'likedVideos' && !likeVideoLoading) {
              likeVideo();
            } else if (!addToPlaylistLoading) {
              addToPlaylistHandler();
            }
          }}
          className={classes['delete-icon']}
        >
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
};
