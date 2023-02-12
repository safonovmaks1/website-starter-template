export function modalController({
	modal,
	btnOpen,
	btnClose,
	time = 300,
	closeClickOverlay = true,
}) {
	const buttonElems = document.querySelectorAll(btnOpen);
	const modalElem = document.querySelector(modal);

	modalElem.style.cssText = `
		display: flex;
		visibility: hidden;
		opacity: 0;
		transition: opacity ${time}ms ease-out;
	`;

	const closeModal = event => {
		const target = event.target;

		if (
			(target === modalElem && closeClickOverlay) ||
			(btnClose && target.closest(btnClose)) ||
			(event.code === 'Escape' && closeClickOverlay)
		) {
			modalElem.style.opacity = '0';
			document.body.style.overflow = '';

			setTimeout(() => {
				modalElem.style.visibility = 'hidden';
			}, time);

			window.removeEventListener('keydown', closeModal);
		}
	};

	const openModal = () => {
		modalElem.style.visibility = 'visible';
		modalElem.style.opacity = '1';
		document.body.style.overflow = 'hidden';

		window.addEventListener('keydown', closeModal);
	};

	buttonElems.forEach(item => {
		item.addEventListener('click', e => {
			if (e.target) {
				e.preventDefault();
			}

			openModal();
		});
	});

	modalElem.addEventListener('click', closeModal);
}
// modals.modalController({
// 	modal: '.modal2',
// 	btnOpen: '.test2',
// 	btnClose: '.modal__close',
// 	time: 500,
// });

// Modals by Time
export function showModalByTime({ modal, time }) {
	const popup = document.querySelector(modal);

	setTimeout(() => {
		popup.style.visibility = 'visible';
		popup.style.opacity = '1';
		document.body.style.overflow = 'hidden';
	}, time);
}
// modals.showModalByTime({
// 	modal: '.modal1',
// 	time: 5000,
// });
