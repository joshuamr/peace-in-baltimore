import React, { useState, Fragment, useEffect } from "react";
import classes from "./Nav.module.scss";
import LinksList from "../LinksList/LinksList";
import MobileNav from "./MobileNav/MobileNav";

const Nav = props => {
	let [mobile, setMobile] = useState(true);
	let changeNav = () => {
		if (window.innerWidth >= 900) {
			setMobile(false);
		} else if (window.innerWidth < 900) {
			setMobile(true);
		}
	};
	useEffect(() => {
		changeNav();
		window.addEventListener("resize", changeNav);
		return () => window.removeEventListener("resize", changeNav);
	}, []);

	return (
		<nav className={classes.nav}>
			{mobile ? (
				<MobileNav {...props} linkChosen={props.linkChosen} />
			) : (
				<LinksList nav={true} />
			)}
		</nav>
	);
};

export default Nav;
