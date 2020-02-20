import React from "react";
import classes from "./Card.module.scss";
import PassLinks from "./PassLinks/PassLinks";

const Card = props => {
	let customizeClass = className => {
		let title =
			props.title === "Both Yoga and Meditation" ? "Both" : props.title;
		return classes[className] + " " + classes[className + "__" + title];
	};
	return (
		<div className={customizeClass("Card")}>
			<h4 className={customizeClass("Card__title")}>{props.title}</h4>
			<div className={classes.Card__purchase}>
				<PassLinks classType={props.title} />
			</div>
		</div>
	);
};

export default Card;
