const header = document.querySelector('.header');
const menuBtn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
const toTop = document.querySelector('.to-top');

function setMenu(open) {
	menuBtn.setAttribute('aria-expanded', String(open));
	menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
	nav.classList.toggle('is-open', open);
}

menuBtn.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape' && nav.classList.contains('is-open')) {
		setMenu(false);
		menuBtn.focus();
	}
});

function onScroll() {
	const y = window.scrollY;
	header.classList.toggle('is-scrolled', y > 8);
	toTop.classList.toggle('is-visible', y > 600);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

if ('IntersectionObserver' in window) {
	const reveal = new IntersectionObserver((entries) => {
		for (const entry of entries) {
			if (entry.isIntersecting) {
				entry.target.classList.add('is-in');
				reveal.unobserve(entry.target);
			}
		}
	}, { rootMargin: '0px 0px -10% 0px' });
	document.querySelectorAll('.reveal').forEach((el) => reveal.observe(el));

	const links = new Map([...nav.querySelectorAll('a')].map((a) => [a.hash.slice(1), a]));
	const spy = new IntersectionObserver((entries) => {
		for (const entry of entries) {
			if (!entry.isIntersecting) continue;
			links.forEach((a) => a.classList.remove('is-active'));
			links.get(entry.target.id)?.classList.add('is-active');
		}
	}, { rootMargin: '-45% 0px -50% 0px' });
	links.forEach((_, id) => { const s = document.getElementById(id); if (s) spy.observe(s); });
} else {
	document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-in'));
}
