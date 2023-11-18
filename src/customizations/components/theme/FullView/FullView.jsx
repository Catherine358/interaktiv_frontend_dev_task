import Header from '../Header/Header';

import './FullView.css';

const FullView = (props) => (
    <>
      <Header />
      <main>
        {props.children}
      </main>
    </>
  );

export default FullView;
