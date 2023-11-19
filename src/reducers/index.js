/**
 * Root reducer.
 * @module reducers/root
 */

import defaultReducers from '@plone/volto/reducers';

import { coursesReducer } from '../slices/coursesSlice';

/**
 * Root reducer.
 * @function
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
const reducers = {
  ...defaultReducers,
  coursesReducer
};

export default reducers;
