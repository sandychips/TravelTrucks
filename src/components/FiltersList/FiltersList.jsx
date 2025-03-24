import Icon from '../Icon/Icon.jsx';
import styles from './FiltersList.module.css';

export default function FiltersList(params) {
  return (
    <label
      className={`${styles.label} ${params.checked ? styles.checked : ''}`}
    >
      <input
        type={params.type}
        id={params.id}
        checked={params.checked}
        onChange={params.onChange}
        className={styles.input}
      />
      <Icon id={params.id} width={32} height={32}></Icon>
      <span className={styles.text}>
        {params.name ? params.name : params.id}
      </span>
    </label>
  );
}
