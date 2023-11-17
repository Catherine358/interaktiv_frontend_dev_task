import { BigCard } from '../../../ui';
import CourseItem from './course/CourseItem';

function CourseCategory({ category, image, courses }) {
    return (
        <BigCard category={category} image={image}>
            {courses.map((course) => (
                <CourseItem
                    key={course.title}
                    title={course.title}
                    duration={course.duration}
                    status={course.status}
                />
            ))}
        </BigCard>
    );
}

export default CourseCategory;
