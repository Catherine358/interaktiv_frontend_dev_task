import { Container, Segment } from 'semantic-ui-react';

import './Header.css';

const Header = () => (
    <Segment basic className="header-wrapper" role="banner">
      <Container>
        <div className="header">
            <div className="logo">
              <p>Logo placeholder</p>
            </div>
        </div>
      </Container>
    </Segment>
  );

export default Header;
