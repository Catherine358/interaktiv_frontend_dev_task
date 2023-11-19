import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ContactNavigation from './ContactNavigation';

describe('ContactNavigation', () => {
  it('renders contact navigation', () => {
    const component = render(
      <ContactNavigation  />
    );
    expect(component).toMatchSnapshot();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });
});
