import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from './Header';

describe('Header', () => {
  it('renders header', () => {
    const component = render(
      <Header  />
    );
    expect(component).toMatchSnapshot();
    expect(screen.getByText(/logo placeholder/i)).toBeInTheDocument();
  });
});
