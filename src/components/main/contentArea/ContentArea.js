import CourseCategory from './category/CourseCategory';
import { dataProtection, fraudPrevention, itSecurity, wphg } from '../../../assets';

import './ContentArea.css';

function ContentArea() {
    return (
        <section className="courses-container">
            <div>
                <p className="courses-title">e-Learning Courses</p>
            </div>
            <CourseCategory
                category="Money Laundering and Fraud Prevention"
                image={fraudPrevention}
                courses={[
                    { title: "Intensification of money laundering prevention - private customer advice", duration: "30min", status: 3 },
                    { title: "Basic Training - Prevention of Money Laundering and Terrorist Financing (V3.0)", duration: "44min", status: 0 },
                    { title: "Advanced Training - Prevention of Money Laundering and Terrorist Financing (V3.0)", duration: "22min", status: 0 }
                ]}
            />
            <CourseCategory
                category="IT security and information security"
                image={itSecurity}
                courses={[
                    { title: "IT security basics (V1.01.3)", duration: "40min", status: 0, doneBy: "March 14, 2024" },
                    { title: "Basic training IT security and information security (V1.0)", duration: "44min", status: 3 },
                    { title: "Advanced Training IT Security and Information Security (V1.1)", duration: "22min", status: 0 }
                ]}
            />
            <CourseCategory
                category="Data Protection"
                image={dataProtection}
                courses={[
                    { title: "Basic training data protection (V2.0)", duration: "0min", status: 0 },
                    { title: "Privacy Basics (V1.00.2)", duration: "40min", status: 0 },
                    { title: "In-depth training on data protection (V1.0)", duration: "51min", status: 0 },
                    { title: "Privacy Basics 1.0", duration: "40min", status: 3 }
                ]}
            />
            <CourseCategory
                category="WpHG-Compliance"
                image={wphg}
                courses={[
                    { title: "WpHG compliance basics (V1.00.3)", duration: "30min", status: 0 },
                    { title: "In-depth WpHG - sales representative (V1.00.2)", duration: "30min", status: 0 }
                ]}
            />
        </section>
    );
}

export default ContentArea;
