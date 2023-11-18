import Progress from '../Progress/Progress';

import './CourseItem.css';

const CourseItem = ({ title, duration, progress, doneBy }) => (
    <div className="course-container-details-subcontainer">
      <div className="course-container-details-subcontainer-title">
        <p>{title}</p>
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
