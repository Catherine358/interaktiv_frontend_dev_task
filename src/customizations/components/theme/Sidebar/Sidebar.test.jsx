import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Sidebar from './Sidebar';

describe('Sidebar', () => {
  it('renders sidebar', () => {
    const component = render(
      <Sidebar  />
    );
    expect(component).toMatchSnapshot();
    expect(screen.getByText(/navigation/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });
});
