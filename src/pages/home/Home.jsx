import React, { useEffect, useState } from 'react';
import classes from './Home.module.css';
import Carousel from '../../components/carousel/Carousel';
import { CategoryCard } from '../../components/card/category-card/CategoryCard';
import axios from 'axios';

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      let response = await axios.get('/api/categories');
      setCategories(response.data.categories);
    };

    getCategories();
  }, []);

  return (
    <div>
      <div className={classes.home}>
        <Carousel />
      </div>
      <p className={classes['category-title']}>Categories</p>
      <div className={classes.category}>
        {categories.map((category) => (
          <CategoryCard
            category={category.categoryName}
            categoryThumbnail={category.categoryThumbnail}
            description={category.description}
          />
        ))}
      </div>
    </div>
  );
};

export { Home };
