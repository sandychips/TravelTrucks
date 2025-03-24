import TruckOptions from '../TruckOptions/TruckOptions.jsx';
import styles from './TruckOptionsList.module.css';

export default function TruckOptionsList({ data }) {
  const keysOptions = [
    'AC',
    'TV',
    'bathroom',
    'gas',
    'kitchen',
    'microwave',
    'radio',
    'refrigerator',
    'water',
  ];

  return (
    <ul className={styles.optionsList}>
      <li>
        <TruckOptions option={data.transmission} id="transmission" />
      </li>
      <li>
        <TruckOptions option={data.engine} id="engine" />
      </li>
      {keysOptions.map(key => {
        if (data[key] === true) {
          return (
            <li key={key}>
              <TruckOptions option={key} />
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
}
