import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';


import SidebarNavigation from './SidebarNavigation';

describe('SidebarNavigation', () => {
  it('renders sidebar navigation', async () => {
    const component = render(
      <SidebarNavigation  />
    );
    expect(component).toMatchSnapshot();
    expect(screen.getByText(/navigation/i)).toBeInTheDocument();
    const items = await screen.queryAllByTestId('navigation-item');
    expect(items).toHaveLength(4);
  });
});
