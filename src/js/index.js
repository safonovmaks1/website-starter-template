'use strict';

import '@babel/polyfill';

// Helpers
import documentReady from './helpers/documentReady.js';
import * as functions from './helpers/functions.js';
import isWebp from './helpers/isWebp.js';

documentReady(() => {
	functions.test();
	isWebp();
});
