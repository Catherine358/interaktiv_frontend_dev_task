import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import CourseItem from './CourseItem';

describe('CourseItem', () => {
  it('renders course item', async () => {
    const component = render(
      <CourseItem title="My course" duration="10min" progress={3}  />
    );
    expect(component).toMatchSnapshot();
    expect(screen.getByText(/my course/i)).toBeInTheDocument();
    expect(screen.getByText(/10min/i)).toBeInTheDocument();
    expect(screen.getByText(/-/i)).toBeInTheDocument();
    const items = await screen.queryAllByTestId('progress');
    expect(items).toHaveLength(5);
    const course = component.getAllByTestId('course-item').map((v) => v.textContent);
    expect(course).toMatchInlineSnapshot(`
    Array [
      "My course10minTo be done by:-",
    ]
    `);
  });
});
