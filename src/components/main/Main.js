import Sidebar from './sidebar/Sidebar';
import ContentArea from './contentArea/ContentArea';

import './Main.css';

function Main() {
    return (
        <section className="main">
            <Sidebar />
            <ContentArea />
        </section>
    );
}

export default Main;
