import React, { Fragment, useContext } from "react";
import classes from "./MobileNav.module.scss";
import NavDrawer from "../NavDrawer/NavDrawer";
import { NavContext } from "../../../Context/nav-context";

const MobileNav = props => {
	let navContext = useContext(NavContext);
	let { drawerOpen, setDrawerOpen } = navContext;
	let clickCheckbox = event => {
		setDrawerOpen(!drawerOpen);
	};
	return (
		<Fragment>
			<input
				className={classes.nav__checkbox}
				type="checkbox"
				id="checkbox"
				onChange={clickCheckbox}
			/>
			<label className={classes.nav__label} htmlFor="checkbox">
				<div className={classes.nav__box}>
					<div className={classes.nav__line}></div>
				</div>
				<div className={classes.nav__triangle}></div>
			</label>
			<NavDrawer drawerOpen={drawerOpen} />
		</Fragment>
	);
};

export default MobileNav;
