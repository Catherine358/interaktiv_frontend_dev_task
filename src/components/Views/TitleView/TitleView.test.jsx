import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import TitleView from './TitleView';

describe('TitleView', () => {
  it('renders title view container with text', () => {
    const component = render(
      <TitleView title="Hello"  />
    );
    expect(component).toMatchSnapshot();
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });
});
