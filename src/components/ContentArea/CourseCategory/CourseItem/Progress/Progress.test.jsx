import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Progress from './Progress';

describe('Progress', () => {
  it('renders not done progress element', async () => {
    const component = render(
      <Progress isDone={false}  />
    );
    expect(component).toMatchSnapshot();
    const item = await screen.queryByTestId('progress');
    expect(item).not.toHaveClass('status-done')
  });

  it('renders done progress element', async () => {
    render(
      <Progress isDone={true}  />
    );
    const item = await screen.queryByTestId('progress');
    expect(item).toHaveClass('status-done')
  });
});
