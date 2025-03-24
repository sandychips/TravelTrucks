import TruckOptionsList from '../TruckOptionsList/TruckOptionsList.jsx';
import styles from './DetailInfo.module.css';

export default function DetailInfo({ truckInfo }) {
  return (
    <section className={styles.detail_info}>
      <TruckOptionsList data={truckInfo} />
      <section className={styles.info}>
        <h3 className={styles.title}>Vehicle details</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <p>Form</p>
            <p>{truckInfo.form}</p>
          </li>
          <li className={styles.item}>
            <p>Length</p>
            <p>{truckInfo.length}</p>
          </li>
          <li className={styles.item}>
            <p>Width</p>
            <p>{truckInfo.width}</p>
          </li>
          <li className={styles.item}>
            <p>Height</p>
            <p>{truckInfo.height}</p>
          </li>
          <li className={styles.item}>
            <p>Tank</p>
            <p>{truckInfo.tank}</p>
          </li>
          <li className={styles.item}>
            <p>Consumption</p>
            <p>{truckInfo.consumption}</p>
          </li>
        </ul>
      </section>
    </section>
  );
}
