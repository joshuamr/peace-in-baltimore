import React from "react";
import classes from "./Feature.module.scss";

const Feature = props => {
	return (
		<div className={classes.feature}>
            <div className = {classes.feature__icon}>
                {props.children}
            </div>
			<h2 className={classes.feature__title} style = {props.title === "Supportive Community" ? {marginTop: "0"} : {}}>{props.title}</h2>
			<h3 className={classes.feature__text}>{props.text}</h3>
		</div>
	);
};

export default Feature;
