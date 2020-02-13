import React, { Fragment } from "react";
import classes from "./MobileNav.module.scss";
import NavDrawer from "../NavDrawer/NavDrawer";

const MobileNav = props => {
	let chooseLink = () => {
		props.linkChosen();
		document.getElementById("checkbox").checked = false;
	};
	return (
		<Fragment>
			<input
				className={classes.nav__checkbox}
				type="checkbox"
				id="checkbox"
				onChange={props.drawerClicked}
			/>
			<label className={classes.nav__label} htmlFor="checkbox">
				<div className={classes.nav__box}>
					<div className={classes.nav__line}></div>
				</div>
				<div className={classes.nav__triangle}></div>
			</label>
			<NavDrawer drawerOpen={props.drawerOpen} linkChosen={chooseLink} />
		</Fragment>
	);
};

export default MobileNav;
