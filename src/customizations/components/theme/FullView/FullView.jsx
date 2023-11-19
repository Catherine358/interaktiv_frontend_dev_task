import PropTypes from 'prop-types';
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

FullView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
