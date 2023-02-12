// Scroll - Header - Fix
export function scrollHeaderFix() {
	function scrollHeader() {
		const header = document.getElementById('header');

		if (this.scrollY >= 100) header.classList.add('scroll-header');
		else header.classList.remove('scroll-header');
	}
	window.addEventListener('scroll', scrollHeader);
}

// Scroll - Link
export function scrollLink() {
	const sections = document.querySelectorAll('section');

	function scrollActive() {
		const scrollY = window.pageYOffset;

		sections.forEach(current => {
			let sectionHeight = current.offsetHeight,
				sectionTop = current.offsetTop - 55,
				id = current.getAttribute('id');

			if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
				document.querySelector('.nav__menu a[href*=' + id + ']').classList.add('active-link');
			} else {
				document.querySelector('.nav__menu a[href*=' + id + ']').classList.remove('active-link');
			}
		});
	}

	window.addEventListener('scroll', scrollActive);
}

// Scroll - UP
export function scrollUp(scrollUpTrigger) {
	function scrollUp() {
		const scrollUp = document.querySelector(scrollUpTrigger);

		if (this.scrollY >= 200) scrollUp.classList.add('show-scroll');
		else scrollUp.classList.remove('show-scroll');
	}
	window.addEventListener('scroll', scrollUp);
}

// Scroll - Indicator
export function scrollIndicator() {
	const indicatorBar = document.querySelector('.scroll-indicator-bar');

	const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
	const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

	const scrollValue = (pageScroll / height) * 100;
	indicatorBar.style.width = scrollValue + '%';

	window.addEventListener('scroll', scrollIndicator);
}
