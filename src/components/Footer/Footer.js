import React from "react";
import classes from "./Footer.module.scss";
import LinksList from "../LinksList/LinksList";

const Footer = props => {
	return (
		<footer className={classes.footer}>
			<LinksList />
			<div className={classes.footer__copy}>
				&copy; 2020 Peace In Baltimore
			</div>
		</footer>
	);
};

export default Footer;
