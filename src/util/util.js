export const links = [
	{ text: "Meditation", path: "/" },
	{ text: "Yoga", path: "/yoga" },
	{ text: "About", path: "/about" },
	{ text: "Register", path: "/register" },
	{ text: "Resources", path: "/resources" },
	{ text: "Contact Us", path: "/contact" }
];

export const toggleNoScroll = condition => {
	document.body.classList.toggle("no__scroll", condition);
	document.getElementById("root").classList.toggle("no__scroll", condition);
};
