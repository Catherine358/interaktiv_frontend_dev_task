import { Image, Segment } from 'semantic-ui-react';
import './SmallView.css';

const SmallView = ({ title, image }) => (
    <Segment horizontal="true">
        <div className="small-card-img-container">
          <Image src={image} alt={title} width={35} height={35} />
        </div>
        <p>{title}</p>
    </Segment>
  );

export default SmallView;
