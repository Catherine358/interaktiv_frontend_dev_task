import {dataProtection, fraudPrevention, itSecurity, wphg} from './assets';

import './App.css';

function App() {
    return (
        <>
            <header>
                <div className="logo-container">
                    <p className="logo">Logo placeholder</p>
                </div>
            </header>
            <main>
                <section className="nav">
                    <div className="nav-el">
                        <div className="nav-el-subcontainer">
                            <a>Home Page</a>
                            <i className="fa-solid fa-chevron-right"></i>
                            <a>e-Learning Courses</a>
                        </div>
                    </div>
                    <div className="nav-el-admin">
                        <a>admin</a>
                    </div>
                </section>
                <section className="main">
                    <section className="sidebar-container">
                        <section className="sidebar-nav">
                            <div className="title-container">
                                <p>Navigation</p>
                            </div>
                            <div className="sidebar-nav-el-container">
                                <div className="sidebar-img-container">
                                    <img src={fraudPrevention}
                                         alt="Money Laundering and Fraud Prevention" />
                                </div>
                                <p>Money Laundering and Fraud Prevention</p>
                            </div>
                            <div className="sidebar-nav-el-container">
                                <div className="sidebar-img-container">
                                    <img src={itSecurity}
                                         alt="IT security and information security" />
                                </div>
                                <p>IT security and information security</p>
                            </div>
                            <div className="sidebar-nav-el-container">
                                <div className="sidebar-img-container">
                                    <img src={dataProtection} alt="Data Protection" />
                                </div>
                                <p>Data Protection</p>
                            </div>
                            <div className="sidebar-nav-el-container sidebar-nav-last-el">
                                <div className="sidebar-img-container">
                                    <img src={wphg} alt="WpHG-Compliance" />
                                </div>
                                <p>WpHG-Compliance</p>
                            </div>
                        </section>
                        <section className="sidebar-contact">
                            <div className="title-container">
                                <p>Contact</p>
                            </div>
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
                    </section>
                    <section className="courses-container">
                        <div>
                            <p className="courses-title">e-Learning Courses</p>
                        </div>
                        <div className="course-container">
                            <div className="sidebar-img-container">
                                <img src={fraudPrevention}
                                     alt="Money Laundering and Fraud Prevention" />
                            </div>
                            <div className="course-container-details">
                                <div className="course-container-details-subcontainer">
                                    <div className="course-container-details-subcontainer-title">
                                        <p>Intensification of money laundering prevention - private customer advice</p>
                                    </div>
                                    <div className="course-container-details-subcontainer-eval">
                                        <p>30min</p>
                                        <p>To be done by:</p>
                                    </div>
                                    <div className="course-container-details-subcontainer-eval">
                                        <div className="course-container-details-subcontainer-eval-status">
                                            <span className="status status-done"></span>
                                            <span className="status status-done"></span>
                                            <span className="status status-done"></span>
                                            <span className="status"></span>
                                            <span className="status"></span>
                                        </div>
                                        <p>-</p>
                                    </div>
                                </div>
                                <div className="course-container-details-subcontainer">
                                    <div className="course-container-details-subcontainer-title">
                                        <p>Basic Training - Prevention of Money Laundering and Terrorist Financing
                                            (V3.0)</p>
                                    </div>
                                    <div className="course-container-details-subcontainer-eval">
                                        <p>44min</p>
                                        <p>To be done by:</p>
                                    </div>
                                    <div className="course-container-details-subcontainer-eval">
                                        <div className="course-container-details-subcontainer-eval-status">
                                            <span className="status"></span>
                                            <span className="status"></span>
                                            <span className="status"></span>
                                            <span className="status"></span>
                                            <span className="status"></span>
                                        </div>
                                        <p>-</p>
                                    </div>
                                </div>
                                <div className="course-container-details-subcontainer">
                                    <div className="course-container-details-subcontainer-title">
                                        <p>Advanced Training - Prevention of Money Laundering and Terrorist Financing
                                            (V3.0)</p>
                                    </div>
                                    <div className="course-container-details-subcontainer-eval">
                                        <p>22min</p>
                                        <p>To be done by:</p>
                                    </div>
                                    <div className="course-container-details-subcontainer-eval">
                                        <div className="course-container-details-subcontainer-eval-status">
                                            <span className="status"></span>
                                            <span className="status"></span>
                                            <span className="status"></span>
                                            <span className="status"></span>
                                            <span className="status"></span>
                                        </div>
                                        <p>-</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="course-container">
                            <div className="sidebar-img-container">
                                <img src={itSecurity}
                                     alt="IT security and information security" />
                            </div>
                            <div className="course-container-details">
                                <div className="course-container-details-subcontainer">
                                    <div className="course-container-details-subcontainer-title">
                                        <p>IT security basics (V1.01.3)</p>
                                    </div>
                                    <div className="course-container-details-subcontainer-eval">
                                        <p>40min</p>
                                        <p>To be done by:</p>
                                    </div>
                                    <div className="course-container-details-subcontainer-eval">
                                        <div className="course-container-details-subcontainer-eval-status">
                                            <span className="status"></span>
                                            <span className="status"></span>
                                            <span className="status"></span>
                                            <span className="status"></span>
                                            <span className="status"></span>
                                        </div>
                                        <p>March 14, 2024</p>
                                    </div>
                                </div>
                                <div className="course-container-details-subcontainer">
                                    <div className="course-container-details-subcontainer-title">
                                        <p>Basic training IT security and information security (V1.0)</p>
                                    </div>
                                    <div className="course-container-details-subcontainer-eval">
                                        <p>44min</p>
                                        <p>To be done by:</p>
                                    </div>
                                    <div className="course-container-details-subcontainer-eval">
                                        <div className="course-container-details-subcontainer-eval-status">
                                            <span className="status status-done"></span>
                                            <span className="status status-done"></span>
                                            <span className="status status-done"></span>
                                            <span className="status"></span>
                                            <span className="status"></span>
                                        </div>
                                        <p>-</p>
                                    </div>
                                </div>
                                <div className="course-container-details-subcontainer">
                                    <div className="course-container-details-subcontainer-title">
                                        <p>Advanced Training IT Security and Information Security (V1.1)</p>
                                    </div>
                                    <div className="course-container-details-subcontainer-eval">
                                        <p>22min</p>
                                        <p>To be done by:</p>
                                    </div>
                                    <div className="course-container-details-subcontainer-eval">
                                        <div className="course-container-details-subcontainer-eval-status">
                                            <span className="status"></span>
                                            <span className="status"></span>
                                            <span className="status"></span>
                                            <span className="status"></span>
                                            <span className="status"></span>
                                        </div>
                                        <p>-</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="course-container">
                            <div className="sidebar-img-container">
                                <img src={dataProtection} alt="Data Protection" />
                            </div>
                            <div className="course-container-details">
                                <div className="course-container-details-subcontainer">
                                    <div className="course-container-details-subcontainer-title">
                                        <p>Basic training data protection (V2.0)</p>
                                    </div>
                                    <div className="course-container-details-subcontainer-eval">
                                        <p>0min</p>
                                        <p>To be done by:</p>
                                    </div>
                                    <div className="course-container-details-subcontainer-eval">
                                        <div className="course-container-details-subcontainer-eval-status">
                                            <span className="status"></span>
                                            <span className="status"></span>
                                            <span className="status"></span>
                                            <span className="status"></span>
                                            <span className="status"></span>
                                        </div>
                                        <p>-</p>
                                    </div>
                                </div>
                                <div className="course-container-details-subcontainer">
                                    <div className="course-container-details-subcontainer-title">
                                        <p>Privacy Basics (V1.00.2)</p>
                                    </div>
                                    <div className="course-container-details-subcontainer-eval">
                                        <p>40min</p>
                                        <p>To be done by:</p>
                                    </div>
                                    <div className="course-container-details-subcontainer-eval">
                                        <div className="course-container-details-subcontainer-eval-status">
                                            <span className="status"></span>
                                            <span className="status"></span>
                                            <span className="status"></span>
                                            <span className="status"></span>
                                            <span className="status"></span>
                                        </div>
                                        <p>-</p>
                                    </div>
                                </div>
                                <div className="course-container-details-subcontainer">
                                    <div className="course-container-details-subcontainer-title">
                                        <p>In-depth training on data protection (V1.0)</p>
                                    </div>
                                    <div className="course-container-details-subcontainer-eval">
                                        <p>51min</p>
                                        <p>To be done by:</p>
                                    </div>
                                    <div className="course-container-details-subcontainer-eval">
                                        <div className="course-container-details-subcontainer-eval-status">
                                            <span className="status"></span>
                                            <span className="status"></span>
                                            <span className="status"></span>
                                            <span className="status"></span>
                                            <span className="status"></span>
                                        </div>
                                        <p>-</p>
                                    </div>
                                </div>
                                <div className="course-container-details-subcontainer">
                                    <div className="course-container-details-subcontainer-title">
                                        <p>Privacy Basics 1.0</p>
                                    </div>
                                    <div className="course-container-details-subcontainer-eval">
                                        <p>40min</p>
                                        <p>To be done by:</p>
                                    </div>
                                    <div className="course-container-details-subcontainer-eval">
                                        <div className="course-container-details-subcontainer-eval-status">
                                            <span className="status status-done"></span>
                                            <span className="status status-done"></span>
                                            <span className="status status-done"></span>
                                            <span className="status"></span>
                                            <span className="status"></span>
                                        </div>
                                        <p>-</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="course-container">
                            <div className="sidebar-img-container">
                                <img src={wphg} alt="WpHG-Compliance" />
                            </div>
                            <div className="course-container-details">
                                <div className="course-container-details-subcontainer">
                                    <div className="course-container-details-subcontainer-title">
                                        <p>WpHG compliance basics (V1.00.3)</p>
                                    </div>
                                    <div className="course-container-details-subcontainer-eval">
                                        <p>30min</p>
                                        <p>To be done by:</p>
                                    </div>
                                    <div className="course-container-details-subcontainer-eval">
                                        <div className="course-container-details-subcontainer-eval-status">
                                            <span className="status"></span>
                                            <span className="status"></span>
                                            <span className="status"></span>
                                            <span className="status"></span>
                                            <span className="status"></span>
                                        </div>
                                        <p>-</p>
                                    </div>
                                </div>
                                <div className="course-container-details-subcontainer">
                                    <div className="course-container-details-subcontainer-title">
                                        <p>In-depth WpHG - sales representative (V1.00.2)</p>
                                    </div>
                                    <div className="course-container-details-subcontainer-eval">
                                        <p>30min</p>
                                        <p>To be done by:</p>
                                    </div>
                                    <div className="course-container-details-subcontainer-eval">
                                        <div className="course-container-details-subcontainer-eval-status">
                                            <span className="status"></span>
                                            <span className="status"></span>
                                            <span className="status"></span>
                                            <span className="status"></span>
                                            <span className="status"></span>
                                        </div>
                                        <p>-</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
        </>
    );
}

export default App;
