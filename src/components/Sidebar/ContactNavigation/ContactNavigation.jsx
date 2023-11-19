import { TitleView } from '../../Views';

import './ContactNavigation.css';

const ContactNavigation = () => (
    <section>
      <TitleView title="Contact" />
      <div className="sidebar-contact-el">
        <p className="sidebar-contact-el-title">Technical support</p>
        <p className="sidebar-contact-el-text">John Doe</p>
        <a className="sidebar-contact-el-email">it@example.com</a>
      </div>
      <div className="sidebar-contact-el">
        <p className="sidebar-contact-el-title">Content-didactic topics</p>
        <p className="sidebar-contact-el-text">Jane Roe</p>
        <a className="sidebar-contact-el-email">content@example.com</a>
      </div>
    </section>
  );

export default ContactNavigation;
