/**
 * Routes.
 * @module routes
 */

import { defaultRoutes } from '@plone/volto/routes';
import config from '@plone/volto/registry';

import App from '@plone/volto/components/theme/App/App';

/**
 * Routes array.
 * @array
 * @returns {array} Routes.
 */
const routes = [
  {
    path: '/',
    component: config.getComponent('App').component, // Change this if you want a different component
    routes: [
      // Add your routes here
      ...(config.addonRoutes || []),
      ...defaultRoutes,
    ],
  },
];

export default routes;
