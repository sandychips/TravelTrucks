import Icon from '../Icon/Icon.jsx';

import styles from './MainTruckInfo.module.css';

export default function MainTruckInfo({ truckInfo }) {
  return (
    <section className={styles.description}>
      <section className={styles.mainInfo}>
        <h2>{truckInfo.name}</h2>
        <div className={styles.ratingDescr}>
          <ul className={styles.rating_location}>
            <li>
              <Icon id="star" width={16} height={16} color="rating"></Icon>
              <p>
                {truckInfo.rating}({truckInfo.reviews.length} Reviews)
              </p>
            </li>
            <li>
              <Icon id="map" width={16} height={14}></Icon>
              <p>{truckInfo.location}</p>
            </li>
          </ul>
          <div className={styles.price}>
            <h2>&euro;{truckInfo.price.toFixed(2)}</h2>
          </div>
        </div>
      </section>
      <ul className={styles.imgGallery}>
        {truckInfo.gallery.map((img, index) => (
          <li key={index} className={styles.imgItem}>
            <img src={img.original} alt="Truck photo" className={styles.img} />
          </li>
        ))}
      </ul>
      <p>{truckInfo.description}</p>
    </section>
  );
}
