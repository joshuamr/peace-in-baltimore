import React, { useState } from "react";
import classes from "./Nav.module.scss";
import NavDrawer from "./NavDrawer/NavDrawer";

const Nav = props => {
	return (
		<nav className={classes.nav}>
			<input
				className={classes.nav__checkbox}
				type="checkbox"
				id="checkbox"
				onChange={props.drawerClicked}
			/>
			<label for="checkbox" className={classes.nav__label}>
				<div className={classes.nav__box}>
					<div className={classes.nav__line}></div>
				</div>
				<div className={classes.nav__triangle}></div>
			</label>
			<NavDrawer drawerOpen={props.drawerOpen} />
		</nav>
	);
};

export default Nav;
