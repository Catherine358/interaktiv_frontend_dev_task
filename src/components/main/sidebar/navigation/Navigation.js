import { SmallCard, TitleCard } from '../../../ui';
import { dataProtection, fraudPrevention, itSecurity, wphg } from '../../../../assets';

import './Navigation.css';

function Navigation() {
    return (
        <section className="sidebar-nav">
            <TitleCard title="Navigation" />
            <SmallCard title="Money Laundering and Fraud Prevention" image={fraudPrevention} />
            <SmallCard title="IT security and information security" image={itSecurity} />
            <SmallCard title="Data Protection" image={dataProtection} />
            <SmallCard title="WpHG-Compliance" image={wphg} />
        </section>
    );
}

export default Navigation;
