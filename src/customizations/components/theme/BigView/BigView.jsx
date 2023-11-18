import { Image, Segment } from 'semantic-ui-react';

import './BigView.css';

const BigView = (props) => {
  const { image, category } = props;

  return (
    <Segment className="big-view" horizontal="true">
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
