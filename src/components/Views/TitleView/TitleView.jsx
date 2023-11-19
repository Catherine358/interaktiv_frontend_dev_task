import PropTypes from 'prop-types';
import './TitleView.css';

const TitleView = ({ title }) => (
    <div className="title-container">
      <p>{title}</p>
    </div>
  );

export default TitleView;

TitleView.propTypes = {
  title: PropTypes.string.isRequired
};

TitleView.defaultProps = {
  title: ''
};
