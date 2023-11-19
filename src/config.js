/** Volto Project Configuration
 * The recommended way for configuring a Volto project is using an add-on.
 * The project should only be considered as boilerplate, and all the code and
 * configuration should happen and be placed in add-ons.
 *
 * Both configuring directly and placing code in a project is discouraged, and might be
 * removed at some point from Volto.
 *
 * The local project is left for backwards compatibility for existing projects.
 */

// [Internal] All the imports of modules required for the configuration *must* happen
// here BEFORE the following line
import { Main, FullView, TitleView, BigCardView, SmallCardView } from './components';
import '@plone/volto/config';

export default function applyConfig(config) {
  config.views.layoutViews = {
    ...config.views.layoutViews,
    main_view: Main,
    full_view: FullView,
    small_card_view: SmallCardView,
    big_card_view: BigCardView,
    title_view: TitleView
  };
  return config;
}
