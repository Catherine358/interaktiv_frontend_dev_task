import TitleView from '../TitleView/TitleView';
import SmallView from '../SmallView/SmallView';
import { dataProtection, fraudPrevention, itSecurity, wphg } from '../../../../assets';

import './SidebarNavigation.css';

const SidebarNavigation = () => (
    <section className="sidebar-nav">
      <TitleView title="Navigation" />
      <SmallView dataTestId="navigation-item" title="Money Laundering and Fraud Prevention" image={fraudPrevention} />
      <SmallView dataTestId="navigation-item" title="IT security and information security" image={itSecurity} />
      <SmallView dataTestId="navigation-item" title="Data Protection" image={dataProtection} />
      <SmallView dataTestId="navigation-item" title="WpHG-Compliance" image={wphg} />
    </section>
  );

export default SidebarNavigation;
