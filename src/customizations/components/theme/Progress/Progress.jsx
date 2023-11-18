import './Progress.css';

const Progress = ({ isDone }) => <span className={`status ${isDone ? 'status-done' : ''}`}></span>;

export default Progress;
