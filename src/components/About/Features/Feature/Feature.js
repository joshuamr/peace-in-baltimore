import React from "react";
import classes from "./Feature.module.scss";

const Feature = props => {
	return (
		<div className={classes.feature}>
			<img src={props.image} className={classes.feature__image} />
			<h3 className={classes.feature__title}>{props.title}</h3>
			<p className={classes.feature__text}>{props.text}</p>
		</div>
	);
};

export default Feature;
