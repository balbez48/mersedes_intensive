const burger = document.querySelector('.humburger-menu');
const menuElem = document.querySelector('.menu');
const listLinks = document.querySelectorAll('.menu-list__item');
const arrayLinks = [...listLinks, burger];

const toggleMenu = () => {
	menuElem.classList.toggle('menu-active');
	burger.classList.toggle('humburger-menu-active');
}

arrayLinks.forEach((listItem) => {
	listItem.addEventListener('click', () => {
		toggleMenu();
	})
})
