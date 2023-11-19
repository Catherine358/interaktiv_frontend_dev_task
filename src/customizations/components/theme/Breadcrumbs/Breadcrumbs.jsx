import { Breadcrumb, Container, Segment } from 'semantic-ui-react';
import { Icon } from '@plone/volto/components';
import rightKey from '@plone/volto/icons/right-key.svg';

import './Breadcrumbs.css';

const Breadcrumbs = () => (
  <div className="ui horizontal segments">
    <Segment
      role="navigation"
      className="breadcrumbs"
      secondary
      vertical
    >
      <Container>
        <Breadcrumb>
          <a href={'/'}>
            Home Page
          </a>
          <Icon name={rightKey} size="18px" />
          <Breadcrumb.Section active>
            e-Learning Courses
          </Breadcrumb.Section>
        </Breadcrumb>
      </Container>
    </Segment>
    <Segment
      role="navigation"
      className="breadcrumbs admin"
      secondary
      vertical
    >
      <Container>
        <Breadcrumb>
          <Breadcrumb.Section>
            admin
          </Breadcrumb.Section>
        </Breadcrumb>
      </Container>
    </Segment>
  </div>
  );

export default Breadcrumbs;
