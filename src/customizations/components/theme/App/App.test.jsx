import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import App from './App';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('App', () => {
  it('renders app', () => {
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
        <App  />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
