import Status from './status/Status';

import './CourseItem.css';

function CourseItem({ title, duration, status, doneBy }) {
    return (
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
                            <Status isDone={index < status} />
                        )
                    )}
                </div>
                <p>{doneBy ?? '-'}</p>
            </div>
        </div>
    );
}

export default CourseItem;
