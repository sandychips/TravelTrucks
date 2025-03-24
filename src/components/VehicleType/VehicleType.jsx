import { useDispatch, useSelector } from 'react-redux';

import FiltersList from '../FiltersList/FiltersList.jsx';

import { selectType } from '../../store/trucks/trucksSelectors.js';
import { addType } from '../../store/trucks/actions.js';

import styles from './VehicleType.module.css';

export default function VehicleType() {
  const type = useSelector(selectType);
  const dispatch = useDispatch();

  const vehicleTypes = ['panelTruck', 'fullyIntegrated', 'alcove'];

  const vehicleTypesFofFront = ['van', 'fully Integrated', 'alcove'];

  const handleRadioChange = value => {
    dispatch(addType(value));
  };

  return (
    <div className={styles.filters}>
      <h3 className={styles.title}>Vehicle Type</h3>
      <ul className={styles.list}>
        {vehicleTypes.map((vehicle, index) => (
          <li key={index} className={styles.item}>
            <FiltersList
              id={vehicle}
              checked={vehicle === type}
              onChange={() => handleRadioChange(vehicle)}
              type="radio"
              //different titles???
              name={vehicleTypesFofFront[index]}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
