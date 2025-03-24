import { useDispatch, useSelector } from 'react-redux';

import Icon from '../Icon/Icon.jsx';

import { selectLocation } from '../../store/trucks/trucksSelectors.js';
import { addLocation } from '../../store/trucks/actions.js';

import styles from './Location.module.css';

export default function Location() {
  const value = useSelector(selectLocation);
  const dispatch = useDispatch();

  const onHandleChange = evt => {
    dispatch(addLocation(evt.target.value));
  };

  return (
    <div>
      <p className={styles.text}>Location</p>
      <div className={styles.inputElements}>
        <input
          type="text"
          name="location"
          value={value}
          placeholder="Kyiv, Ukraine"
          className={styles.input}
          onChange={onHandleChange}
        />
        <i className={styles.icon}>
          <Icon id="map" width={20} height={20} className={styles.icon}></Icon>
        </i>
      </div>
    </div>
  );
}
