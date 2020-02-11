import React, { useState } from "react";
import classes from "./Header.module.scss";
import ValueProp from "../ValueProp/ValueProp";

const Header = props => {
	return (
		<header className={classes.header}>
			<h1 className={classes.heading__1}> Yoga</h1>
			<h1 className={classes.heading__2}>Meditation</h1>
			<h1 className={classes.heading__3}>Baltimore</h1>
			<div className={classes.sparkle}></div>
		</header>
	);
};

export default Header;
