import ScrollReveal from 'ScrollReveal';

export default function revealScroll() {
	const sr = ScrollReveal({
		origin: 'top',
		distance: '60px',
		duration: 2500,
		delay: 400,
		// reset: true
	});

	sr.reveal(`.home__data`);
	sr.reveal(`.home__img`, { delay: 500 });
	sr.reveal(`.home__social`, { delay: 600 });
	sr.reveal(`.about__img, .contact__box`, { origin: 'left' });
	sr.reveal(`.about__data, .contact__form`, { origin: 'right' });
	sr.reveal(`.steps__card, .product__card, .questions__group, .footer`, { interval: 100 });
}
