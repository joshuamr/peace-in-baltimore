import underTheTree from "../assets/images/under-the-tree-640.jpg";
import riverMeditator from "../assets/images/river-meditator-600.jpg";
import mountainMeditator from "../assets/images/mountain-meditator-400x253.jpg";

export const links = [
	{ text: "Meditation", path: "/" },
	{ text: "Yoga", path: "/Yoga" },
	{ text: "About", path: "/About" },
	{ text: "Register", path: "/Register" },
	{ text: "Resources", path: "/Resources" },
	{ text: "Contact Us", path: "/Contact" }
];

export const toggleNoScroll = condition => {
	document.body.classList.toggle("no__scroll", condition);
	document.getElementById("root").classList.toggle("no__scroll", condition);
};

export const dataAos = "slide-up";

export const aboutPageText = [
	"There are many places in Baltimore to practice yoga, and several places in Baltimore to practice meditation.  However,there is only one place where you can practice a full class dedicated to learning meditation in the yoga tradition. We teach authentic meditation practices, based in the teachings of the yoga sutras.",
	"Our group has been practicing together for over 10 years.  Our members range in experience from beginers all the way up to people who have been meditating for decades.  We take the practice seriously, but also keep a light heart about ourselves.  We know that the truest wisdom is that we always have more to learn.",
	"The class is facilitated by Joshua Meriyah, who has been teaching and practicing meditation for over 20 years.  Joshua has taught meditation in all kinds of settings, including corporations, universities, jails, home shelters, and schools.  He is a certified teacher of yoga and meditation.",
	"Joshua came to meditation through the good fortune of meeting his own teacher several decades ago.  At the time, he was working as a counselor for children and families, and was in the midst suffering from a deep depression.  His teacher showed him that there was another way to approach both his life and his work.  He dedicated himself to living her teachings, and found a peace he never knew could be possible.  He teaches in order to give others the same opportunity his teacher gave him."
];

export const gotToTop = () => {
	var scrollToTop = window.setInterval(function() {
		var pos = window.pageYOffset;
		if (pos > 0) {
			window.scrollTo(0, pos - 20); // how far to scroll on each step
		} else {
			window.clearInterval(scrollToTop);
		}
	}, 3);
};

export const testimonials = [
	{
		text:
			"By attending and participating on Sunday mornings with Josh and sharing with the rest of the Sangha, I'm learning to be more present and learning what's really important in life. I love this caring Sangha and I will continue showing up on Sundays!",
		student: "Diane",
		image: underTheTree
	},
	{
		text:
			"Back in 2012, a friend took me to a new class at my local yoga studio. Each class began with a sharing circle, and a meditation or a teaching of a yoga sutra. We shared deeply, and many of us went through huge life changes—from family and friend deaths, marriages, divorces, illnesses, losing jobs, homes, etc. It really bonded the group. Josh is not only an amazing yoga teacher, but he’s also an incredible teacher, facilitator, listener, and friend. I so looked forward to every Sunday morning and the other attendees have grown from acquaintances to dear friends, or as we refer to ourselves, a “tribe.”",
		student: "Beth",
		image: riverMeditator
	},
	{
		text:
			"I started coming to class two years ago, and learning about the sutras--paired with more regular meditation, and the periodic retreats to reinvigorate and deepen my practice--have made a profound difference in my life and given me new learning and tools to work more skillfully with life's challenges. I've found the community to be an open, non-judgmental space for sharing wisdom, connecting, and walking on the journey together.  I have nothing but gratitude.",
		student: "Michelle",
		image: mountainMeditator
	}
];
