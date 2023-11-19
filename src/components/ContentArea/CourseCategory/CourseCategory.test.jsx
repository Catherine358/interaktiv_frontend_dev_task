import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import CourseCategory from './CourseCategory';

describe('CourseCategory', () => {
  it('renders course category item', () => {
    const component = render(
      <CourseCategory
        category="My category"
        courses={[{ title: 'First course', duration: '5min', progress: 0, image: 'Some image', category: 'My category' }]}
        image="Some image"
      />
    );
    expect(component).toMatchSnapshot();
    expect(screen.getByText(/first course/i)).toBeInTheDocument();
  });
});
