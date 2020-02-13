import React from "react";
import classes from "./Footer.module.scss";
import LinksList from "../LinksList/LinksList";

const Footer = props => {
	const gotToTop = () => {
		var scrollToTop = window.setInterval(function() {
			var pos = window.pageYOffset;
			if (pos > 0) {
				window.scrollTo(0, pos - 20); // how far to scroll on each step
			} else {
				window.clearInterval(scrollToTop);
			}
		}, 3);
	};
	return (
		<footer className={classes.footer}>
			<LinksList footer={true} clicked={gotToTop} />
			<div className={classes.footer__copy}>
				&copy; 2020 Peace In Baltimore
			</div>
		</footer>
	);
};

export default Footer;
