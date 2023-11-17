import Navigation from './navigation/Navigation';
import Contact from './contact/Contact';

import './Sidebar.css';

function Sidebar() {
    return (
        <section className="sidebar-container">
            <Navigation />
            <Contact />
        </section>
    );
}

export default Sidebar;
