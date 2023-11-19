import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import ContentArea from './ContentArea';
import { fraudPrevention } from '../../../../assets';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const fakeGroupedCourses = [{ name: 'First category', image: 'Some image', courses: [
    { title: 'Intensification of money laundering prevention - private customer advice', duration: '30min', progress: 3, category: 'Money Laundering and Fraud Prevention', image: fraudPrevention },
    { title: 'Basic Training - Prevention of Money Laundering and Terrorist Financing (V3.0)', duration: '44min', progress: 0, category: 'Money Laundering and Fraud Prevention', image: fraudPrevention },
    { title: 'Advanced Training - Prevention of Money Laundering and Terrorist Financing (V3.0)', duration: '22min', progress: 0, category: 'Money Laundering and Fraud Prevention', image: fraudPrevention },
  ] }];

describe('ContentArea',  () => {
  it('renders a content area', async () => {
    const store = mockStore({
      courses: {
        courses: [
          {
            name: 'First category',
            image: 'Some image',
            courses: [
              { title: 'First course', duration: '15min', image: 'Some image', category: 'First category', progress: 0 }
            ]
          }
        ]
      }
    });
    const component = render(
      <Provider store={store}>
        <ContentArea  />
      </Provider>
    );
    const title = await screen.queryByTestId('courses-title')
    expect(title).toBeInTheDocument();
    expect(component).toMatchSnapshot();

    const items = await screen.queryByTestId('category');
    expect(items).toBeInTheDocument();
  });

  it('renders category list successfully', () => {
    const store = mockStore({
      courses: {
        courses: fakeGroupedCourses
      }
    });
    render(
      <Provider store={store}>
        <ContentArea  />
      </Provider>
    );
    expect(screen.getByText(/basic training/i)).toBeInTheDocument();
  });

  it('renders category list with no data', () => {
    const store = mockStore({
      courses: {
        courses: []
      }
    });
    render(
      <Provider store={store}>
        <ContentArea data={[]}  />
      </Provider>
    );
    expect(screen.getByText(/there are no courses/i)).toBeInTheDocument();
  });
});
