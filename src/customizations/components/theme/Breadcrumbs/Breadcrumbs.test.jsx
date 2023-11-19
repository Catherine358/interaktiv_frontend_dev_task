import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Breadcrumbs from './Breadcrumbs';

describe('Breadcrumbs', () => {
  it('renders breadcrumbs', async () => {
    const component = render(
      <Breadcrumbs  />
    );
    expect(component).toMatchSnapshot();
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    const link = screen.getByRole('link', { name: 'Home Page'});
    expect(link).toBeInTheDocument();
    expect(link.getAttribute('href')).toBe('/');
  });
});
