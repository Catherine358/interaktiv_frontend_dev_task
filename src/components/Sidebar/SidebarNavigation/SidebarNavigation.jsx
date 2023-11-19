import { SmallCardView, TitleView } from '../../Views';
import { dataProtection, fraudPrevention, itSecurity, wphg } from '../../../assets';

import './SidebarNavigation.css';

const SidebarNavigation = () => (
    <section className="sidebar-nav">
      <TitleView title="Navigation" />
      <SmallCardView dataTestId="navigation-item" title="Money Laundering and Fraud Prevention" image={fraudPrevention} />
      <SmallCardView dataTestId="navigation-item" title="IT security and information security" image={itSecurity} />
      <SmallCardView dataTestId="navigation-item" title="Data Protection" image={dataProtection} />
      <SmallCardView dataTestId="navigation-item" title="WpHG-Compliance" image={wphg} />
    </section>
  );

export default SidebarNavigation;
