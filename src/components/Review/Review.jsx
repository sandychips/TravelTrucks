import Icon from '../Icon/Icon.jsx';

import styles from './Review.module.css';

export default function Review({ review }) {
  const items = [];
  for (let i = 1; i <= 5; i++) {
    items.push(
      <li key={i}>
        <Icon
          id="star"
          width={16}
          height={16}
          color={review.reviewer_rating >= i ? 'rating' : 'badges'}
        ></Icon>
      </li>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h2 className={styles.avatar}>
          {review.reviewer_name[0].toUpperCase()}
        </h2>
        <div>
          <p className={styles.name}>{review.reviewer_name}</p>
          <ul className={styles.list}>{items}</ul>
        </div>
      </div>
      <p>{review.comment}</p>
    </div>
  );
}
