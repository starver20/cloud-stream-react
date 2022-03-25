import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: 'Blocks',
    description: 'Check out the best blocks in the NBA history!',
    categoryThumbnail:
      'https://i.ytimg.com/vi/HCkYEzt3irg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAI39EU5UvKZG9DzgUVasy1rqVuyg',
  },
  {
    _id: uuid(),
    categoryName: 'Tutorial',
    description:
      'Discover secrets for how to INSTANTLY dribble a basketball better for beginners!',
    categoryThumbnail:
      'https://i.ytimg.com/vi/Q9GhaXd18hE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAtRZ7WMC8TqJb_iozUmxuHRxIz6A',
  },
  {
    _id: uuid(),
    categoryName: 'All-star',
    description: 'Enjoy  highlights from NBA All-Star Games!',
    categoryThumbnail:
      'https://i.ytimg.com/vi/2Q-qkpuqY-4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC30uDsxXeDOH4ihAgjfVrgj86i4g',
  },
  {
    _id: uuid(),
    categoryName: 'Dunks',
    description: 'Check out the top dunks of NBA history! .',
    categoryThumbnail:
      'https://i.ytimg.com/vi/ue1NT3QhuVU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC28H7Xv4lCQm4VkX6ZHPskzO-RQA',
  },
];
