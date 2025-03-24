import Button from '../Button/Button.jsx';
import Icon from '../Icon/Icon.jsx';
import TruckOptionsList from '../TruckOptionsList/TruckOptionsList.jsx';

import styles from './TruckBasicInfo.module.css';

export default function TruckBasicInfo({ data, onClick, favorites }) {
  const isFavorite = favorites.includes(data.id);
  console.log(isFavorite);
  return (
    <div className={styles.item}>
      <img
        className={styles.img}
        src={data.gallery[0].original}
        alt="Camper image"
      />
      <section className={styles.content}>
        <section>
          <div className={styles.name_price}>
            <h2>{data.name}</h2>
            <div className={styles.price}>
              <h2>&euro;{data.price.toFixed(2)}</h2>
              <button
                className={styles.favorite}
                onClick={() => onClick(data.id)}
              >
                <Icon
                  id="like"
                  width={26}
                  height={24}
                  color={isFavorite && 'button'}
                ></Icon>
              </button>
            </div>
          </div>
          <ul className={styles.rating_location}>
            <li>
              <Icon id="star" width={16} height={14} color="rating"></Icon>
              <p>
                {data.rating}({data.reviews.length} Reviews)
              </p>
            </li>
            <li>
              <Icon id="map" width={16} height={14}></Icon>
              <p>{data.location}</p>
            </li>
          </ul>
        </section>
        <p className={styles.description}>{data.description}</p>
        <TruckOptionsList data={data} />
        <Button variant="showMore" id={data.id}>
          Show more
        </Button>
      </section>
    </div>
  );
}
