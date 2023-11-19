import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Main from './Main';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Main', () => {
  it('renders main content layout', () => {
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
        <Main  />
      </Provider>
    );
    expect(component).toMatchSnapshot();
    expect(screen.getByText(/first course/i)).toBeInTheDocument();
  });
});
