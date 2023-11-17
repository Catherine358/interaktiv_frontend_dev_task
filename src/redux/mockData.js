import { dataProtection, fraudPrevention, itSecurity, wphg } from '../assets';

export const data = {
    data: {
        courses: [
            { title: 'Intensification of money laundering prevention - private customer advice', duration: '30min', progress: 3, category: 'Money Laundering and Fraud Prevention', image: fraudPrevention },
            { title: 'Basic Training - Prevention of Money Laundering and Terrorist Financing (V3.0)', duration: '44min', progress: 0, category: 'Money Laundering and Fraud Prevention', image: fraudPrevention },
            { title: 'Advanced Training - Prevention of Money Laundering and Terrorist Financing (V3.0)', duration: '22min', progress: 0, category: 'Money Laundering and Fraud Prevention', image: fraudPrevention },
            { title: 'IT security basics (V1.01.3)', duration: '40min', progress: 0, doneBy: 'March 14, 2024', category: 'IT security and information security', image: itSecurity },
            { title: 'Basic training IT security and information security (V1.0)', duration: '44min', progress: 3, category: 'IT security and information security', image: itSecurity },
            { title: 'Advanced Training IT Security and Information Security (V1.1)', duration: '22min', progress: 0, category: 'IT security and information security', image: itSecurity },
            { title: 'Basic training data protection (V2.0)', duration: '0min', progress: 0, category: 'Data Protection', image: dataProtection },
            { title: 'Privacy Basics (V1.00.2)', duration: '40min', progress: 0, category: 'Data Protection', image: dataProtection },
            { title: 'In-depth training on data protection (V1.0)', duration: '51min', progress: 0, category: 'Data Protection', image: dataProtection },
            { title: 'Privacy Basics 1.0', duration: '40min', progress: 3, category: 'Data Protection', image: dataProtection },
            { title: 'WpHG compliance basics (V1.00.3)', duration: '30min', progress: 0, category: 'WpHG-Compliance', image: wphg },
            { title: 'In-depth WpHG - sales representative (V1.00.2)', duration: '30min', progress: 0, category: 'WpHG-Compliance', image: wphg }
        ]
    }
};
