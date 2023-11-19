import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { dataProtection } from '../../../../assets';

import BigView from './BigView';

describe('BigView', () => {
  it('renders a big view item', () => {
    const component = render(
      <BigView image={dataProtection} category="Data Protection"  />
    );
    expect(component).toMatchSnapshot();
    const image = component.getByAltText('Data Protection');
    expect(image).toBeInTheDocument();
  });
});
