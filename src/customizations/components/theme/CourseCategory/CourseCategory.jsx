import PropTypes from 'prop-types';
import BigView from '../BigView/BigView';
import CourseItem from '../CourseItem/CourseItem';

const CourseCategory = ({ category, image, courses, dataTestId }) => (
    <BigView category={category} image={image} dataTestId={dataTestId}>
      {courses.map((course) => (
        <CourseItem
          key={course.title}
          title={course.title}
          duration={course.duration}
          progress={course.progress}
        />
      ))}
    </BigView>
  );

export default CourseCategory;

CourseCategory.propTypes = {
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  courses: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    doneBy: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string
  })).isRequired,
  dataTestId: PropTypes.string.isRequired
};

CourseCategory.defaultProps = {
  category: '',
  image: '',
  courses: [],
  dataTestId: ''
};
