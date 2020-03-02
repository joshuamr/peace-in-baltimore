import React, { Fragment } from "react";
import classes from "./Footer.module.scss";
import LinksList from "../LinksList/LinksList";
import { gotToTop } from "../../util/util";

const Footer = props => {
	return (
		<Fragment>
			<div className={classes.footer__border}></div>
			<footer className={classes.footer}>
				<LinksList footer={true} clicked={gotToTop} />
				<div className={classes.footer__copy}>
					&copy; 2020 Peace In Baltimore
				</div>
			</footer>
		</Fragment>
	);
};

export default Footer;
