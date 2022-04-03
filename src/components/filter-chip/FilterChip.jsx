import classes from './FilterChip.module.css';
import { useVideos } from '../../context/videos/videos-context';

const FilterChip = ({ title, active = false }) => {
  const { videosDispatch } = useVideos();

  const filterClickHandler = () => {
    videosDispatch({
      type: 'LISTING_CATEGORY',
      payload: { category: title },
    });
  };

  return (
    <div
      onClick={filterClickHandler}
      className={`${classes.chip} ${active ? classes.active : ''}`}
    >
      <div className={classes.title}>{title}</div>
    </div>
  );
};

export default FilterChip;
