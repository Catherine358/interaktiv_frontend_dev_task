import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses, getCourses } from '../../slices/coursesSlice';
import CourseCategory from './CourseCategory/CourseCategory';

import './ContentArea.css';

const ContentArea = () => {
  const dispatch = useDispatch();
  const coursesGroupedByCategories = useSelector(getCourses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
      <section className="courses-container">
      <div>
        <p data-testid="courses-title" className="courses-title">e-Learning Courses</p>
      </div>
      {coursesGroupedByCategories.length > 0 ? coursesGroupedByCategories.map((category) => (
          <CourseCategory
              key={category.name}
              category={category.name}
              image={category.image}
              courses={category.courses}
              dataTestId="category"
          />
      )) : <p>There are no courses</p>}
      </section>
  );
};

export default ContentArea;
