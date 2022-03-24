import React from 'react';
import classes from './Home.module.css';
import Carousel from '../../components/carousel/Carousel';
import { VideoCard } from '../../components/card/video-card/VideoCard';

const Home = () => {
  return (
    <div>
      <div className={classes.home}>
        <Carousel />
      </div>

      {/* <VideoCard url="https://i.ytimg.com/vi/XhSE-lY23e8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB7_HW_ILxkNd8ITFqxknxU02mFEQ" /> */}
    </div>
  );
};

export { Home };
