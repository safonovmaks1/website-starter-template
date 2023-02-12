// Timer
export function timer(id, deadline) {
	const getTimeRemaining = endtime => {
		const t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60),
			hours = Math.floor((t / 1000 / 60 / 60) % 24),
			days = Math.floor(t / 1000 / 60 / 60 / 24);

		return {
			total: t,
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
		};
	};

	const setClock = (selector, endtime) => {
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() {
			const t = getTimeRemaining(endtime);

			const timeForm = time => {
				let t = time;
				if (time < 0) {
					t = '00';
				} else if (time < 10) {
					t = '0' + time;
				}
				return t;
			};

			days.textContent = timeForm(t.days);
			hours.textContent = timeForm(t.hours);
			minutes.textContent = timeForm(t.minutes);
			seconds.textContent = timeForm(t.seconds);
			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	};
	setClock(id, deadline);
}
// let deadline = 'May 18 2022 12:00:00 GMT+0300';
// ui.timer('#timer', deadline);

// Tabs
export function tabs(headerSelector, tabSelector, contentSelector, activeClass, display = 'block') {
	const header = document.querySelector(headerSelector),
		tab = document.querySelectorAll(tabSelector),
		content = document.querySelectorAll(contentSelector);

	function hideTabContent() {
		content.forEach(item => {
			item.style.display = 'none';
		});

		tab.forEach(item => {
			item.classList.remove(activeClass);
		});
	}

	function showTabContent(i = 0) {
		content[i].style.display = display;
		tab[i].classList.add(activeClass);
	}

	hideTabContent();
	showTabContent();

	header.addEventListener('click', e => {
		const target = e.target;
		if (
			target &&
			(target.classList.contains(tabSelector.replace(/\./, '')) ||
				target.parentNode.classList.contains(tabSelector.replace(/\./, '')))
		) {
			tab.forEach((item, i) => {
				if (target == item || target.parentNode == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});
}
// ui.tabs('.tabs__header', '.tabs__title', '.tabs__content', 'tabs--active');

// Accordion
export function accordion(triggersSelector, activeSelector, firstElemShow = false) {
	const accordionItemHeaders = document.querySelectorAll(triggersSelector);

	accordionItemHeaders.forEach(accordionItemHeader => {
		accordionItemHeader.addEventListener('click', event => {
			const currentlyActiveAccordionItemHeader = document.querySelector(activeSelector);

			if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
				currentlyActiveAccordionItemHeader.classList.toggle('active');
				currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
			}

			accordionItemHeader.classList.toggle('active');

			const accordionItemBody = accordionItemHeader.nextElementSibling;
			if (accordionItemHeader.classList.contains('active')) {
				accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
			} else {
				accordionItemBody.style.maxHeight = 0;
			}
		});
	});

	// first accordion open by default, add active class html accordionItemHeaders
	function accordionFirstElemShow() {
		document.querySelector('.accordion__header').classList.add('active');
		accordionItemHeaders[0].nextElementSibling.style.maxHeight =
			accordionItemHeaders[0].nextElementSibling.scrollHeight + 'px';
	}
	if (firstElemShow) {
		accordionFirstElemShow();
	}
}
// ui.accordion('.accordion__header', '.active', true);

// Modals
export function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
	const trigger = document.querySelectorAll(triggerSelector),
		modal = document.querySelector(modalSelector),
		close = document.querySelectorAll(closeSelector),
		popups = document.querySelectorAll('.modal');

	function openModal() {
		modal.classList.add('open');
		document.querySelector('.modal__content').classList.add('open');
		// modal.nextElementSibling.classList.add('open');
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		modal.classList.remove('open');
		document.querySelector('.modal__content').classList.remove('open');
		// modal.nextElementSibling.classList.remove('open');
		document.body.style.overflow = '';
	}

	trigger.forEach(item => {
		item.addEventListener('click', e => {
			if (e.target) {
				e.preventDefault();
			}

			popups.forEach(item => {
				item.classList.remove('open');
				document.querySelector('.modal__content').classList.remove('open');
			});

			openModal();
		});
	});

	close.forEach(item => {
		item.addEventListener('click', () => {
			popups.forEach(item => {
				item.classList.remove('open');
				document.querySelector('.modal__content').classList.remove('open');
			});

			closeModal();
		});
	});

	modal.addEventListener('click', e => {
		if (e.target === modal && closeClickOverlay) {
			popups.forEach(item => {
				item.classList.remove('open');
				document.querySelector('.modal__content').classList.remove('open');
			});

			closeModal();
		}
	});

	document.addEventListener('keydown', e => {
		if (e.keyCode === 27 && closeClickOverlay) {
			closeModal();
		}
	});
}
// ui.bindModal('.btn-test1', '.modal-test1', '.modal__close', false);
// ui.bindModal('.btn-test2', '.modal-test2', '.modal__close');
// ui.bindModal('.btn-test3', '.modal-test3', '.modal__close');

// Modals by Time
export function showModalByTime(selector, time) {
	setTimeout(() => {
		document.querySelector(selector).classList.add('open');
		document.querySelector('.modal__content').classList.add('open');
		document.body.style.overflow = 'hidden';
	}, time);
}
// ui.showModalByTime('.modal-test1', 3000);
