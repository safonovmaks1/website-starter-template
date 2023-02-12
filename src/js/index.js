'use strict';

import '@babel/polyfill';
// import 'focus-visible';

// Helpers
import documentReady from './helpers/documentReady.js';
import * as functions from './helpers/functions.js';
import isWebp from './helpers/isWebp.js';

// Modules
import * as scroll from './modules/scrolls.js';
import * as modals from './modules/modals.js';

documentReady(() => {
	functions.test();
	isWebp();

	// Modules
	scroll.scrollUp('#scroll-up');
	scroll.scrollIndicator();

	modals.modalController({
		modal: '.modal1',
		btnOpen: '.test',
		btnClose: '.modal__close',
	});

	modals.showModalByTime({
		modal: '.modal1',
		time: 5000,
	});
});
