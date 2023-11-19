import PropTypes from 'prop-types';
import './Progress.css';

const Progress = ({ isDone }) => <span data-testid="progress" className={`status ${isDone ? 'status-done' : ''}`}></span>;

export default Progress;

Progress.propTypes = {
  isDone: PropTypes.bool
};

Progress.defaultProps = {
  isDone: false
};
