import { Provider } from 'react-redux';
import { store } from '../../../../store';
import FullView from '../FullView/FullView';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Main from '../Main/Main';

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
