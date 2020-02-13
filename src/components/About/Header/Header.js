import React from "react";
import classes from "./Header.module.scss";
import JoshMorningMeditation from "assets/images/meditating-baltimore.jpg";

const AboutHeader = props => {
	return (
		<header className={classes.header}>
			<div className={classes.header__image_holder}>
				<img
					className={classes.header__image}
					src={JoshMorningMeditation}
				/>
			</div>
			<h1 className={classes.header__title}>About Us</h1>
		</header>
	);
};

export default AboutHeader;
