import { Image, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './BigView.css';

const BigView = (props) => {
  const { image, category, dataTestId } = props;

  return (
    <Segment className="big-view" horizontal="true" data-testid={dataTestId}>
      <div className="big-card-img-container">
        <Image src={image} alt={category} width={35} height={35} />
      </div>
      <div className="big-card-details">
        {props.children}
      </div>
    </Segment>
  );
};

export default BigView;

BigView.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired
};

BigView.defaultProps = {
  image: '',
  category: '',
  dataTestId: ''
};
