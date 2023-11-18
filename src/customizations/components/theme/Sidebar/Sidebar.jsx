import SidebarNavigation from '../SidebarNavigation/SidebarNavigation';
import ContactNavigation from '../ContactNavigation/ContactNavigation';

import './Sidebar.css';

const Sidebar = () => (
    <section className="sidebar">
      <SidebarNavigation />
      <ContactNavigation />
    </section>
  );

export default Sidebar;
