import './Progress.css';

function Progress({ isDone }) {
    return <span className={`status ${isDone ? 'status-done' : ''}`}></span>;
}

export default Progress;
