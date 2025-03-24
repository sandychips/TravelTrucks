import Review from '../Review/Review.jsx';

import styles from './Revievs.module.css';

export default function Reviews({ reviews }) {
  return (
    <section className={styles.reviews}>
      <ul className={styles.list}>
        {reviews.map((review, index) => (
          <li key={index} className={styles}>
            <Review review={review} />
          </li>
        ))}
      </ul>
    </section>
  );
}
