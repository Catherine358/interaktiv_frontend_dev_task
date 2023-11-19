import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import FullView from './FullView';

describe('FullView', () => {
  it('renders full view layout container', () => {
    const component = render(
      <FullView>
        <p>Hello</p>
      </FullView>
    );
    expect(component).toMatchSnapshot();
    expect(screen.getByText(/logo placeholder/i)).toBeInTheDocument();
  });
});
