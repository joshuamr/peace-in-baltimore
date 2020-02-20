import React, { Fragment } from "react";
import classes from "./Header.module.scss";
import Sparkle from "./Sparkle/Sparkle";

const Header = props => {
	let classNames = {
		header: classes.header,
		heading__1: classes.heading__1,
		heading__2: classes.heading__2
	};
	let addClass = (className, classNameToAdd) => {
		classNames[className] =
			classNames[className] + " " + classes[classNameToAdd];
	};
	if (props.yoga) {
		addClass("header", "header__yoga");
		addClass("heading__1", "heading__1__yoga");
	}
	if (props.meditation) {
		addClass("header", "header__meditation");
		addClass("heading__2", "heading__2__meditation");
	}

	return (
		<header className={classNames.header}>
			<h1 className={classNames.heading__1}> Yoga</h1>
			<h1 className={classNames.heading__2}>Meditation</h1>
			<h1 className={classes.heading__3}>Baltimore</h1>
			{props.meditation && <Sparkle />}
		</header>
	);
};

export default Header;
