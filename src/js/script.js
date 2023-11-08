const burgerBtn = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavItems = document.querySelectorAll(".mobile-nav__item");

const handleNav = () => {
	burgerBtn.classList.toggle("is-active");
	mobileNav.classList.toggle("show-mobile");
};

const closeNav = () => {
	burgerBtn.classList.remove("is-active");
	mobileNav.classList.remove("show-mobile");
};

burgerBtn.addEventListener("click", handleNav);
mobileNavItems.forEach((item) => {
	item.addEventListener("click", closeNav);
});
