import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import SmallView from './SmallView';

describe('SmallView', () => {
  it('renders small view container', () => {
    const component = render(
      <SmallView title="Hello" image="Some image"  />
    );
    expect(component).toMatchSnapshot();
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });
});
