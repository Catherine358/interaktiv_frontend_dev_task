import BigView from '../BigView/BigView';
import CourseItem from '../CourseItem/CourseItem';

const CourseCategory = ({ category, image, courses }) => (
    <BigView category={category} image={image}>
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
