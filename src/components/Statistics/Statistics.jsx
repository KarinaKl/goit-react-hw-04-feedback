import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <p>Good:</p>
        {good}
      </li>
      <li className={styles.item}>
        <p>Neutral:</p>
        {neutral}
      </li>
      <li className={styles.item}>
        <p>Bad:</p>
        {bad}
      </li>
      <li className={styles.item}>
        <p>Total:</p>
        {total}
      </li>
      <li className={styles.item}>
        <p>Positive feedback:</p>
        {positivePercentage}%
      </li>
    </ul>
  );
};
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
