import React, { useState, useEffect } from 'react';
import classes from './Carousel.module.css';
import nba from '../../assets/images/nba.jpg';
import wnba from '../../assets/images/wnba.jpg';
import fiba from '../../assets/images/fiba.jpg';
import handles from '../../assets/images/handles.jpg';
const Carousel = () => {
  let img = [
    {
      link: nba,
    },
    {
      link: wnba,
    },
    {
      link: fiba,
    },
    {
      link: handles,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  // Carousel has to stop once the user clicks on one of the arrow buttons
  useEffect(() => {
    let intervalId = setInterval(() => {
      moveToNextImage();
    }, 2000);

    setIntervalId(intervalId);

    () => {
      clearInterval(intervalId);
    };
  }, []);

  const moveToNextImage = () => {
    setCurrent((prev) => (prev === img.length - 1 ? 0 : prev + 1));
  };

  const moveToPrevImage = () => {
    setCurrent((prev) => (prev === 0 ? img.length - 1 : prev - 1));
  };

  const backClickHandler = () => {
    clearInterval(intervalId);
    moveToPrevImage();
  };
  const nextClickHandler = () => {
    clearInterval(intervalId);
    moveToNextImage();
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
