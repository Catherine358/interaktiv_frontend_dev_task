import './Status.css';

function Status({ isDone }) {
    return <span className={`status ${isDone ? 'status-done' : ''}`}></span>;
}

export default Status;
