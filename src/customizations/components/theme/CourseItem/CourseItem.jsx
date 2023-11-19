import PropTypes from 'prop-types';
import Progress from '../Progress/Progress';

import './CourseItem.css';

const CourseItem = ({ title, duration, progress, doneBy }) => (
    <div className="course-container-details-subcontainer" data-testid="course-item">
      <div className="course-container-details-subcontainer-title">
        <p data-testid="course-item-title">{title}</p>
      </div>
      <div className="course-container-details-subcontainer-eval">
        <p>{duration}</p>
        <p>To be done by:</p>
      </div>
      <div className="course-container-details-subcontainer-eval">
        <div className="course-container-details-subcontainer-eval-status">
          {[...new Array(5)].map((s, index) => (
              <Progress key={'progress' + index} isDone={index < progress} />
            )
          )}
        </div>
        <p>{doneBy ?? '-'}</p>
      </div>
    </div>
  );

export default CourseItem;

CourseItem.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  doneBy: PropTypes.string
};

CourseItem.defaultProps = {
  title: '',
  duration: '',
  progress: 0,
  doneBy: '-'
};
