import React, { useEffect, useState } from 'react';
import classes from './VideoListing.module.css';
import { VideoCard } from '../../components/card/video-card/VideoCard';
import { useVideos } from '../../context/videos/videos-context';
import FilterChip from '../../components/filter-chip/FilterChip';

const VideoListing = () => {
  const { videos, categories, categoryFilter, videosDispatch } = useVideos();

  let listingVideos = videos.filter((video) =>
    categoryFilter === '' ? true : categoryFilter === video.category
  );

  const resetFilters = () => {
    videosDispatch({ type: 'RESET_FILTERS' });
  };

  return (
    <div className={classes.container}>
      <div className={classes['filter-bar']}>
        <div className={classes.filters}>
          {categories.map((category) => (
            <FilterChip
              title={category.categoryName}
              active={categoryFilter === category.categoryName}
            />
          ))}
        </div>
        <button onClick={resetFilters} className="nav--action__login">
          CLEAR
        </button>
      </div>
      <div className={classes['video-display']}>
        {listingVideos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export { VideoListing };
