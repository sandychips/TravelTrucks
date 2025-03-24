import Button from '../../components/Button/Button.jsx';

import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div className={styles.bgImg}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Campers of your dreams</h1>
          <h2>You can find everything you want in our catalog</h2>
        </div>
        <Button variant="viewNow">View Now</Button>
      </div>
    </div>
  );
}

export default HomePage;
