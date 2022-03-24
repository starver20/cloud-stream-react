import React, { useState } from 'react';
import classes from './Carousel.module.css';
import phil from '../../assets/images/phil.jpg';
import lakers from '../../assets/images/lakers.jpg';
import nba from '../../assets/images/nba.jpg';
import wnba from '../../assets/images/wnba.jpg';
const Carousel = () => {
  let img = [
    {
      link: nba,
    },
    {
      link: wnba,
    },
  ];

  const [current, setCurrent] = useState(0);
  const backClickHandler = () => {
    setCurrent((prev) => (prev === 0 ? img.length - 1 : prev - 1));
  };
  const nextClickHandler = () => {
    setCurrent((prev) => (prev === img.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={classes['carousel-container']}>
      <button className={classes.prev} onClick={backClickHandler}>
        {`<`}
      </button>
      {img.map((img, index) => {
        if (current === index)
          return <img className={classes['carousel-img']} src={img.link} />;
      })}
      <button className={classes.next} onClick={nextClickHandler}>
        {`>`}
      </button>
    </div>
  );
};

export default Carousel;
