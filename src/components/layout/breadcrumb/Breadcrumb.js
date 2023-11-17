import { ArrowRightGrayIcon } from '../../../assets';

import './Breadcrumb.css';

function Breadcrumb() {
    return (
        <section className="nav">
            <div className="nav-el">
                <div className="nav-el-subcontainer">
                    <a>Home Page</a>
                    {/*TODO: add fontawesome in another life*/}
                    <div className="icon">
                        <img src={ArrowRightGrayIcon} alt="Arrow right icon" />
                    </div>
                    <a>e-Learning Courses</a>
                </div>
            </div>
            <div className="nav-el-admin">
                <a>admin</a>
            </div>
        </section>
    );
}

export default Breadcrumb;
