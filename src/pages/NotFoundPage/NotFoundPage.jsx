import { Link } from 'react-router-dom';

import styles from './NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <Link to="/" className={styles.link}>
      <button type="button">Home</button>
    </Link>
  );
}

export default NotFoundPage;
