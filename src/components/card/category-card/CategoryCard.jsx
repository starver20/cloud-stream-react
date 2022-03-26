import React from 'react';
import classes from '../video-card/VideoCard.module.css';

const CategoryCard = ({ categoryThumbnail, category, description }) => {
  return (
    <div className={classes['video-card']}>
      <div className={classes['image-container']}>
        <img className={classes['image']} src={categoryThumbnail} alt="" />
        <div className={classes['desc-layer']}>
          <div className={classes.desc}>
            <p className={classes['category-name']}>{category}</p>
            <p className={classes['category-desc']}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CategoryCard };
