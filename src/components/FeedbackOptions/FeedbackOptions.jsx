import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';
const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div className={styles.boxbtn}>
      {options.map(option => (
        <button
          className={styles.btn}
          type="button"
          onClick={() => onLeaveFeedback(option)}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
