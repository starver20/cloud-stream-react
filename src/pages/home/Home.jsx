import React, { useEffect, useState } from 'react';
import classes from './Home.module.css';
import Carousel from '../../components/carousel/Carousel';
import { CategoryCard } from '../../components/card/category-card/CategoryCard';
import { useNavigate } from 'react-router-dom';
import { useVideos } from '../../context/videos/videos-context';

const Home = () => {
  const navigate = useNavigate();
  const { videosDispatch, categories } = useVideos();

  const categoryClickHandler = (e, category) => {
    videosDispatch({
      type: 'LISTING_CATEGORY',
      payload: { category: category.categoryName },
    });
    navigate('/explore');
  };

  return (
    <div>
      <div className={classes.home}>
        <Carousel />
      </div>
      <p className={classes['category-title']}>Categories</p>
      <div className={classes.category}>
        {categories.map((category) => (
          <div
            onClick={(e) => {
              categoryClickHandler(e, category);
            }}
          >
            <CategoryCard
              category={category.categoryName}
              categoryThumbnail={category.categoryThumbnail}
              description={category.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export { Home };
