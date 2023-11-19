import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import SmallCardView from './SmallCardView';

describe('SmallCardView', () => {
  it('renders small card view container', () => {
    const component = render(
      <SmallCardView title="Hello" image="Some image"  />
    );
    expect(component).toMatchSnapshot();
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });
});
