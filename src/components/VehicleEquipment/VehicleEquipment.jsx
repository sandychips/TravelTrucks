import { useDispatch, useSelector } from 'react-redux';

import FiltersList from '../FiltersList/FiltersList.jsx';

import { selectEquipment } from '../../store/trucks/trucksSelectors.js';
import { addEquipment } from '../../store/trucks/actions.js';

import styles from './VehicleEquipment.module.css';

export default function VehicleEquipment() {
  const equipments = useSelector(selectEquipment);
  const dispatch = useDispatch();

  const handleCheckboxChange = id => {
    dispatch(addEquipment(id));
  };

  return (
    <div>
      <p className={styles.text}>Filters</p>
      <div className={styles.filters}>
        <h3 className={styles.title}>Vehicle Equipment</h3>
        <ul className={styles.list}>
          {Object.entries(equipments).map(([key, value]) => (
            <li key={key} className={styles.item}>
              <FiltersList
                id={key}
                checked={value}
                onChange={() => handleCheckboxChange(key)}
                type="checkbox"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
