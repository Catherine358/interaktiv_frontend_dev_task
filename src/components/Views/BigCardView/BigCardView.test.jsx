import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { dataProtection } from '../../../assets';

import BigCardView from './BigCardView';

describe('BigCardView', () => {
  it('renders a big card view item', () => {
    const component = render(
      <BigCardView image={dataProtection} category="Data Protection"  />
    );
    expect(component).toMatchSnapshot();
    const image = component.getByAltText('Data Protection');
    expect(image).toBeInTheDocument();
  });
});
