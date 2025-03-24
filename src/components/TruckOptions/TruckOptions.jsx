import Icon from '../Icon/Icon.jsx';

import styles from './TruckOptions.module.css';

export default function TruckOptions({ option, id }) {
  return (
    <div className={styles.content}>
      <Icon id={id ? id : option} width={20} height={20}></Icon>
      <p className={styles.info}>{option}</p>
    </div>
  );
}
