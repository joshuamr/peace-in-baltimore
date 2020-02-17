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

export const dataAos = "slide-up";

export const pageComponentData = {
	about: {
		title: "About Us",
		text: [
			"There are many places in Baltimore to practice yoga, and several places in Baltimore to practice meditation.  However,there is only one place where you can practice a full class dedicated to learning meditation in the yoga tradition. We teach authentic meditation practices, based in the teachings of the yoga sutras.",
			"Our group has been practicing together for over 10 years.  Our members range in experience from beginers all the way up to people with decades of experience.  We take the practice seriously, and give our full effort towards it,but also keep a light heart about ourselves.  We know that the truest wisdom is that we always have so much more to learn.",
			"The class is facilitated by Joshua Meriyah, who has been teaching and practicing meditation for over 20 years.  Joshua has taught meditation in all kinds of settings, including corporations, universities, jails, home shelters, and schools.  He is a certified teacher of yoga and meditation.",
			"Joshua came to meditation through the good fortune of meeting his own teacher several decades ago.  At the time, he was working as a counselor for children and families, and was in the midst suffering from a deep depression.  His teacher showed him that there was another way to approach both his life and his work.  He dedicated himself to living her teachings, and found a peace he never knew could be possible.  He teaches in order to give others the same opportunity his teacher gave him."
		]
	},
	resources: {
		title: "Resources",
		text: []
	},
	register: {
		title: "Register",
		text: []
	},
	contact: {
		title: "Contact",
		text: []
	}
};
