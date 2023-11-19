import { Provider } from 'react-redux';
import { store } from '../../../../store';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { FullView, Main } from '../../../../components';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <FullView>
        <Breadcrumbs />
        <Main />
      </FullView>
    </Provider>
  );
}

export default App;
