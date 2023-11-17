import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses, getCourses } from '../../../redux/coursesSlice';
import CourseCategory from './category/CourseCategory';

import './ContentArea.css';

function ContentArea() {
    const dispatch = useDispatch();
    const coursesGroupedByCategories = useSelector(getCourses);

    useEffect(() => {
        dispatch(fetchCourses());
    }, [dispatch]);

    return (
        <section className="courses-container">
            <div>
                <p className="courses-title">e-Learning Courses</p>
            </div>
            {coursesGroupedByCategories.map((category) => (
                <CourseCategory
                    key={category.name}
                    category={category.name}
                    image={category.image}
                    courses={category.courses}
                />
            ))}
        </section>
    );
}

export default ContentArea;
