import React, { useState, useEffect } from "react";
import classes from "./Nav.module.scss";
import LinksList from "../LinksList/LinksList";
import MobileNav from "./MobileNav/MobileNav";
import { Link } from "react-router-dom";
import PeaceLotus from "../../assets/images/PeaceLotus.png";

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
			<div className={classes.nav__title}>
				<Link to="/" className={classes.nav__title__text}>
					Peace In Baltimore
					{/* <img src={PeaceLotus} className={classes.nav__icon} /> */}
				</Link>
			</div>
			<div className={classes.nav__links}>
				{mobile ? <MobileNav {...props} /> : <LinksList nav={true} />}
			</div>
		</nav>
	);
};

export default Nav;
