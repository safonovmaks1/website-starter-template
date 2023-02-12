// navigation with close
export function navigationWithClose() {
	const navMenu = document.getElementById('nav-menu'),
		navToggle = document.getElementById('nav-toggle'),
		navClose = document.getElementById('nav-close'),
		navLink = document.querySelectorAll('.nav__link');

	if (navToggle) {
		navToggle.addEventListener('click', () => {
			navMenu.classList.add('show-menu');
			document.body.classList.add('lock');
		});
	}

	if (navClose) {
		navClose.addEventListener('click', () => {
			navMenu.classList.remove('show-menu');
			document.body.classList.remove('lock');
		});
	}

	function linkAction() {
		navMenu.classList.remove('show-menu');
		document.body.classList.remove('lock');
	}
	navLink.forEach(n => n.addEventListener('click', linkAction));
}

// navigation with out close
export function navigationWithOutClose() {
	const navMenu = document.getElementById('nav-menu'),
		navToggle = document.getElementById('nav-toggle'),
		navLink = document.querySelectorAll('.nav__link');

	if (navToggle && navMenu) {
		navToggle.addEventListener('click', () => {
			navMenu.classList.toggle('show-menu');
			document.body.classList.toggle('lock');
		});
	}

	function linkAction() {
		navMenu.classList.remove('show-menu');
		document.body.classList.remove('lock');
	}
	navLink.forEach(n => n.addEventListener('click', linkAction));
}
