import React from "react";
import classes from "./Footer.module.scss";
import LinksList from "../LinksList/LinksList";
import { gotToTop } from "../../util/util";

const Footer = props => {
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
