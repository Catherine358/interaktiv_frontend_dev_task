import TitleView from '../TitleView/TitleView';
import SmallView from '../SmallView/SmallView';
import { dataProtection, fraudPrevention, itSecurity, wphg } from '../../../../assets';

import './SidebarNavigation.css';

const SidebarNavigation = () => (
    <section className="sidebar-nav">
      <TitleView title="Navigation" />
      <SmallView title="Money Laundering and Fraud Prevention" image={fraudPrevention} />
      <SmallView title="IT security and information security" image={itSecurity} />
      <SmallView title="Data Protection" image={dataProtection} />
      <SmallView title="WpHG-Compliance" image={wphg} />
    </section>
  );

export default SidebarNavigation;
