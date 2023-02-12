export default function theme() {
	const themeButton = document.querySelector('#theme-button');
	const darkTheme = 'dark-theme';

	themeButton.addEventListener('click', () => {
		document.body.classList.toggle(darkTheme);
		themeButton.classList.toggle('sun');

		localStorage.setItem('saved-theme', getCurrentTheme());
		localStorage.setItem('saved-icon', getCurrentIcon());
	});

	const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? 'dark' : 'light');
	const getCurrentIcon = () => (themeButton.classList.contains('sun') ? 'sun' : 'moon');

	const selectedTheme = localStorage.getItem('saved-theme');
	const selectedIcon = localStorage.getItem('saved-icon');

	if (selectedTheme) {
		document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
		themeButton.classList[selectedIcon === 'sun' ? 'add' : 'remove']('sun');
	}
}
