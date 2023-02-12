import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

export const slider = (sliderClass, btnNext, btnPrev, pagination) => {
	new Swiper(sliderClass, {
		modules: [Navigation, Pagination, Autoplay],
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		loop: true,
		navigation: {
			nextEl: btnNext,
			prevEl: btnPrev,
		},
		pagination: {
			el: pagination,
			clickable: true,
			dynamicBullets: true,
			// type: 'fraction',
		},
	});
};
