import { Image, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './SmallView.css';

const SmallView = ({ title, image, dataTestId }) => (
    <Segment horizontal="true" data-testid={dataTestId}>
        <div className="small-card-img-container">
          <Image src={image} alt={title} width={35} height={35} />
        </div>
        <p>{title}</p>
    </Segment>
  );

export default SmallView;

SmallView.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired
};

SmallView.defaultProps = {
  title: '',
  image: '',
  dataTestId: ''
};
