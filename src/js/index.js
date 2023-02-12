'use strict';

import '@babel/polyfill';

// Helpers
import documentReady from './helpers/documentReady.js';
import * as functions from './helpers/functions.js';
import isWebp from './helpers/isWebp.js';

// Modules
import * as scroll from './modules/scrolls.js';

documentReady(() => {
	functions.test();
	isWebp();

	// Modules
	scroll.scrollUp('#scroll-up');
	scroll.scrollIndicator();
});
